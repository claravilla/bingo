import { useContext, useState } from "react";
import {
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { PlayerNameContext } from "../context/PlayerNameContext";

function NameForm() {
  const { playerName, savePlayerName } = useContext(PlayerNameContext);
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: any) => {
    setName(e.target.value);
  };

  const handleOnSubmit = () => {
    if (name.length === 0) {
      setError("Name is mandatory");
    } else {
      savePlayerName(name);
    }
  };

  return (
    <>
      <Flex w="50%" align="flex-end" m="0 auto">
        <FormControl>
          <Input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Please enter your name"
          />
          {error !== "" ? <FormHelperText>{error}</FormHelperText> : null}
        </FormControl>
        <Button
          colorScheme="blue"
          size="lg"
          variant="solid"
          m="0 0 0 30px"
          onClick={handleOnSubmit}
        >
          Enter
        </Button>
      </Flex>
    </>
  );
}

export default NameForm;
