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

   a {
    margin-left: 20px;
   }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  border: 2px var(--blue);
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

const NavBarContainer = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: block;
    padding-right: 50px;
  }
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
        <a href="/"><Logo><LogoImg src="/images/logo.png" alt="Logo" /></Logo></a>
        
        <NavBarContainer>
          <Navbar />
        </NavBarContainer>
        
        <SidemenuContainer>
          <SidemenuButton isOpen={isSidemenuOpen} toggleSidemenu={toggleSidemenu} />
          {isSidemenuOpen && <Sidemenu closeSidemenu={closeSidemenu} />}
        </SidemenuContainer>
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
