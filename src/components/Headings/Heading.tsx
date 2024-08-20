import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

const Logo = styled.img`
  width: 77px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 5px 2px rgba(0, 128, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 10px 0 20px;
  color: var(--green);
  font-family: Montserrat, sans-serif;
`;

interface HeadingProps {
  heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, ...props }) => {
  return (
    <Container {...props}>
      <Logo src="/images/logo.png" alt="Logo" />
      <Title>{heading}</Title>
    </Container>
  );
};

export default Heading;
