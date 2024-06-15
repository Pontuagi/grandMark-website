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
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Logo = styled.div`
  max-width: 100px;
`;

const LogoImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo><LogoImg src="/images/logo.png" alt="Logo" /></Logo>
      <Navbar />
    </HeaderWrapper>
  );
}

export default Header;
