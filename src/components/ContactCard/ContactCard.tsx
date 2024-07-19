import React, { useState } from "react";
import styled from "styled-components";

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

const ContactCard: React.FC = () => {
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
          Tel No:<span>+25423988691</span>
        </p>
      </ContactCardDetails>
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
    </ContactCardContainer>
  );
};

export default ContactCard;
