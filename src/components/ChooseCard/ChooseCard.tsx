import styled from 'styled-components';

export const ChooseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #007bff;
  border-radius: 15px;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0 6px 12px rgba(0, 123, 255, 0.2);
  transition: transform 0.3s;
  max-width: 420px;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ChooseCardHeader = styled.h3`
  margin: 0 0 10px 0;
  font-size: 27px;
  color: var(--blue);
  text-align: center;
  padding: 15px 0;
`;

export const ChooseCardContent = styled.p`
  margin: 0;
  font-size: 23px;
  color: var(--white);
  margin-bottom: 25px;
  text-align: center;
`;

interface ChooseCardProps {
  title: string;
  content: string;
}

const ChooseCard: React.FC<ChooseCardProps> = ({ title, content }) => {
  return (
    <ChooseCardContainer>
      <ChooseCardHeader>{title}</ChooseCardHeader>
      <ChooseCardContent>{content}</ChooseCardContent>
    </ChooseCardContainer>
  );
};

export default ChooseCard;