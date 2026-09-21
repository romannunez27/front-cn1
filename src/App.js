import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest, apiRequest } from './authConfig';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const { instance, accounts } = useMsal();
  const [usuarioBackend, setUsuarioBackend] = useState(null);
  const [errorBackend, setErrorBackend] = useState(null);

  const iniciarSesion = () => {
    instance.loginRedirect(loginRequest)
      .catch(error => {
        console.error(error);
      });
  };

  const cerrarSesion = () => {
    instance.logoutRedirect();
  };

  useEffect(() => {
    if (accounts.length === 0) {
      return;
    }

    const obtenerUsuarioBackend = async () => {
      try {
        const tokenResponse = await instance.acquireTokenSilent({ ...apiRequest, account: accounts[0] });
        const accessToken = tokenResponse.accessToken;
        console.log(accessToken);

        Axios.get("http://localhost:8080/api/usuario", { headers: { Authorization: `Bearer ${accessToken}` } })
          .then((response) => {
            console.log(response.data);
            setUsuarioBackend(response.data);
          })
          .catch((error) => {
            console.log(error);
            setErrorBackend("Error consultando api");
          });
      } catch (error) {
        console.log("Error obteniendo datos", error);
        setErrorBackend("No fue posible obtener el access token");
      }
    };

    obtenerUsuarioBackend();
  }, [accounts, instance]);

  const cuenta = accounts[0];

  return (
    <div className="app">
      <main className="panel">
        <header className="panel-header">
          <p className="eyebrow">Microsoft Entra ID</p>
          <h1>Inicio de sesión</h1>
          <p className="lede">Acceso restringido a usuarios autenticados.</p>
        </header>

        <UnauthenticatedTemplate>
          <p className="status">No hay una sesión activa.</p>
          <div className="actions">
            <button type="button" onClick={iniciarSesion} className="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>
          <h2 className="section-title">Sesión</h2>

          {cuenta && (
            <dl className="fields">
              <div className="field">
                <dt>Nombre</dt>
                <dd>{cuenta.name}</dd>
              </div>
              <div className="field">
                <dt>Usuario</dt>
                <dd>{cuenta.username}</dd>
              </div>
              <div className="field">
                <dt>Identificador</dt>
                <dd>{cuenta.idTokenClaims?.oid}</dd>
              </div>
            </dl>
          )}

          {usuarioBackend && (
            <>
              <h2 className="section-title">API</h2>
              <p className="status">{typeof usuarioBackend === 'string' ? usuarioBackend : JSON.stringify(usuarioBackend)}</p>
            </>
          )}

          {errorBackend && <p className="notice">{errorBackend}</p>}

          {cuenta?.idTokenClaims && (
            <details className="claims">
              <summary>Claims del token</summary>
              <pre>{JSON.stringify(cuenta.idTokenClaims, null, 2)}</pre>
            </details>
          )}

          <div className="actions">
            <button type="button" onClick={cerrarSesion} className="btn btn-ghost">
              Cerrar sesión
            </button>
          </div>
        </AuthenticatedTemplate>
      </main>
    </div>
  );
}

export default App;
