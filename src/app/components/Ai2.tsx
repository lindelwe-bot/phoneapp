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

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 5px;
  }

  span {
    font-size: 0.9rem;
    color: #666;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  button {
    flex: 1;
    margin: 0 5px;
    padding: 10px;
    font-size: 1rem;
    color: #fff;
    background-color: #0077b5;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #005f8d;
    }
  }
`;

const MenuContainer = styled.div`
  width: 100%;
  max-width: 400px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
    }

    span {
      font-size: 1rem;
      color: #333;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  background-color: #0077b5;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #005f8d;
  }
`;

function Ai2() {
  return (
    <Container>
      <Header>
        <button>←</button>
        <img src="/images/bell.png" alt="Notifications" />
      </Header>
      <ProfileSection>
        <img src="/images/profile-picture.png" alt="Profile" />
        <h1>David Chikanga</h1>
        <p>UX/UI Designer</p>
        <span>+263 717 263 902</span>
        <span>example@gmail.com</span>
      </ProfileSection>
      <StatsContainer>
        <button>Connections: 121</button>
        <button>Group Projects: 6</button>
      </StatsContainer>
      <MenuContainer>
        <div>
          <span>Your Notifications</span>
          <img src="/images/arrow-right.png" alt="Arrow" />
        </div>
        <div>
          <span>Analytics</span>
          <img src="/images/arrow-right.png" alt="Arrow" />
        </div>
        <div>
          <span>Project Collaborations</span>
          <img src="/images/arrow-right.png" alt="Arrow" />
        </div>
        <div>
          <span>Your Connections</span>
          <img src="/images/arrow-right.png" alt="Arrow" />
        </div>
        <div>
          <span>Log Out</span>
          <img src="/images/arrow-right.png" alt="Arrow" />
        </div>
      </MenuContainer>
      <StyledLink href="/components/Techteam">
        <Button>Join Tech Team</Button>
      </StyledLink>
    </Container>
  );
}

export default Ai2;

