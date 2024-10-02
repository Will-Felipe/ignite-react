import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { enableMSW } from "@/api/mocks";
import { App } from "./app";
import React from "react";

enableMSW().then(() => {
  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
