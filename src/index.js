import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import AuthUser from "./context-api/provider/AuthUser";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthUser>
      <App />
    </AuthUser>
  </BrowserRouter>
);
