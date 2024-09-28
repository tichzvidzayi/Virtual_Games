import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #10102a;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© 2024 Beard. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
