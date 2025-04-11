"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #0077b5;
  }

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-right: 10px;
  }

  div {
    flex: 1;

    h2 {
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.9rem;
      color: #666;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const ChatContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 400px;
  overflow-y: auto;
  margin-bottom: 20px;

  .message {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;

    &.user {
      justify-content: flex-end;
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
    }

    div {
      max-width: 70%;
      padding: 10px;
      border-radius: 10px;
      background-color: #e6e6e6;
      color: #333;
      font-size: 1rem;

      &.user {
        background-color: #0077b5;
        color: #fff;
      }
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 5px;
    margin-right: 10px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #0077b5;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005a8c;
  }
`;

function Techteam() {
  return (
    <Container>
      <Header>
        <h1>Tech Project Team</h1>
        <img src="/images/heart.png" alt="Favorite" />
      </Header>
      <ChatHeader>
        <img src="/images/team-logo.png" alt="Team Logo" />
        <div>
          <h2>Tech Project Team</h2>
          <p>12 Members</p>
        </div>
        <button>
          <img src="/images/menu.png" alt="Menu" />
        </button>
      </ChatHeader>
      <ChatContainer>
        <div className="message">
          <img src="/images/user1.png" alt="User 1" />
          <div>Hey guys...</div>
        </div>
        <div className="message">
          <img src="/images/user1.png" alt="User 1" />
          <div>
            I have completed the initial mockup. How is the rest of the team
            doing?
          </div>
        </div>
        <div className="message user">
          <div>Hey Daniel. Designing something cool!</div>
        </div>
        <div className="message user">
          <div>Your looks great, Daniel.</div>
        </div>
        <div className="message user">
          <div>Sending in my figures like in 3D and values.</div>
        </div>
      </ChatContainer>
      <InputContainer>
        <input type="text" placeholder="Type your message here..." />
        <button>
          <img src="/images/send.png" alt="Send" />
        </button>
      </InputContainer>
      <StyledLink href="/components/Messaging">
        <Button>Start Chat</Button>
      </StyledLink>
    </Container>
  );
}

export default Techteam;
