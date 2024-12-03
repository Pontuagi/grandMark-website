// indexPageClient.tsx
import "@/app/globals.css";
import React, { ReactElement } from "react";
import Layout from "@/components/layout";
import type { NextPageWithLayout } from './_app'
import styled from "styled-components";
import Heading from "../components/Headings/Heading";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import ChooseCard from "@/components/ChooseCard/ChooseCard";
import ContactCard from "@/components/ContactCard/ContactCard";
import breakpoints from "@/constants/breakpoints";
import FAQ from "@/components/Faq/Faq";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-left: 30px;
  }
`;

const Content = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageCont = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    margin-bottom: -170px;
  }
`;

const HomeContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;
  top: 50%;
  left: 37%;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  transform: translate(-50%, -50%);

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-top: 70px;
    position: relative;
    padding: 10px;
    left: 50%;
    top: 0;
  }
`;

const HomeText = styled.p`
  padding: 0 25px;
  font-size: 20px;
  line-height: 1.7;
  color: var(--black);
  font-weight: bold;
  font-family: Montserrat, sans-serif;
  margin-bottom: 10px;

  span {
    margin-bottom: 17px;
    font-weight: bold;
    color: var(--blue);
    font-size: 30px;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 15px;

    span {
      font-size: 20px;
    }
  }
`;

const HomeImage = styled.img`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.3);
`;

const ServiceSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 70px;
  justify-content: center;
  margin-bottom: 100px;
  max-width: 1200px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    gap: 30px;
    margin-bottom: 50px;
  }
`;

const FaqSection = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
`;

const Space = styled.div`
  height: 1px;
`
export const TeamSection = styled.section`
  padding: 40px 20px;
  background-color: #f8f9fa; /* Light background */
  text-align: center;
`;


// Individual team member card
export const Team = styled.div`
  display: inline-block;
  text-align: center;
  margin: 20px;
  width: 150px;
`;

// Team member image
export const TeamImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #ddd;
`;

// Team member name
export const TeamName = styled.h3`
  font-size: 1.25rem;
  margin: 8px 0 4px;
  color: #333;
  font-weight: bold;
`;

// Team member position
export const TeamPosition = styled.p`
  font-size: 0.875rem;
  color: #666; /* Subtle gray for position text */
  margin: 0;
`;

const Page: NextPageWithLayout = () => {
  return (
    <PageContainer>
      <Content>
        <ImageCont>
          <HomeImage src="/survey.jpeg" alt="grandmark" />
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
        </ImageCont>
      </Content>
      <Space id="services" />
      <Heading heading="Our Services" />

      <ServiceSection >
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
      <Space id="choose" />
      <Heading heading="Why choose us" />

      <ServiceSection >
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

      <Heading heading="FAQ"/>

      <FaqSection>
        <FAQ
          question="What is land surveying?"
          answer="Land surveying is the process of measuring and mapping out the position, boundaries, and features of a piece of land. It is essential for determining property lines, planning construction projects, and creating accurate maps."
        />
        <FAQ
          question="What is aerial surveying?"
          answer="Aerial surveying involves collecting data about the Earth's surface using airborne sensors, typically drones or aircraft. This method provides a bird’s-eye view of large areas, allowing for the collection of detailed topographic data, maps, and images."
        />
        <FAQ
          question="How do I know if I need a land survey?"
          answer="You may need a land survey if you are buying or selling property, constructing a new building, subdividing land, or resolving property boundary disputes. A survey ensures legal and accurate delineation of property boundaries."
        />
        <FAQ
          question="What types of land surveys do you offer?"
          answer="We offer various types of land surveys, including boundary surveys, topographic surveys, construction staking, subdivision planning, and as-built surveys. We also provide specialized surveys like hydrographic and geodetic surveys."
        />
        <FAQ
          question="What is the difference between a boundary survey and a topographic survey?"
          answer="A boundary survey focuses on determining the exact property lines of a parcel of land, while a topographic survey maps out the elevation and features of the land, such as trees, buildings, and natural terrain."
        />
        <FAQ
          question="How accurate are your aerial surveys?"
          answer="Our aerial surveys are highly accurate, often achieving centimeter-level precision using advanced drones equipped with GPS and high-resolution cameras or LiDAR sensors. The accuracy depends on the equipment used and the specific project requirements."
        />
        <FAQ
          question="How long does a typical land survey take?"
          answer="The duration of a land survey depends on the size and complexity of the property. A small residential lot may take a few days, while larger or more complicated surveys may take several weeks."
        />
        <FAQ
          question="What do I need to provide before you can conduct a survey?"
          answer="Typically, we need access to the property, any existing legal descriptions, previous surveys, and any relevant permits or land deeds. For aerial surveys, we may also need flight clearances or permissions from local authorities."
        />
        <FAQ
          question="Are your drones and surveyors licensed?"
          answer="Yes, all our drones are operated by licensed remote pilots, and our land surveyors are certified professionals with the necessary licenses to practice in their respective fields."
        />
        <FAQ
          question="How do you ensure safety during aerial surveys?"
          answer="Safety is our top priority. We follow strict safety protocols, including pre-flight planning, risk assessments, and compliance with local aviation regulations. Our pilots are trained to handle various scenarios to minimize risk."
        />
        <FAQ
          question="Can aerial surveys be conducted in all weather conditions?"
          answer="No, aerial surveys are dependent on weather conditions. High winds, heavy rain, and low visibility can affect the quality of the data collected and the safety of the operation. We monitor weather forecasts closely and schedule flights accordingly."
        />
        <FAQ
          question="How much does a land or aerial survey cost?"
          answer="The cost of a survey depends on factors such as the size of the area, the type of survey, the terrain, and the specific requirements of the project. We provide detailed quotes after assessing the project’s scope."
        />
        <FAQ
          question="What deliverables can I expect from a survey?"
          answer="Deliverables typically include detailed maps, digital elevation models (DEMs), orthophotos, 3D models, boundary plats, and written reports. The specific deliverables will depend on the type of survey conducted."
        />
        <FAQ
          question="How do I request a survey?"
          answer="You can request a survey by contacting us directly through our website, phone, or email. We’ll arrange an initial consultation to discuss your needs and provide a tailored quote."
        />
        <FAQ
          question="What are the advantages of using drones for surveying?"
          answer="Drones offer several advantages, including faster data collection, access to hard-to-reach areas, high-resolution imagery, cost-effectiveness, and the ability to cover large areas quickly."
        />
        <FAQ
          question="Can you help with legal issues related to property boundaries?"
          answer="Yes, our surveys are often used in legal disputes involving property boundaries. We provide precise data and expert testimony if required to support legal cases."
        />
      </FaqSection>

      <Space id="contact"/>
      <ContactCard />
      <TeamSection>
        <Heading heading="Meet the Grandmark team" />
        <Team>
        <TeamImage src="/denno.jpeg" alt="John Doe" />
        <TeamName>Dennis Korir</TeamName>
        <TeamPosition>CEO</TeamPosition>
      </Team>
      </TeamSection>
    </PageContainer>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
};

export default Page;
