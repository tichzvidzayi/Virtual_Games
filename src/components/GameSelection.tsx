import React from "react";
import styled from "styled-components";

const GameSelectionContainer = styled.section`
  background-color: #151530;
  padding: 50px;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  font-size: 32px;
  font-family: "OndoFontCompressed", sans-serif;
`;

const GameGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const GameCard = styled.div`
  background-color: #202040;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 200px;
`;

const GameSelection: React.FC = () => {
  return (
    <GameSelectionContainer>
      <Title>Choose Your Favorite Games</Title>
      <GameGrid>
        <GameCard>Game 1</GameCard>
        <GameCard>Game 2</GameCard>
        <GameCard>Game 3</GameCard>
      </GameGrid>
    </GameSelectionContainer>
  );
};

export default GameSelection;
