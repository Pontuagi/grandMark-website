import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
    /*margin: 20px 0;*/
    width: 100%;
`;

const Question = styled.div`
    color: var(--green);
    padding: 30px 20px 15px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--green);
    }

    &:hover {
        background-color: var(--light-gray);
    }
`;

const Icon = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: var(--green);
    margin-left: 27px;
`;

const Answer = styled.div`
    background-color: var(--white);
    color: var(--dark-blue);
    margin-left: 20px;
    padding: 30px 15px 15px;
    font-size: 16px;
    display: ${props => (props.isVisible ? 'block' : 'none')};
`;

const FAQ: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleAnswerVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <FAQContainer>
            <Question onClick={toggleAnswerVisibility}>
                {question}
                <Icon>{isVisible ? '−' : '+'}</Icon>
            </Question>
            <Answer isVisible={isVisible}>{answer}</Answer>
        </FAQContainer>
    );
};

export default FAQ;
