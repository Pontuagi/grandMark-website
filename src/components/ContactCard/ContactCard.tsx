import React from 'react';
import styled from 'styled-components';

const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid var(--green);
  border-radius: 20px;
  padding: 30px;
  margin: 16px 0;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s;
  max-width: 1000px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactCardHeader = styled.h2`
  margin: 0 0 8px 0;
  font-size: 27px;
  color: var(--green);
  text-align: center;
  padding: 20px 0;
`;

const ContactCardContent = styled.p`
  margin: 0;
  font-size: 23px;
  color: var(--white);
  margin-bottom: 20px;
  text-align: center;
`;

const ContactCardDetails = styled.div`
  margin: 0;
  font-size: 18px;
  color: var(--white);
  text-align: center;

  & > p {
    margin: 5px 0;
  }
`;

interface ContactCardProps {
  title: string;
  message: string;
  contacts: string[];
}

const ContactCard: React.FC<ContactCardProps> = ({ title, message, contacts }) => {
  return (
    <ContactCardContainer>
      <ContactCardHeader>{title}</ContactCardHeader>
      <ContactCardContent>
        Ready to start your surveying project? Contact us today to schedule a consultation and learn how Grandmark Solutions can assist you with your geospatial needs.
      </ContactCardContent>
      <ContactCardDetails>
        <p>Contact Us:</p>
        {contacts.map((contact, index) => (
          <p key={index}>{contact}</p>
        ))}
      </ContactCardDetails>
    </ContactCardContainer>
  );
};

export default ContactCard;
