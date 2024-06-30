import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: green;
    border-radius: 50%;
    box-shadow: 0 0 5px 2px rgba(0, 128, 0, 0.2);
    cursor: pointer;
    position: relative;
    &:hover {
        box-shadow: 0 0 10px 4px rgba(0, 128, 0, 0.3);
    }
    &:active {
        box-shadow: 0 0 2px 1px rgba(0, 128, 0, 0.1);
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 8px 3px rgba(0, 128, 0, 0.3);
    }
`;

const Line = styled.div`
    width: 20px;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: transform 0.3s ease, opacity 0.3s ease;
`;

const Line1 = styled(Line)<{ isOpen: boolean }>`
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'translateY(-6px)')};
`;

const Line2 = styled(Line)<{ isOpen: boolean }>`
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
`;

const Line3 = styled(Line)<{ isOpen: boolean }>`
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'translateY(6px)')};
`;

interface SidemenuButtonProps {
    toggleSidemenu: () => void;
}

const SidemenuButton: React.FC<SidemenuButtonProps> = ({ toggleSidemenu }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
        toggleSidemenu();
    };

    return (
        <ButtonContainer 
            role="button" 
            aria-label="button"
            tabIndex={0}
            onClick={toggleButton}
            onKeyPress={(e) => { if (e.key === 'Enter') toggleButton(); }}
        >
            <Line1 isOpen={isOpen} />
            <Line2 isOpen={isOpen} />
            <Line3 isOpen={isOpen} />
        </ButtonContainer>
    );
}

export default SidemenuButton;
