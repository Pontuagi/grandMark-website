import React from "react";
import styled from "styled-components";
import breakpoints from "@/constants/breakpoints";

const links = ["about", "services", "choose", "contact"];

// Styled components for the Header
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 16px;
  background-color: var(--green);
  border-radius: 10px;
  margin: 16px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const LogoContainer = styled.div`
  border-radius: 8px;
`;

const Logo = styled.img`
  height: 48px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    height: 36px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 28px;
  font-weight: bold;
  flex-direction: row;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${breakpoints.tablet}) {
    gap: 14px;
    font-size: 14px;
  }
`;

const NavLinkItem = styled.li`
  a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <Navbar>
      <LogoContainer>
        <a href="/">
          <Logo src="/images/logo.png" alt="Grandmark Solutions Logo" />
        </a>
      </LogoContainer>

      <NavLinks>
        {links.map((link) => (
          <NavLinkItem key={link}>
            <a href={`/#${link}`}>{link}</a>
          </NavLinkItem>
        ))}
      </NavLinks>
    </Navbar>
  );
};

export default Header;