import { useContext } from "react";
import { Center } from "@chakra-ui/react";
import { GameCardType } from "../types";
import { GameContext } from "../context/GameContext";

function CardTile({ tile }: { tile: GameCardType }) {
  const { updateGame } = useContext(GameContext);
  return (
    <Center
      bg={tile.hasBeenTicked ? "#A9F5A9" : "white"}
      w="75px"
      h="75px"
      border="1px solid red"
      color="red"
      fontSize="1.5rem"
      onClick={tile.text !== "FREE" ? () => updateGame(tile.text) : undefined}
      key={tile.text}
    >
      {tile.text}
    </Center>
  );
}

export default CardTile;
