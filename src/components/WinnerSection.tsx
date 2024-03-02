import { useContext, useState } from "react";
import { Button, Center, Flex } from "@chakra-ui/react";
import { GameContext } from "../context/GameContext";

function WinnerSection() {
  const { game, winner } = useContext(GameContext);
  const [url, setUrl] = useState<string>("");

  const urlParams = game
    .map((tile) => {
      return tile.text;
    })
    .join(":");

  const generateurl = () => {
    setUrl(`www.bingo.com.au/${urlParams}`);
  };

  return (
    <div>
      {winner ? (
        <Flex justify="center">
          <Button
            colorScheme="green"
            m="7px 0 12px 0"
            size="lg"
            variant="solid"
            onClick={generateurl}
          >
            You Won! Generate your winner url
          </Button>
        </Flex>
      ) : null}
      {winner && url !== "" ? (
        <Center fontSize="1.2rem">Your winner url is: {url}</Center>
      ) : null}
    </div>
  );
}

export default WinnerSection;
