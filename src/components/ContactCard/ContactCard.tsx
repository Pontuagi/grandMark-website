import React, { useState } from "react";
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

const ContactForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: var(--green);
  color: var(--white);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 300px;
  border-radius: 5px;
  align-items: center;

  &:hover {
    background-color: darkgreen;
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
  {
    /*
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send email.");
    }
  };
  */
  }
  return (
    <ContactCardContainer>
      <ContactCardHeader id="contact">Contact Us</ContactCardHeader>
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
      {/*
      <ContactForm>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send</Button>
        </Form>
      </ContactForm>
      */}
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
