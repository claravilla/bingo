import { useContext, useState } from "react";
import GameSection from "../components/GameSection";
import Header from "../components/Header";
import NameForm from "../components/NameForm";
import WinnerSection from "../components/WinnerSection";
import { PlayerNameContext } from "../context/PlayerNameContext";

function HomePage() {
  const { playerName } = useContext(PlayerNameContext);
  return (
    <>
      <Header />
      {playerName === "" ? (
        <NameForm />
      ) : (
        <>
          <GameSection />
          <WinnerSection />
        </>
      )}
    </>
  );
}

export default HomePage;
