import { createContext, useEffect, useState } from "react";
import { PlayerNameContextType } from "../types";

const PlayerNameContext = createContext<PlayerNameContextType>({
  playerName: "",
  savePlayerName: (name: string) => console.log("this works"),
});

function PlayerNameContextWrapper({ children }: any) {
  const [playerName, setPlayerName] = useState<string>("");

  useEffect(() => {
    const savedName = localStorage.getItem("playerName");
    if (!savedName) {
      return;
    }
    setPlayerName(savedName);
  }, []);

  const savePlayerName = (name: string) => {
    setPlayerName(name);
    localStorage.setItem("playerName", name);
  };

  return (
    <PlayerNameContext.Provider value={{ playerName, savePlayerName }}>
      {children}
    </PlayerNameContext.Provider>
  );
}

export { PlayerNameContext, PlayerNameContextWrapper };
