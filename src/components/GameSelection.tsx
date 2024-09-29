import React, { useState } from "react";
import styled from "styled-components";

// Container for the entire section
const GameSelectionContainer = styled.section`
  background-color: #151530;
  padding: 50px;
  color: white;
  text-align: center;
`;

// Title
const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ff4dff, #007bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Tabs container for game categories
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

// Individual tab button
const Tab = styled.button<{ active?: boolean }>`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#ff4dff" : "#202040")};
  color: ${({ active }) => (active ? "white" : "#c1c1c1")};
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4dff;
    color: white;
  }
`;

// Grid layout for game cards
const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

// Individual game cards
const GameCard = styled.div`
  background-color: #202040;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Styled image for game card
const GameImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

// Card title
const GameTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

// Author and details under the game title
const GameAuthor = styled.p`
  font-size: 14px;
  color: #c1c1c1;
  margin-bottom: 20px;
`;

// Live Demo button inside cards
const LiveDemoButton = styled.button`
  background: linear-gradient(90deg, #ff4dff, #007bff);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;

  &:hover {
    background: linear-gradient(90deg, #007bff, #ff4dff);
  }
`;

// Promo card container
const PromoCard = styled.div`
  background-color: #1f1f3b;
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  gap: 30px;
  color: white;
`;

// Promo image
const PromoImage = styled.img`
  width: 250px;
  border-radius: 15px;
`;

// Promo text container
const PromoTextContainer = styled.div`
  text-align: left;
`;

// Promo card title
const PromoTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

// Promo card subtitle
const PromoSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #c1c1c1;
`;

// Promo button
const PromoButton = styled.button`
  background: linear-gradient(90deg, #ff4dff, #007bff);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(90deg, #007bff, #ff4dff);
  }
`;

// Sample data for game cards
const games = [
  {
    title: "Core Philosophies",
    author: "Cameron Williamson",
    img: "game1.jpg"
  },
  { title: "Core Philosophies", author: "Dianne Russell", img: "game2.jpg" },
  { title: "Core Philosophies", author: "Jane Cooper", img: "game3.jpg" },
  { title: "Core Philosophies", author: "Cody Fisher", img: "game4.jpg" },
  { title: "Core Philosophies", author: "Wade Warren", img: "game5.jpg" },
  { title: "Core Philosophies", author: "Robert Fox", img: "game6.jpg" }
];

const GameSelection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("newest");

  return (
    <GameSelectionContainer>
      <Title>WELCOME TO THE TOP</Title>

      {/* Promo Card Section */}
      <PromoCard>
        <PromoImage src="transformed.png" alt="Virtual Gaming" />
        <PromoTextContainer>
          <PromoTitle>DISCOVER THE VIRTUAL REALITY GAMING</PromoTitle>
          <PromoSubtitle>
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic visuals
            to convey excitement, adventure, and the immersive nature of gaming.
          </PromoSubtitle>
          <PromoButton>Play Now</PromoButton>
        </PromoTextContainer>
      </PromoCard>

      {/* Tabs for selecting game categories */}
      <TabsContainer>
        <Tab
          active={activeTab === "newest"}
          onClick={() => setActiveTab("newest")}
        >
          NEWEST GAMES
        </Tab>
        <Tab
          active={activeTab === "latest"}
          onClick={() => setActiveTab("latest")}
        >
          LATEST GAMES
        </Tab>
        <Tab
          active={activeTab === "fight"}
          onClick={() => setActiveTab("fight")}
        >
          FIGHT GAMES
        </Tab>
        <Tab
          active={activeTab === "sport"}
          onClick={() => setActiveTab("sport")}
        >
          SPORT GAMES
        </Tab>
      </TabsContainer>

      {/* Grid of game cards */}
      <GameGrid>
        {games.map((game, index) => (
          <GameCard key={index}>
            <GameImage src={game.img} alt={game.title} />
            <GameTitle>{game.title}</GameTitle>
            <GameAuthor>{game.author}</GameAuthor>
            <LiveDemoButton>LIVE DEMO</LiveDemoButton>
          </GameCard>
        ))}
      </GameGrid>
    </GameSelectionContainer>
  );
};

export default GameSelection;
