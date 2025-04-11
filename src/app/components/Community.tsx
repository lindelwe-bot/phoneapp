"use client";

import React from "react";
import styled from "styled-components";
import Link from 'next/link';

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

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  p {
    font-size: 1rem;
    color: #333;
    padding: 10px;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
`;

const BackButton = styled.button`
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

const FooterIcon = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #666;
  font-size: 0.8rem;
  gap: 4px;
  transition: transform 0.2s, color 0.2s;

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  &:hover {
    color: #0077b5;
    transform: translateY(-2px);
    
    img {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(0px);
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 10px 0;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Community() {
  return (
    <Container>
      <Header>
        <Title>Community</Title>
        <IconContainer>
          <img src="/images/persona.jpeg" alt="User Avatar" />
          <img src="/images/bell.png" alt="Notifications" />
        </IconContainer>
      </Header>
      <Subtitle>Explore The Best Of Our Community</Subtitle>
      <GridContainer>
        <Card>
          <StyledLink href="/components/Events">
            <img src="/images/Tech Connect Pictures/pexels-pixabay-262012.jpg" alt="Event Listing" />
            <p>Event Listing</p>
          </StyledLink>
        </Card>
        <Card>
          <img src="/images/Tech Connect Pictures/pexels-max-fischer-5212317.jpg" alt="Mentorship" />
          <p>Mentorship</p>
        </Card>
        <Card>
          <img src="" alt="Project Collaboration" />
          <p>Project Collaboration</p>
        </Card>
        <Card>
          <img src="/images/job-board.jpg" alt="Job Board" />
          <p>Job Board</p>
        </Card>
      </GridContainer>
      <ButtonContainer>
        <BackButton>Back To Home Screen</BackButton>
      </ButtonContainer>
      <Footer>
        <FooterIcon href="/components/Landing">
          <img src="/images/home.png" alt="Home" />
          <span>Home</span>
        </FooterIcon>
        <FooterIcon href="/components/Community">
          <img src="/images/community.png" alt="Community" />
          <span>Community</span>
        </FooterIcon>
        <FooterIcon href="/components/Events">
          <img src="/images/add.png" alt="Add" />
          <span>Create</span>
        </FooterIcon>
        <FooterIcon href="/components/Mentor">
          <img src="/images/chat.png" alt="Chat" />
          <span>Mentors</span>
        </FooterIcon>
        <FooterIcon href="/components/Login">
          <img src="/images/profile.png" alt="Profile" />
          <span>Profile</span>
        </FooterIcon>
      </Footer>
    </Container>
  );
}

export default Community;
