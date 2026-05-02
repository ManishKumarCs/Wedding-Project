import { hydrateRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
}
