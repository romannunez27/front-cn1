import "./App.css";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal
} from "@azure/msal-react";

import {
  loginRequest,
  apiRequest
} from "./authConfig";

import { useState } from "react";


function App() {

  const { instance, accounts } = useMsal();

  const [tokenObtenido, setTokenObtenido] = useState(false);
  const [errorToken, setErrorToken] = useState(null);


  const usuario =
    accounts.length > 0
      ? accounts[0]
      : null;


  /*
   * INICIAR SESIÓN
   */
  const iniciarSesion = () => {

    instance
      .loginRedirect(loginRequest)
      .catch((error) => {

        console.error(
          "Error al iniciar sesión:",
          error
        );

      });

  };


  /*
   * CERRAR SESIÓN
   */
  const cerrarSesion = () => {

    instance.logoutRedirect({
      postLogoutRedirectUri:
        window.location.origin
    });

  };


  /*
   * OBTENER ACCESS TOKEN
   */
  const obtenerAccessToken = async () => {
    if (!usuario) {
      return;
    }

    try {
      setErrorToken(null);
      setTokenObtenido(false);

      const tokenResponse = await instance.acquireTokenSilent({
        ...apiRequest,
        account: usuario
      });

      const accessToken = tokenResponse.accessToken;

      console.log("Access Token obtenido correctamente");
      console.log("Scopes otorgados:", tokenResponse.scopes);

      setTokenObtenido(true);

    } catch (error) {
      console.error("Error obteniendo Access Token:", error);

      setErrorToken(
        "No fue posible obtener el Access Token."
      );
    }
  };


  /*
   * OBTENER INICIALES
   */
  const obtenerIniciales = (nombre) => {

    if (!nombre) {
      return "U";
    }


    return nombre
      .split(" ")
      .slice(0, 2)
      .map((palabra) =>
        palabra.charAt(0)
      )
      .join("")
      .toUpperCase();

  };


  return (

    <main className="app">

      <div className="background-decoration decoration-one"></div>

      <div className="background-decoration decoration-two"></div>



      {/* ================================================= */}
      {/* USUARIO NO AUTENTICADO                           */}
      {/* ================================================= */}

      <UnauthenticatedTemplate>

        <section className="login-card">

          <div className="brand">

            <div className="brand-icon">
              M
            </div>

            <h1>
              MesaTech
            </h1>

          </div>


          <div className="login-content">

            <h2>
              Bienvenido
            </h2>

            <p className="login-description">

              Inicia sesión con tu cuenta institucional
              para acceder a la plataforma.

            </p>


            <button
              className="microsoft-button"
              onClick={iniciarSesion}
            >

              <span className="microsoft-logo">

                <span></span>
                <span></span>
                <span></span>
                <span></span>

              </span>

              Continuar con Microsoft

            </button>

          </div>


          <footer className="login-footer">

            Autenticación mediante Microsoft Entra ID

          </footer>

        </section>

      </UnauthenticatedTemplate>



      {/* ================================================= */}
      {/* USUARIO AUTENTICADO                              */}
      {/* ================================================= */}

      <AuthenticatedTemplate>

        {usuario && (

          <section className="dashboard-card">


            {/* HEADER */}

            <header className="dashboard-header">

              <div className="brand">

                <div className="brand-icon">
                  M
                </div>

                <h1>
                  MesaTech
                </h1>

              </div>


              <button
                className="logout-button"
                onClick={cerrarSesion}
              >

                Cerrar sesión

              </button>

            </header>



            {/* USUARIO */}

            <div className="welcome-section">

              <div className="avatar">

                {
                  obtenerIniciales(
                    usuario.name
                  )
                }

              </div>


              <div>

                <p className="authenticated-label">

                  Sesión iniciada correctamente

                </p>


                <h2>

                  Hola,{" "}

                  {
                    usuario.name
                      ?.split(" ")[0]
                  }

                </h2>


                <p className="welcome-description">

                  Tu identidad fue verificada mediante
                  Microsoft Entra ID.

                </p>

              </div>

            </div>



            {/* DATOS DEL USUARIO */}

            <div className="user-card">

              <div className="user-row">

                <span className="user-label">
                  Nombre
                </span>

                <span className="user-value">

                  {usuario.name}

                </span>

              </div>


              <div className="user-row">

                <span className="user-label">
                  Usuario
                </span>

                <span className="user-value">

                  {usuario.username}

                </span>

              </div>


              {/* CLAIM RELEVANTE */}

              <div className="user-row">

                <span className="user-label">
                  Object ID
                </span>

                <span className="user-value claim-value">

                  {
                    usuario
                      .idTokenClaims
                      ?.oid
                  }

                </span>

              </div>


              <div className="user-row">

                <span className="user-label">
                  Tenant ID
                </span>

                <span className="user-value claim-value">

                  {
                    usuario
                      .idTokenClaims
                      ?.tid
                  }

                </span>

              </div>


              <div className="user-row">

                <span className="user-label">
                  Estado
                </span>


                <span className="authenticated-status">

                  <span className="status-dot"></span>

                  Autenticado

                </span>

              </div>

            </div>



            {/* ACCESS TOKEN */}

            <div className="token-section">

              <div className="token-title">

                <div>

                  <h3>
                    Access Token
                  </h3>

                  <p>

                    Solicita un token para acceder
                    a la API protegida de MesaTech.

                  </p>

                </div>

              </div>


              <button
                className="token-button"
                onClick={obtenerAccessToken}
              >

                Obtener Access Token

              </button>



              {/* TOKEN CORRECTO */}

              {tokenObtenido && (

                <div className="success-message">

                  <span className="success-icon">
                    ✓
                  </span>

                  Access Token obtenido correctamente.

                </div>

              )}



              {/* ERROR TOKEN */}

              {errorToken && (

                <div className="error-message">

                  {errorToken}

                </div>

              )}

            </div>



            {/* MENSAJE API */}

            <div className="api-info">

              <div className="api-info-icon">
                i
              </div>


              <div>

                <strong>
                  API protegida
                </strong>

                <p>

                  La conexión con el backend se habilitará
                  cuando el servicio esté disponible.

                </p>

              </div>

            </div>


          </section>

        )}

      </AuthenticatedTemplate>

    </main>

  );

}


export default App;