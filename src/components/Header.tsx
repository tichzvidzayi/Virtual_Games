import React from "react";
import styled from "styled-components";

// Container for the entire header section
const HeaderContainer = styled.header`
  background-image: url("artboard.png"),
    linear-gradient(90deg, rgba(106, 13, 173, 0.6), rgba(138, 43, 226, 0.6)); /* Background image with purple gradient overlay */
  background-size: cover, cover; /* Ensure both layers cover the container */
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

// Top navigation bar container
const TopNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Logo on the left
const Logo = styled.div`
  font-size: 18px;
  font-family: "Lato", sans-serif;
  color: white;
  font-weight: 700;
`;

// Navigation menu
const Nav = styled.nav`
  display: flex;
  gap: 25px;
  font-size: 16px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  &:hover {
    color: #f0a500;
  }
`;

// Main Hero Section
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligns content to the left */
  text-align: left; /* Left-aligns text */
  width: 50%; /* Occupies half of the header */
  padding: 0 20px;
`;

// Heading text styles
const HeroHeading = styled.h1`
  font-size: 64px;
  font-family: "Lato", sans-serif;
  line-height: 1.2;
  margin: 0;
  font-weight: 700;
  background: linear-gradient(90deg, #ffd700, #ff00ff, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Subheading/Description text styles
const HeroDescription = styled.p`
  font-size: 18px;
  font-family: "Lato", sans-serif;
  margin: 20px 0;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.8);
`;

// Buttons container
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

// Gradient buttons
const GradientButton = styled.a`
  padding: 10px 30px;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  color: white;
  border-radius: 50px;
  background: linear-gradient(90deg, #ff00ff, #1e90ff);
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #1e90ff, #ff00ff);
  }
`;

// Stats Section
const StatsContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Aligns the stats section to the left */
  width: 50%; /* Occupies half of the header */
  gap: 50px;
  padding: 20px 0;
`;

// Individual Stat Box
const StatBox = styled.div`
  text-align: left; /* Aligns text to the left */
  font-family: "Lato", sans-serif;

  span {
    display: block;
    font-size: 24px;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TopNavBar>
        <Logo>Board</Logo>
        <Nav>
          <NavLink href="#products">PRODUCTS</NavLink>
          <NavLink href="#apps-games">APPS & GAMES</NavLink>
          <NavLink href="#features">FEATURES</NavLink>
          <NavLink href="#support">SUPPORT</NavLink>
          <NavLink href="#about">ABOUT</NavLink>
        </Nav>
      </TopNavBar>

      <HeroSection>
        <HeroHeading>Let Your Mind Explore New World</HeroHeading>
        <HeroDescription>
          Playing electronic games, whether through consoles, computers, mobile
          phones or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </HeroDescription>
        <ButtonContainer>
          <GradientButton href="#buy">Buy Now</GradientButton>
          <GradientButton href="#play">Play Now</GradientButton>
        </ButtonContainer>
      </HeroSection>

      {/* Stats Section */}
      <StatsContainer>
        <StatBox>
          <span>300+</span>
          <p>Unique Style</p>
        </StatBox>
        <StatBox>
          <span>200+</span>
          <p>Project Finished</p>
        </StatBox>
        <StatBox>
          <span>500+</span>
          <p>Happy Customer</p>
        </StatBox>
      </StatsContainer>
    </HeaderContainer>
  );
};

export default Header;
