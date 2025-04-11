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

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #e6e6e6;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  input {
    flex: 1;
    border: none;
    background: none;
    outline: none;
    font-size: 1rem;
    color: #333;
    margin-left: 10px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`;

const CategoryContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;

  button {
    padding: 10px 15px;
    font-size: 1rem;
    color: #0077b5;
    background-color: #fff;
    border: 2px solid #0077b5;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      background-color: #0077b5;
      color: #fff;
    }

    &.active {
      background-color: #0077b5;
      color: #fff;
    }
  }
`;

const EventSection = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    font-size: 1.2rem;
    color: #333;
  }

  a {
    font-size: 1rem;
    color: #0077b5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const EventList = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
`;

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-width: 250px;

  img {
    width: 100%;
    height: auto;
  }

  div {
    padding: 10px;

    h3 {
      font-size: 1rem;
      color: #333;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 5px;
    }

    span {
      font-size: 0.8rem;
      color: #999;
    }
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

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

const ConfirmButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #0077b5;
  margin-top: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Events() {
  return (
    <Container>
      <Header>
        <Title>Events</Title>
        <IconContainer>
          <img src="/images/back.png" alt="Back" />
          <img src="/images/persona.jpeg" alt="User Avatar" />
          <img src="/images/bell.png" alt="Notifications" />
        </IconContainer>
      </Header>
      <SearchBar>
        <span>🔍</span>
        <input type="text" placeholder="Discover Latest Events..." />
      </SearchBar>
      <CategoryContainer>
        <CategoryList>
          <button className="active">All</button>
          <button>UI/UX Design</button>
          <button>Software</button>
          <button>Digital Marketing</button>
        </CategoryList>
      </CategoryContainer>
      <EventSection>
        <SectionHeader>
          <h2>UI/UX Design</h2>
          <a href="#">View All</a>
        </SectionHeader>
        <EventList>
          <EventCard>
            <StyledLink href="/components/Vr">
              <img src="/images/Tech Connect Pictures/download (23).jpeg" alt="VR Update Launch" />
              <div>
                <h3>VR Update Launch</h3>
                <p>Showcase new tools in VR</p>
                <span>22-23 April 2025 | 10:00 AM</span>
              </div>
            </StyledLink>
          </EventCard>
          <EventCard>
            <img src="/images/Tech Connect Pictures/Reddington 🇸🇱 (@karllesinho) _ X.jpeg" alt="Design Mindset Event" />
            <div>
              <h3>Design Mindset 101</h3>
              <p>Learn the basics of design</p>
              <span>22-23 April 2025 | 10:00 AM</span>
            </div>
          </EventCard>
        </EventList>
      </EventSection>
      <ButtonContainer>
        <Link href="/components/Landing">
          <BackButton>Back To Home Screen</BackButton>
        </Link>
      </ButtonContainer>
      <Footer>
        <Link href="/components/Interest">
          <img src="/images/home.png" alt="Home" />
        </Link>
        <Link href="/components/Community">
          <img src="/images/community.png" alt="Community" />
        </Link>
        <Link href="/components/Ai1">
          <img src="/images/add.png" alt="Add" />
        </Link>
        <Link href="/components/Chat">
          <img src="/images/chat.png" alt="Chat" />
        </Link>
        <Link href="/components/MentorProfile">
          <img src="/images/profile.png" alt="Profile" />
        </Link>
      </Footer>
    </Container>
  );
}

export default Events;
