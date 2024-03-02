import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import CardHeader from "./CardHeader";
import BingoCard from "./BingoCard";
import NewGameButton from "./NewGameButton";
import EmptyCard from "./EmptyCard";

function GameSection() {
  const { game } = useContext(GameContext);
  return (
    <>
      <Flex justifyContent="center">
        <NewGameButton />
      </Flex>
      <Flex
        bg="red"
        direction="column"
        justify="center"
        align="center"
        m="0px auto 20px auto"
        w="395px"
        h="445px"
      >
        <CardHeader />
        {game.length > 0 ? <BingoCard /> : <EmptyCard />}
      </Flex>
    </>
  );
}

export default GameSection;
