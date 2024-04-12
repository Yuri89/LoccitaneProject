import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes/routes";
import { GlobalStyle } from "./Styles/global-styles";
import ProviderCenter from "./Context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProviderCenter>
      <Routes />
      <GlobalStyle/>
    </ProviderCenter>
  </React.StrictMode>,
);
