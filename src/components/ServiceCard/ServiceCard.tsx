import styled from 'styled-components';

export const SectionCardContainer = styled.div`
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

export const SectionCardHeader = styled.h2`
  margin: 0 0 8px 0;
  font-size: 27px;
  color: var(--green);
  text-align: center;
  padding: 20px 0;
`;

export const SectionCardContent = styled.p`
  margin: 0;
  font-size: 23px;
  color: var(--white);
  margin-bottom: 20px;
  text-align: center;
`;

interface SectionCardProps {
  title: string;
  content: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, content }) => {
  return (
    <SectionCardContainer>
      <SectionCardHeader>{title}</SectionCardHeader>
      <SectionCardContent>{content}</SectionCardContent>
    </SectionCardContainer>
  );
};

export default SectionCard;