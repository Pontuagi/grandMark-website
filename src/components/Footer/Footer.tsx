import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--green);
  color: var(--white);
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  bottom: 0;
`;

const NavWrapper = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-left: 2rem;

      a {
        color: var(--white);
        text-decoration: none;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
          color: var(--black);
        }
      }
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <NavWrapper>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </NavWrapper>
      <NavWrapper>
        <ul>
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#terms">Terms</a></li>
          <li><a href="#company">Company Policy</a></li>
        </ul>
      </NavWrapper>
    </FooterWrapper>
  );
}

export default Footer;
