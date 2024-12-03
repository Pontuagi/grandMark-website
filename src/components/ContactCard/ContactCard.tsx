import React from "react";
import styled from "styled-components";
import breakpoints from "@/constants/breakpoints";

const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 30px;
  margin: 16px 0;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s;
  width: 100%;
  max-width: 1200px;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    max-width: 700px;
  }
`;

const ContactCardHeader = styled.h2`
  margin: 0 0 8px 0;
  font-size: 27px;
  color: var(--green);
  text-align: center;
  padding: 20px 0;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

const ContactCardContent = styled.p`
  margin: 0;
  font-size: 23px;
  color: var(--black);
  margin-bottom: 20px;
  text-align: center;
  padding: 30px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

const ContactCardDetails = styled.div`
  margin: 0;
  font-size: 18px;
  color: var(--black);
  text-align: center;

  & > p {
    margin: 5px 0;
  }
`;

const VisionCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  margin-top: 37px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 35px;
  }
`;

const Vision = styled.div`
  width: 300px;
  height: auto;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  font-weight: semi-bold;

  span {
    font-weight: bold;
    font-size: 20px;
  }
`;

const ContactCard: React.FC = () => {
  return (
    <ContactCardContainer>
      <ContactCardHeader>Contact Us</ContactCardHeader>
      <ContactCardContent>
        Ready to start your surveying project? Contact us today to schedule a
        consultation and learn how Grandmark Solutions can assist you with your
        geospatial needs.
      </ContactCardContent>
      <ContactCardDetails>
        <p>
          Name: <span>GrandMark Admin</span>
        </p>
        <p>
          Email:<span>grandmarksolutionsltd@gmail.com</span>
        </p>
        <p>
          Tel No:<span>+254723988691</span>
        </p>
      </ContactCardDetails>
      
      <VisionCont>
        {/* Vision */}
        <Vision>
          <p>
            <span>Vision Statement</span> <br /> <br />
            Our vision is to be the leading provider of geospatial services
            globally, recognized for our commitment to excellence, innovation,
            and sustainability. We aim to revolutionize how geospatial data is
            utilized across industries, driving positive change and creating a
            more connected and informed world.
          </p>
        </Vision>
        {/* Mission */}
        <Vision>
          <p>
            <span>Mission Statement </span>
            <br />
            <br />
            At Grandmark Solutions Limited, our mission is to empower businesses
            and communities through innovative geospatial solutions. We strive
            to deliver precise, reliable, and actionable geospatial data and
            insights, enabling our clients to make informed decisions, optimize
            operations, and foster sustainable growth.
          </p>
        </Vision>
      </VisionCont>
    </ContactCardContainer>
  );
};

export default ContactCard;
