import React from "react";
import styled from "styled-components";
import breakpoints from "@/constants/breakpoints";

// Styled components for the Footer
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  background-color: rgba(0, 128, 0, 0.8); /* bg-green-800/80 equivalent */
  color: var(--white);
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  width: 100%;
  max-width: 1200px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavItem = styled.li`
  a {
    color: var(--black);
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: var(--blue);
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  a {
    color: var(--white);
    font-size: 1.5rem;

    &:hover {
      color: var(--blue);
    }
  }
`;

const Copyright = styled.div`
  margin-top: 32px;
  text-align: center;
  font-size: 0.875rem;
  color: var(--white);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo and Company Name */}
        <Column>
          <Logo>
            <div>Grandmark Solutions</div>
          </Logo>
        </Column>

        {/* Quick Links */}
        <Column>
          <h4>Quick Links</h4>
          <Nav>
            <NavList>
              <NavItem>
                <a href="/">Home</a>
              </NavItem>
              <NavItem>
                <a href="/#about">About</a>
              </NavItem>
              <NavItem>
                <a href="/#services">Services</a>
              </NavItem>
              <NavItem>
                <a href="/privacy">Privacy</a>
              </NavItem>
              <NavItem>
                <a href="/terms">Terms</a>
              </NavItem>
              <NavItem>
                <a href="/#contact">Contact</a>
              </NavItem>
              <NavItem>
                <a href="/#faq">FAQ</a>
              </NavItem>
            </NavList>
          </Nav>
        </Column>

        {/* Products */}
        <Column>
          <h4>Products</h4>
          <Nav>
            <NavList>
              <NavItem>Boundary Surveys</NavItem>
              <NavItem>Topographic Surveys</NavItem>
              <NavItem>Land Titling</NavItem>
              <NavItem>Engineering Surveys</NavItem>
              <NavItem>Sectional Properties Surveys</NavItem>
              <NavItem>Drones Surveys</NavItem>
              <NavItem>Subdivision Surveys</NavItem>
              
            </NavList>
          </Nav>
        </Column>

        {/* Social Media Links */}
        <Column>
          <h4>Socials</h4>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </SocialIcons>
        </Column>
      </FooterContent>

      {/* Copyright Text */}
      <Copyright>
        © {new Date().getFullYear()} Grandmark Solutions Ltd. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
