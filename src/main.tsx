import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SwitcherProvider } from "./context/useSwitch.tsx";
import { ChatsProvider } from "./context/useChats.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SwitcherProvider>
      <ChatsProvider>
        <App />
      </ChatsProvider>
    </SwitcherProvider>
  </StrictMode>
);
