export const msalConfig = {
    auth: {
        clientId: "d1415a07-a5cf-45a2-b55d-193b5b47594a", // Cliente ID de la aplicación Román.

        authority: "https://login.microsoftonline.com/398603e0-9d68-464c-995d-bb13704e1402",

        redirectUri: "http://localhost:3000/"
    },

    cache: {
        cacheLocation: "sessionStorage"
    }
};

export const loginRequest = {
    scopes: ["openid", "profile", "email"],
    prompt: "select_account" // Forzar a que se muestre el selector de cuenta.
};

export const apiRequest = {
    scopes: [
        "api://d1415a07-a5cf-45a2-b55d-193b5b47594a/access_ass_user"
    ]
};

