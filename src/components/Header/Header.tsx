import React from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar/NavBar';

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--green);
  color: var(--white);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
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
