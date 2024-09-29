import React from "react";
import Header from "./components/Header";
import GameSelection from "./components/GameSelection";
import TopGames from "./components/TopGames";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import { GlobalStyles } from "./styles/GlobalStyles";
import GamePreview from "./components/GamePreview";
import VirtualR from "./components/VirtualR";
import GamesGallery from "./components/GamesGallery";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <GamePreview />
      <VirtualR />
      <GamesGallery />
      <GameSelection />
      <TopGames />
      <Reviews />
      <Footer />
    </>
  );
};

export default App;
