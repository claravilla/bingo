import { useContext, useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { GameContext } from "../context/GameContext";
import { GameCardType } from "../types";

function newGameButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const { game, createNewGame, resetGame } = useContext(GameContext);

  const checkForAlert = () => {
    if (
      game.filter((tile: GameCardType) => tile.hasBeenTicked === true).length >
      0
    ) {
      onOpen();
    } else generateGame();
  };

  let gameNumbers: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
  ];
  const generateGame = () => {
    onClose();
    resetGame();

    const shuffle: string[] = [];
    let adjuster: number = 0;

    for (let i = 0; i <= 24; i++) {
      const index = Math.floor(Math.random() * (100 - adjuster));
      shuffle.push(gameNumbers[index]);
      const updateGameNumbers = gameNumbers.filter((each) => {
        return gameNumbers.indexOf(each) !== index;
      });
      gameNumbers = updateGameNumbers;
      adjuster++;
    }

    const currentGame: GameCardType[] = shuffle.map((each, index) => {
      return {
        text: each,
        hasBeenTicked: false,
      };
    });

    currentGame.splice(12, 1, { text: "FREE" });

    createNewGame(currentGame);
  };

  return (
    <>
      <Button
        colorScheme="green"
        m="0 0 20px 0"
        size="lg"
        variant="solid"
        onClick={checkForAlert}
      >
        Start new game
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Are you Sure?
            </AlertDialogHeader>

            <AlertDialogBody>This will reset the current game.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="green" onClick={generateGame} ml={3}>
                Reset
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default newGameButton;
