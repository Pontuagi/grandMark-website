// indexPageClient.tsx

import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Headings/Heading';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import ChooseCard from '@/components/ChooseCard/ChooseCard';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
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
    background-color: var(--blue);
    padding: 50px;
    border-radius: 30px;
    margin-bottom: 80px;
`;

const HomeText = styled.p`
    font-size: 24px;
    line-height: 1.7;
    color: #f5f5f5;
    font-family: Montserrat, sans-serif;
    font-weight: bold;

    span {
        font-size: 28px;
    }
`;

const ServiceSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 70px;
    justify-content: center;
    margin-bottom: 100px;
`;

const Home: React.FC = () => {
    return (
        <PageContainer>
            <Header />
            <Content>
                <HomeContainer id="about">
                    <HomeText>
                    <span>Welcome to GrandMark Solutions limited, Your Trusted Geospatial Experts.</span> <br/> <br/>
                    At Grandmark, we specialize in providing accurate and reliable geospatial services to meet all your needs.
                    Whether you're a homeowner, developer, or contractor, we have the expertise and technology to deliver precise results on time and within budget
                    </HomeText>
                </HomeContainer>
            </Content>
            <Heading id="services" heading="Our Services" />
            <ServiceSection>
                <ServiceCard
                    title="Boundary Surveys"
                    content="We accurately determine property lines and boundaries to prevent legal disputes and ensure proper land use."
                />
                 <ServiceCard
                    title="Topographic Surveys"
                    content="We identify natural and man-made features of your land, essential for design and construction projects."
                />
                 <ServiceCard
                    title="Land Titling"
                    content="We comply with standards set by the Land Registration Acts for property transactions including transfers, renewal, and extension of leases, production of deed plans, and RIMs….."
                />
                 <ServiceCard
                    title="Engineering Surveys"
                    content="Provide layout and verification services during construction to ensure adherence to plans and specifications."
                />
                 <ServiceCard
                    title="Sectional Properties Surveys"
                    content="Sectional properties provide a unique real estate ownership model that combines individual ownership with shared amenities and responsibilities. 
                    Understanding the legal structure, benefits, and considerations of sectional properties is crucial for potential buyers, investors, and tenants.
                    We at Grandmark will do this for you."
                />
                 <ServiceCard
                    title="Drones Surveys"
                    content="UAV mapping technology continues to innovate across industries, offering scalable mapping, surveying, monitoring, and inspection solutions.
                    By harnessing the power of drones and advanced software, our organization gains valuable insights, and improves workflows, thus allowing our clients to make data-driven decisions with confidence."
                />
                <ServiceCard
                    title="Subdivision Surveys"
                    content="We divide large tracts of land into smaller parcels while complying with local regulations and zoning requirements."
                />
            </ServiceSection>
            <Heading id="choose" heading="Why choose us" />
            <ServiceSection>
                <ChooseCard
                    title='Experience'
                    content='With over 5 years of experience, we deeply understand local regulations and industry standards.'
                />
                <ChooseCard 
                    title="Technology"
                    content="We utilize state-of-the-art surveying equipment and software to ensure accuracy and efficiency."
                />
                <ChooseCard 
                    title="Professionalism"
                    content="Our team of licensed surveyors and technicians are committed to delivering high-quality results with integrity."
                />
                <ChooseCard 
                    title="Customer Satisfaction"
                    content="We prioritize clear communication and transparency throughout the surveying process to exceed your expectations."
                />
            </ServiceSection>
            <Footer />
        </PageContainer>
    );
};

export default Home;
