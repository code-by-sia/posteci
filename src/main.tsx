import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { RequestProvider } from "./hooks/requset-context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RequestProvider>
      <App />
    </RequestProvider>
  </StrictMode>,
);
