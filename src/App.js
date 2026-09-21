import "./App.css";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal
} from "@azure/msal-react";

import { loginRequest,apiRequest } from "./authConfig";

function App() {
  const { instance, accounts } = useMsal();

  const iniciarSesion = () => {
    instance.loginRedirect(loginRequest).catch((error) => {
      console.error("Error al iniciar sesión:", error);
    });
  };

  const cerrarSesion = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: window.location.origin
    });
  };

  const usuario = accounts.length > 0 ? accounts[0] : null;

  const obtenerIniciales = (nombre) => {
    if (!nombre) return "U";

    return nombre
        .split(" ")
        .slice(0, 2)
        .map((palabra) => palabra.charAt(0))
        .join("")
        .toUpperCase();
  };

  return (
      <main className="app">
        <div className="background-decoration decoration-one"></div>
        <div className="background-decoration decoration-two"></div>

        <UnauthenticatedTemplate>
          <section className="login-card">
            <div className="brand">
              <div className="brand-icon">M</div>

              <div>
                <p className="brand-label">CLOUD NATIVE</p>
                <h1>MesaTech</h1>
              </div>
            </div>

            <div className="login-content">
            <span className="status-badge">
              Acceso seguro
            </span>

              <h2>Bienvenido</h2>

              <p className="login-description">
                Inicia sesión con tu cuenta institucional para acceder a la
                plataforma.
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
              Autenticación protegida con Microsoft Entra ID
            </footer>
          </section>
        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>
          {usuario && (
              <section className="dashboard-card">
                <header className="dashboard-header">
                  <div className="brand">
                    <div className="brand-icon">M</div>

                    <div>
                      <p className="brand-label">CLOUD NATIVE</p>
                      <h1>MesaTech</h1>
                    </div>
                  </div>

                  <button
                      className="logout-button"
                      onClick={cerrarSesion}
                  >
                    Cerrar sesión
                  </button>
                </header>

                <div className="welcome-section">
                  <div className="avatar">
                    {obtenerIniciales(usuario.name)}
                  </div>

                  <div>
                    <p className="welcome-label">
                      Sesión iniciada correctamente
                    </p>

                    <h2>
                      Hola, {usuario.name?.split(" ")[0]}
                    </h2>

                    <p>
                      Tu identidad fue verificada correctamente mediante
                      Microsoft Entra ID.
                    </p>
                  </div>
                </div>

                <div className="user-card">
                  <div className="user-row">
                    <span className="user-label">Nombre</span>
                    <span className="user-value">
                  {usuario.name}
                </span>
                  </div>

                  <div className="user-row">
                    <span className="user-label">Cuenta</span>
                    <span className="user-value">
                  {usuario.username}
                </span>
                  </div>

                  <div className="user-row">
                    <span className="user-label">Estado</span>

                    <span className="authenticated-status">
                  <span className="status-dot"></span>
                  Autenticado
                </span>
                  </div>
                </div>

                <p className="dashboard-message">
                  La conexión con el backend de MesaTech se habilitará en la
                  siguiente etapa.
                </p>
              </section>
          )}
        </AuthenticatedTemplate>
      </main>
  );
}

export default App;