import { hydrateRoot } from "react-dom/client";
import { getRouter } from "./router";

const router = getRouter();

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(rootElement, router);
}
