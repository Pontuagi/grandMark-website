import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: var(--green);
    height: 400px;
    width: 370px;
    padding: 40px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 100px;
    right: 0;
    z-index: 1000;
    border-radius: 20px;
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
        content: '';
        position: absolute;
        left: -10%;
        bottom: -2px;
        width: 120%;
        height: 3px;
        background-color: var(--dark-blue);
    }
`;


const Sidemenu: React.FC = () => {
    return (
        <Container>
            <MenuContainer><MenuText href="#about">About</MenuText></MenuContainer>
            <MenuContainer><MenuText href="#services"> Services</MenuText></MenuContainer>
            <MenuContainer><MenuText href="#choose">Why Choose Us</MenuText></MenuContainer>
            <MenuContainer><MenuText href="#contact">Contact</MenuText></MenuContainer>
        </Container>
    );
}

export default Sidemenu;