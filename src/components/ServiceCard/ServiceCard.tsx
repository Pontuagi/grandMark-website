import styled from 'styled-components';
import React, { ReactNode } from 'react';
import breakpoints from '@/constants/breakpoints';


const SectionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /*border: 1px solid var(--green);*/
  border-radius: 20px;
  padding: 30px;
  margin: 16px 0;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  max-width: 400px;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: ${breakpoints.desktop}) {
    max-width: 300px;
    padding: 15px;
  }
`;

const SectionCardHeader = styled.h2`
  margin: 0 0 8px 0;
  font-size: 27px;
  color: var(--green);
  text-align: center;
  padding: 20px 0;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`;

const SectionCardContent = styled.p`
  margin: 0;
  font-size: 23px;
  color: var(--black);
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
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