import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-image: url("/assets/artboard.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 48px;
  font-family: "OndoFontCompressed", sans-serif;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  font-size: 18px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-family: "Lato", sans-serif;

  &:hover {
    color: #f0a500;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Beard</Logo>
      <Nav>
        <NavLink href="#games">Games</NavLink>
        <NavLink href="#action">Action</NavLink>
        <NavLink href="#top-games">Top Games</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
