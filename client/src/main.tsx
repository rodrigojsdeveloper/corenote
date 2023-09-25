import GlobalStyle from "./styles/global.ts";
import Providers from "./contexts/index.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>
);
