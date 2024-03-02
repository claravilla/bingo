import React from "react";
import ReactDOM from "react-dom/client";
import { GameContextWrapper } from "./context/GameContext";
import { PlayerNameContextWrapper } from "./context/PlayerNameContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PlayerNameContextWrapper>
      <GameContextWrapper>
        <App />
      </GameContextWrapper>
    </PlayerNameContextWrapper>
  </React.StrictMode>
);
