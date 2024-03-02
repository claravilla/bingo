import { Grid } from "@chakra-ui/react";
import EmptyTile from "./EmptyTile";

function EmptyCard() {
  let emptyGrid: React.ReactNode[] = [];
  for (let i = 0; i <= 24; i++) {
    if (i === 12) {
      emptyGrid.push(<EmptyTile key={i} text="FREE" />);
    } else {
      emptyGrid.push(<EmptyTile key={i} />);
    }
  }

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={0}>
        {emptyGrid}
      </Grid>
    </>
  );
}

export default EmptyCard;
