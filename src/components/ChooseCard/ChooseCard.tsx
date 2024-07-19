import styled from 'styled-components';

const ChooseCardContainer = styled.div`
  display: flex;
  align-items: center;
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

const ChooseCardHeader = styled.h3`
  margin: 0 0 10px 0;
  font-size: 27px;
  color: var(--blue);
  text-align: center;
  padding: 15px 0;
`;

const ChooseCardContent = styled.p`
  margin: 0;
  font-size: 23px;
  color: var(--black);
  margin-bottom: 25px;
  text-align: center;
`;

const ChooseCardImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.3);
  margin: 37px 0 15px;
`;

interface ChooseCardProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
}

const ChooseCard: React.FC<ChooseCardProps> = ({ title, content, imageSrc, imageAlt }) => {
  return (
    <ChooseCardContainer>
      <ChooseCardImage src={imageSrc} alt={imageAlt} />
      <ChooseCardHeader>{title}</ChooseCardHeader>
      <ChooseCardContent>{content}</ChooseCardContent>
    </ChooseCardContainer>
  );
};

export default ChooseCard;