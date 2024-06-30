import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar/NavBar';
import SidemenuButton from '../SidemenuButton/SidemenuButton';
import Sidemenu from '../Sidemenu/Sidemenu';
import breakpoints from '@/constants/breakpoints';

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

const TabletOnly = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavBarContainer = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
  `;

const Header: React.FC = () => {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);

  const toggleSidemenu = () => {
    setIsSidemenuOpen(!isSidemenuOpen);
  };

  return (
    <HeaderWrapper>
      <Logo><LogoImg src="/images/logo.png" alt="Logo" /></Logo>
      
      <NavBarContainer>
        <Navbar />
      </NavBarContainer>
      
      <TabletOnly>
        <SidemenuButton toggleSidemenu={toggleSidemenu} />
        {isSidemenuOpen && <Sidemenu />}
      </TabletOnly>
    
    </HeaderWrapper>
  );
}

export default Header;
