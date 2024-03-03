import { useContext } from "react";
import { Heading } from "@chakra-ui/react";
import { PlayerNameContext } from "../context/PlayerNameContext";

function Header() {
  const { playerName } = useContext(PlayerNameContext);
  return (
    <Heading
      as="h1"
      m="10px 0 20px 0"
      size="xl"
      color="#5882FA"
      textAlign="center"
    >
      {playerName === "" ? <>Welcome to Bingo!</> : <>Welcome {playerName}</>}
    </Heading>
  );
}

export default Header;
