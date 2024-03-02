import { createContext, useEffect, useState } from "react";
import { GameContextType, GameCardType } from "../types";

const GameContext = createContext<GameContextType>({
  game: [],
  winner: false,
  createNewGame: (newGame: GameCardType[]) => {
    console.log("this works");
  },
  updateGame: (text: string) => {
    console.log("this works");
  },
  resetGame: () => console.log("this works"),
});

function GameContextWrapper({ children }: any) {
  const [game, setGame] = useState<GameCardType[]>([]);
  const [winner, setWinner] = useState<boolean>(false);

  useEffect(() => {
    const savedGame = localStorage.getItem("myGame");
    const winner = localStorage.getItem("winner");
    if (!savedGame) {
      return;
    }
    if (winner === "true") {
      setGame(JSON.parse(savedGame));
      setWinner(true);
    }
    setGame(JSON.parse(savedGame));
  }, []);

  const createNewGame = (newGame: GameCardType[]) => {
    setGame(newGame);
    setWinner(false);
    localStorage.setItem("myGame", JSON.stringify(newGame));
    localStorage.setItem("winner", "false");
  };

  const updateGame = (text: string) => {
    const index = game.findIndex((tile: GameCardType) => {
      return tile.text === text;
    });
    const updatedGame = [...game];
    updatedGame[index].hasBeenTicked = !updatedGame[index].hasBeenTicked;
    setGame(updatedGame);
    localStorage.setItem("myGame", JSON.stringify(game));
    haveYouWon();
    return;
  };

  const resetGame = () => {
    setGame([]);
    localStorage.removeItem("myGame");
    localStorage.removeItem("winner");
  };

  const haveYouWon = () => {
    if (
      game.filter((tile: GameCardType) => tile.hasBeenTicked === false)
        .length === 0
    ) {
      setWinner(true);
      localStorage.setItem("winner", "true");
    } else {
      setWinner(false);
    }
  };

  return (
    <GameContext.Provider
      value={{ game, createNewGame, updateGame, resetGame, winner }}
    >
      {children}
    </GameContext.Provider>
  );
}

export { GameContext, GameContextWrapper };
