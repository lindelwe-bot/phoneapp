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
  justify-content: flex-start;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const Role = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

const Description = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;

    a {
      color: #0077b5;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &.primary {
    background-color: #0077b5;
    color: #fff;
    border: none;

    &:hover {
      background-color: #005f8d;
    }
  }

  &.secondary {
    background-color: #fff;
    color: #0077b5;
    border: 2px solid #0077b5;

    &:hover {
      background-color: #0077b5;
      color: #fff;
    }
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Mentorprofile() {
  return (
    <Container>
      <Header>
        <button>←</button>
      </Header>
      <ProfileImage src="techconnect/public/images/Tech Connect Images/man-hoodie-buttoning-denim-jacket-posing-orange-background-charming-guy-red-sweatshirt-widely-smiling-isolated-backdrop.jpg" alt="Rodney Moyo" />
      <Name>Lindelwe s Njiba</Name>
      <Role>Software Developer</Role>
      <Description>
        <h2>Description</h2>
        <p>
          Lindelwe s Njiba, a leading Software Developer in crafting highly
          beautiful and clean-enhanced websites, applications.{" "}
          <a href="#">Read More</a>
        </p>
      </Description>
      <ButtonContainer>
        <Button className="primary">Request Mentorship</Button>
        <Button className="secondary">Explore More</Button>
        <StyledLink href="/components/Ai screen">
          <Button>Start AI Session</Button>
        </StyledLink>
      </ButtonContainer>
      <Footer>
        <img src="/images/home.png" alt="Home" />
        <img src="/images/community.png" alt="Community" />
        <img src="/images/add.png" alt="Add" />
        <img src="/images/chat.png" alt="Chat" />
        <img src="/images/profile.png" alt="Profile" />
      </Footer>
    </Container>
  );
}

export default Mentorprofile;
