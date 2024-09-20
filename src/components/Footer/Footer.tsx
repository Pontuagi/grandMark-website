import React from "react";
import styled from "styled-components";
import breakpoints from "@/constants/breakpoints";

// Styled components for the Footer
const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 16px 32px;
  background-color: rgba(0, 128, 0, 0.8); /* bg-green-800/80 equivalent */
  color: var(--white);
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    gap: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    gap: 32px;
  }
`;

const NavItem = styled.li`
  margin-left: 16px;

  a {
    color: var(--white);
    font-weight: bold;
    text-decoration: none;
    position: relative;

    &:hover {
      color: var(--blue);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: -10%;
      width: 120%;
      height: 3px;
      background-color: var(--blue);
      transition: opacity 0.3s, transform 0.3s;
      opacity: 0;
      transform: scaleX(0);
    }

    &:hover::after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
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
          </NavList>
        </Nav>

        <Nav>
          <NavList>
            <NavItem>
              <a href="/privacy">Privacy</a>
            </NavItem>
            <NavItem>
              <a href="/terms">Terms</a>
            </NavItem>
            <NavItem>
              <a href="/#contact">Contact</a>
            </NavItem>
          </NavList>
        </Nav>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;