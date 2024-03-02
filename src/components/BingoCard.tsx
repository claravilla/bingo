import { useContext } from "react";
import { Grid } from "@chakra-ui/react";
import { GameContext } from "../context/GameContext";
import CardTile from "./CardTile";

function BingoCard() {
  const { game } = useContext(GameContext);

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={0}>
        {game.map((each) => {
          return <CardTile tile={each} key={each.text} />;
        })}
      </Grid>
    </>
  );
}

export default BingoCard;
