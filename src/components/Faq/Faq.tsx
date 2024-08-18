import React, { useState } from "react";
import styled from "styled-components";
import breakpoints from "@/constants/breakpoints";

const FAQContainer = styled.div`
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

    @media screen and (max-width: ${breakpoints.mobile}){
        font-size: 15px;
    }
`;

const Icon = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: var(--green);
    margin-left: 27px;
    
    @media screen and (max-width: ${breakpoints.mobile}){
        font-size: 22px;
    }
`;

interface AnswerProps {
    isVisible: boolean;
  }

const Answer = styled.div<AnswerProps>`
    background-color: var(--white);
    color: var(--dark-blue);
    margin-left: 20px;
    padding: 30px 15px 15px;
    font-size: 16px;
    display: ${props => (props.isVisible ? 'block' : 'none')};

    @media screen and (max-width: ${breakpoints.mobile}){
        font-size: 14px;
    }
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
