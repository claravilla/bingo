import { Heading } from "@chakra-ui/react";

function CardHeader() {
  return (
    <Heading
      as="h2"
      size="3xl"
      noOfLines={1}
      m="10px"
      textAlign="justify"
      fontWeight="bold"
      color="white"
    >
      B I N G O
    </Heading>
  );
}

export default CardHeader;
