import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: var(--green);
  height: 350px;
  width: 320px;
  padding: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 100px;
  right: 0;
  z-index: 1000;
  border-radius: 10px;
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

const Sidemenu: React.FC<{ closeSidemenu: () => void }> = ({
  closeSidemenu,
}) => {
  return (
    <Container>
      <MenuContainer>
        <MenuText href="#about" onClick={closeSidemenu}>
          About
        </MenuText>
      </MenuContainer>
      <MenuContainer>
        <MenuText href="#services" onClick={closeSidemenu}>
          {" "}
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
    </Container>
  );
};

export default Sidemenu;
