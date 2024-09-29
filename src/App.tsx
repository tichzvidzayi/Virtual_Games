import React from "react";
import Header from "./components/Header";
import GameSelection from "./components/GameSelection";
import TopGames from "./components/TopGames";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import { GlobalStyles } from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <GameSelection />
      <TopGames />
      <Reviews />
      <Footer />
    </>
  );
};

export default App;
