import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 30px;
    margin: 0;

    li {
      margin-left: 2rem;

      a {
        color: #333;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavWrapper>
      <ul>
        
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#choose">Choose Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </NavWrapper>
  );
}

export default Navbar;
