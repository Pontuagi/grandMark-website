import styled from 'styled-components';
import React, { ReactNode } from 'react';

const SectionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid var(--green);
  border-radius: 20px;
  padding: 30px;
  margin: 16px 0;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s;
  max-width: 400px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SectionCardHeader = styled.h2`
  margin: 0 0 8px 0;
  font-size: 27px;
  color: var(--green);
  text-align: center;
  padding: 20px 0;
`;

const SectionCardContent = styled.p`
  margin: 0;
  font-size: 23px;
  color: var(--black);
  margin-bottom: 20px;
  text-align: center;
`;

const IconCont = styled.div`
  margin-bottom: 37px;
  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
  width: 51px;
  height: auto;
`;

interface SectionCardProps {
  title: string;
  content: string;
  source: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, content, source }) => {
  return (
    <SectionCardContainer>
      <SectionCardHeader>{title}</SectionCardHeader>
      <IconCont>
        <Icon src={source} alt="Grandmark"/>
      </IconCont>
      <SectionCardContent>{content}</SectionCardContent>
    </SectionCardContainer>
  );
};

export default SectionCard;