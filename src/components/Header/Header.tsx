import React from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar/NavBar';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: green;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>MyLogo</Logo>
      <Navbar />
    </HeaderWrapper>
  );
}

export default Header;
