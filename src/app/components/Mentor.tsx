"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #0077b5;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  select {
    padding: 10px;
    font-size: 1rem;
    color: #333;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      border-color: #0077b5;
    }
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
`;

const MentorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

const MentorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #0077b5;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005f8d;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Mentor() {
  return (
    <Container>
      <Header>
        <Title>Tech Connect</Title>
        <IconContainer>
          <img src="/images/back.png" alt="Back" />
          <img src="/images/persona.jpeg" alt="User Avatar" />
          <img src="/images/bell.png" alt="Notifications" />
        </IconContainer>
      </Header>
      <FilterContainer>
        <label htmlFor="industry">
          <select id="industry" name="industry" aria-label="Select Industry">
            <option>Industry</option>
          </select>
        </label>
        <label htmlFor="age">
          <select id="age" name="age" aria-label="Select Age Range">
            <option>Age</option>
          </select>
        </label>
        <label htmlFor="country">
          <select id="country" name="country" aria-label="Select Country">
            <option>Country</option>
          </select>
        </label>
      </FilterContainer>
      <Subtitle>Find A Mentor</Subtitle>
      <Description>
        Find the perfect mentor for you to help advance your journey.
      </Description>
      <MentorGrid>
        <MentorCard>
          <img src="techconnect/public/images/redjeanjacket.jpg" alt="Mentor 1" />
        </MentorCard>
        <MentorCard>
          <img src="techconnect/public/images/redjacket.jpg" alt="Mentor 2" />
        </MentorCard>
        <MentorCard>
          <img src="techconnect/public/images/crossedarms.jpg" alt="Mentor 3" />
        </MentorCard>
        <MentorCard>
          <img src="techconnect/public/images/blackman.jpg" alt="Mentor 4" />
        </MentorCard>
        <MentorCard>
          <img src="techconnect/public/images/afroamerican.jpg" alt="Mentor 5" />
        </MentorCard>
        <MentorCard>
          <img src="techconnect/public/images/happy.jpg" alt="Mentor 6" />
        </MentorCard>
      </MentorGrid>
      <StyledLink href="/components/Loading">
        <Button>Find a Mentor</Button>
      </StyledLink>
    </Container>
  );
}

export default Mentor;
