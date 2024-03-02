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
      <Flex justifyContent="center" m="20px">
        <NewGameButton />
      </Flex>
      <Flex
        bg="red"
        direction="column"
        justify="center"
        align="center"
        m="20px auto 50px auto"
        w="540px"
        h="620px"
      >
        <CardHeader />
        {game.length > 0 ? <BingoCard /> : <EmptyCard />}
      </Flex>
    </>
  );
}

export default GameSection;
