export const msalConfig = {
  auth: {
    clientId: "33b8186d-805f-4136-8209-4af63d8f7388",
    authority: "https://login.microsoftonline.com/50322baf-a2d3-4e78-ab06-d2140e9f0579",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
};

const apiScope = "api://33b8186d-805f-4136-8209-4af63d8f7388/access_as_user";

export const loginRequest = {
  scopes: ["openid", "profile", "email", apiScope],
};

export const apiRequest = {
  scopes: [apiScope],
};

//Credenciales roman

/*
export const msalConfig = {
  auth: {
    clientId: "d1415a07-a5cf-45a2-b55d-193b5b47594a",
    authority: "https://login.microsoftonline.com/398603e0-9d68-464c-995d-bb13704e1402",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
};

const apiScope = "api://d1415a07-a5cf-45a2-b55d-193b5b47594a/access_ass_user";

export const loginRequest = {
  scopes: ["openid", "profile", "email", apiScope],
};

export const apiRequest = {
  scopes: [apiScope],
};
 */