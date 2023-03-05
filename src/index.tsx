import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./utils/keyclock";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const eventLogger = (event: unknown, error: unknown) => {
  console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens: any) => {
  console.log("onKeycloakTokens", tokens);
  if (!tokens.idToken) {
    window.location.replace(
      "http://localhost:8080/realms/test/protocol/openid-connect/auth?client_id=music-app&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=5e857d77-ced2-4c9e-8336-cea3c193c476&response_mode=fragment&response_type=code&scope=openid&nonce=244179a5-1f84-41b0-8242-62f66db4cfc6"
    );
  }
};

root.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}
  >
    {" "}
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ReactKeycloakProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
