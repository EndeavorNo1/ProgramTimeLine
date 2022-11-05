import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TimeLineCol from "./TimeLineCol";
import TimeLineRow from "./TimeLineRow";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TimeLineCol />
    <TimeLineRow />
  </StrictMode>
);
