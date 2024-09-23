'use client';
import React, { useState } from "react";
import styled from "styled-components";
import breakpoints from "@/constants/breakpoints";

// Styled components for the header
const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: center;
  width: 100%;
  padding: 1rem 2rem;
  background-color: rgba(0, 128, 0, 0.8);
  color: var(--white);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: 900;

  @media (max-width: ${breakpoints.tablet}) {
    overflow: visible;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
`;

const Logo = styled.div`
  max-width: 100px;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 70px;
  }
`;

const LogoImg = styled.img`
  width: 100%;
  border-radius: 50%;
  border: 2px solid var(--blue);
`;

const NavWrapper = styled.nav`
  display: flex;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin-right: 20px;
    gap: 20px;

    li {
      font-weight: bold;

      a {
        color: var(--white);
        text-decoration: none;

        &:hover {
          color: var(--dark-blue);
          text-decoration: underline var(--dark-blue);
        }
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const SidemenuContainer = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    padding-right: 30px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

// Styled components for the Sidemenu
const SidemenuWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: var(--green);
  height: 100vh;
  width: 280px;
  padding: 40px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  border-radius: 10px 0 0 10px;
  border: 3px solid var(--white);
`;

const MenuContainer = styled.li`
  list-style: none;
  margin-bottom: 37px;
  text-align: center;
`;

const MenuText = styled.a`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  position: relative;

  &:hover {
    color: var(--dark-blue);
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: -10%;
    bottom: -2px;
    width: 120%;
    height: 3px;
    background-color: var(--dark-blue);
  }
`;

// Styled components for the SidemenuButton
const ButtonContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: green;
  border-radius: 50%;
  box-shadow: 0 0 5px 2px rgba(0, 128, 0, 0.2);
  cursor: pointer;
  position: relative;
  z-index: 999;
  margin-left: 20px;

  &:hover {
    box-shadow: 0 0 10px 4px rgba(0, 128, 0, 0.3);
  }
`;

const Line = styled.div`
  width: 20px;
  height: 2px;
  background-color: white;
  position: absolute;
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

const Line1 = styled(Line)<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(45deg)" : "translateY(-6px)"};
`;

const Line2 = styled(Line)<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
`;

const Line3 = styled(Line)<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(-45deg)" : "translateY(6px)"};
`;

const Header: React.FC = () => {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);

  const toggleSidemenu = () => {
    setIsSidemenuOpen(!isSidemenuOpen);
  };

  const closeSidemenu = () => {
    setIsSidemenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <a href="/">
          <Logo>
            <LogoImg src="/images/logo.png" alt="Logo" />
          </Logo>
        </a>

        {/* Desktop Navbar */}
        <NavWrapper>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#choose">Choose Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </NavWrapper>

        {/* Mobile Sidemenu Button */}
        <SidemenuContainer>
          <ButtonContainer onClick={toggleSidemenu}>
            <Line1 $isOpen={isSidemenuOpen} />
            <Line2 $isOpen={isSidemenuOpen} />
            <Line3 $isOpen={isSidemenuOpen} />
          </ButtonContainer>
        </SidemenuContainer>
      </HeaderContent>

      {/* Mobile Sidemenu */}
      <SidemenuWrapper $isOpen={isSidemenuOpen}>
        <MenuContainer>
          <MenuText href="#about" onClick={closeSidemenu}>
            About
          </MenuText>
        </MenuContainer>
        <MenuContainer>
          <MenuText href="#services" onClick={closeSidemenu}>
            Services
          </MenuText>
        </MenuContainer>
        <MenuContainer>
          <MenuText href="#choose" onClick={closeSidemenu}>
            Why Choose Us
          </MenuText>
        </MenuContainer>
        <MenuContainer>
          <MenuText href="#contact" onClick={closeSidemenu}>
            Contact
          </MenuText>
        </MenuContainer>
      </SidemenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
