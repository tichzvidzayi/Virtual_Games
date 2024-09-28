import React from "react";
import styled from "styled-components";

const TopGamesContainer = styled.section`
  padding: 50px;
  background-color: #1b1b3a;
  color: white;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  font-family: "OndoFontCompressed", sans-serif;
`;

const GameGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const GameCard = styled.div`
  background-color: #242447;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
`;

interface Game {
  title: string;
  description: string;
}

const games: Game[] = [
  { title: "CyberPunk 2077", description: "Action-packed sci-fi game" },
  { title: "The Witcher 3", description: "Fantasy RPG" },
  { title: "God of War", description: "Norse mythology action-adventure" }
];

const TopGames: React.FC = () => {
  return (
    <TopGamesContainer>
      <Title>Welcome to the Top Games</Title>
      <GameGrid>
        {games.map((game, index) => (
          <GameCard key={index}>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </GameCard>
        ))}
      </GameGrid>
    </TopGamesContainer>
  );
};

export default TopGames;
