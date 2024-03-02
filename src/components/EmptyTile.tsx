import { Center } from "@chakra-ui/react";

function EmptyTile({ key, text }: { key: number; text?: string }) {
  return (
    <Center
      bg="white"
      w="75px"
      h="75px"
      border="1px solid red"
      color="red"
      fontSize="1.5rem"
      key={key}
    >
      {text}
    </Center>
  );
}

export default EmptyTile;
