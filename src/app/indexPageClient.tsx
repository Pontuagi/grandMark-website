// indexPageClient.tsx

import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Headings/Heading';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

const Content = styled.div`
    max-width: 800px;
    text-align: center;
    margin-top: 2rem;
`;

const Home: React.FC = () => {
    return (
        <PageContainer>
            <Header />
            <Heading id="main-heading" heading="Welcome to My Site" />
            <Content>
                <p>This is the home page of my awesome website.</p>
                {/* Add more content or components as needed */}
            </Content>
            <Footer />
        </PageContainer>
    );
};

export default Home;
