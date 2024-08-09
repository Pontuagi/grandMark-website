// indexPageClient.tsx

import React from "react";
import styled from "styled-components";
import Heading from "../components/Headings/Heading";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import ChooseCard from "@/components/ChooseCard/ChooseCard";
import ContactCard from "@/components/ContactCard/ContactCard";
import breakpoints from "@/constants/breakpoints";


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
  margin-top: 150px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*background-color: var(--blue);*/
  padding: 20px;
  margin-bottom: 80px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 10px;
  }
`;

const HomeText = styled.p`
  font-size: 20px;
  line-height: 1.7;
  color: var(--black);
  font-family: Montserrat, sans-serif;

  span {
    margin-bottom: 17px;
    font-weight: bold;
    color: var(--blue);
    font-size: 28px;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 15px;

    span {
      font-size: 20px;
    }
  }

`;

const ImageCont = styled.div`
  width: 100%;
  position: relative;
`;

const HomeImage = styled.img`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.3);
`;

const ServiceSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 100px;

  @media screen and (max-width: ${breakpoints.tablet} (
    gap: 30px;
    margin-bottom: 50px;
  )
`;

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <Content>
        <ImageCont>
          <HomeImage src="/Grandmark_entry.png" alt="grandmark" />
        </ImageCont>
        <HomeContainer id="about">
          <HomeText>
            <span>
              GrandMark Solutions limited Your Trusted Geospatial Experts.
            </span>{" "}
            <br /> <br />
            At Grandmark, we specialize in providing accurate and reliable
            geospatial services to meet all your needs. Whether you're a
            homeowner, developer, or contractor, we have the expertise and
            technology to deliver precise results on time and within budget
          </HomeText>
        </HomeContainer>
      </Content>
      <Heading heading="Our Services" />
      <ServiceSection id="services">
        <ServiceCard
          title="Boundary Surveys"
          content="We accurately determine property lines and boundaries to prevent legal disputes and ensure proper land use."
          source="/frame.png"
        />
        <ServiceCard
          title="Topographic Surveys"
          source="/hill.png"
          content="We identify natural and man-made features of your land, essential for design and construction projects."
        />
        <ServiceCard
          title="Land Titling"
          source="/document.png"
          content="We comply with standards set by the Land Registration Acts for property transactions including transfers, renewal, and extension of leases, production of deed plans, and RIMs….."
        />
        <ServiceCard
          title="Engineering Surveys"
          source="/3d-scanner.png"
          content="Provide layout and verification services during construction to ensure adherence to plans and specifications."
        />
        <ServiceCard
          title="Sectional Properties Surveys"
          source="/separation.png"
          content="Sectional properties provide a unique real estate ownership model that combines individual ownership with shared amenities and responsibilities. 
                    Understanding the legal structure, benefits, and considerations of sectional properties is crucial for potential buyers, investors, and tenants.
                    We at Grandmark will do this for you."
        />
        <ServiceCard
          title="Drones Surveys"
          source="/drone.png"
          content="UAV mapping technology continues to innovate across industries, offering scalable mapping, surveying, monitoring, and inspection solutions.
                    By harnessing the power of drones and advanced software, our organization gains valuable insights, and improves workflows, thus allowing our clients to make data-driven decisions with confidence."
        />
        <ServiceCard
          title="Subdivision Surveys"
          source="/part.png"
          content="We divide large tracts of land into smaller parcels while complying with local regulations and zoning requirements."
        />
      </ServiceSection>
      <Heading heading="Why choose us" />
      <ServiceSection id="choose">
        <ChooseCard
          imageSrc="/denno.jpeg"
          imageAlt="experience"
          title="Experience"
          content="With over 5 years of experience, we deeply understand local regulations and industry standards."
        />
        <ChooseCard
          imageSrc="/drone2.jpeg"
          imageAlt="Drone2"
          title="Technology"
          content="We utilize state-of-the-art surveying equipment and software to ensure accuracy and efficiency."
        />
        <ChooseCard
          imageSrc="/boset.jpeg"
          imageAlt="Field-img"
          title="Professionalism"
          content="Our team of licensed surveyors and technicians are committed to delivering high-quality results with integrity."
        />
        <ChooseCard
          imageSrc="/field.jpeg"
          imageAlt="satisfaction-img"
          title="Customer Satisfaction"
          content="We prioritize clear communication and transparency throughout the surveying process to exceed your expectations."
        />
      </ServiceSection>

      <ContactCard />
      <Footer />
    </PageContainer>
  );
};

export default Home;
