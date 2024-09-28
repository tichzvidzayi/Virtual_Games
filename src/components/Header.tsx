import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #10102a;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 24px;
  font-family: "OndoFontCompressed", sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
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
