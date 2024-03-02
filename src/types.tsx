export interface GameContextType {
  game: GameCardType[];
  winner: boolean;
  createNewGame: (arg0: GameCardType[]) => void;
  updateGame: (arg0: string) => void;
  resetGame: () => void;
}

export interface GameCardType {
  text: string;
  hasBeenTicked?: boolean;
}

export interface PlayerNameContextType {
  playerName: string;
  savePlayerName: (arg0: string) => void;
}
