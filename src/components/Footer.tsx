import React from "react";
import styled from "styled-components";

// Footer container
const FooterContainer = styled.footer`
  background-color: #10102a;
  padding: 50px;
  color: white;
`;

// Wrapper for content sections inside the footer
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
  padding-bottom: 20px;
`;

// Section for the brand info and description
const BrandSection = styled.div`
  flex: 1;
  margin-right: 30px;
  min-width: 250px;
`;

// Logo image for brand section
const LogoImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

// Section title styling
const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

// Text styling for footer content
const FooterText = styled.p`
  font-size: 14px;
  color: #c1c1c1;
  margin-bottom: 20px;
`;

// Links and text within columns
const FooterColumn = styled.div`
  flex: 1;
  margin: 0 30px;
  min-width: 200px;
`;

// Logo list styling
const LogosContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
`;

// Individual logos styling
const Logo = styled.img`
  height: 30px;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

// Copyright section
const Copyright = styled.div`
  border-top: 1px solid #2a2a72;
  padding-top: 20px;
  text-align: center;
  color: #c1c1c1;
`;

// Social media icons container
const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

// Social media icons styling
const SocialIcon = styled.img`
  width: 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <LogoImage src="logo.png" alt="Brand Logo" />
          <FooterText>
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic
            visuals.
          </FooterText>
        </BrandSection>
        <FooterColumn>
          <SectionTitle>COMPANY</SectionTitle>
          <FooterText>Products</FooterText>
          <FooterText>Apps & Games</FooterText>
          <FooterText>Features</FooterText>
        </FooterColumn>
        <FooterColumn>
          <SectionTitle>HELP</SectionTitle>
          <FooterText>Support</FooterText>
          <FooterText>About</FooterText>
          <FooterText>Contact Us</FooterText>
        </FooterColumn>
        <FooterColumn>
          <SectionTitle>RESOURCES</SectionTitle>
          <FooterText>Youtube Playlist</FooterText>
          <FooterText>How To - Blog</FooterText>
          <FooterText>Terms & Conditions</FooterText>
        </FooterColumn>
      </FooterContent>

      {/* Logos Section */}
      <LogosContainer>
        <Logo src="twitch.png" alt="Twitch" />
        <Logo src="roblox.png" alt="Roblox" />
        <Logo src="asus.png" alt="Asus" />
        <Logo src="canon.png" alt="Canon" />
        <Logo src="microsoft.png" alt="Microsoft" />
      </LogosContainer>

      {/* Social Media Section */}
      <SocialMediaContainer>
        <SocialIcon src="facebook.png" alt="Facebook" />
        <SocialIcon src="twitter.png" alt="Twitter" />
        <SocialIcon src="instagram.png" alt="Instagram" />
      </SocialMediaContainer>

      {/* Copyright Section */}
      <Copyright>
        <p>© 2024 Board. All Rights Reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
