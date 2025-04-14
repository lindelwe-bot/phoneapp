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

const ChatContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 400px;
  overflow-y: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Message = styled.div<{ isUser: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  margin-bottom: 10px;

  div {
    max-width: 70%;
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props) => (props.isUser ? "#0077b5" : "#e6e6e6")};
    color: ${(props) => (props.isUser ? "#fff" : "#333")};
    font-size: 1rem;
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: ${(props) => (props.isUser ? "10px" : "0")};
    margin-right: ${(props) => (props.isUser ? "0" : "10px")};
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
  background-color: #0077b5;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
`;

function AiScreen() {
  return (
    <Container>
      <Header>
        <h1>Tech Connect A.I</h1>
        <img src="/images/menu.png" alt="Menu" />
      </Header>
      <ChatContainer>
        <Message isUser={false}>
          <img src="/images/user-avatar.png" alt="User" />
          <div>Hey</div>
        </Message>
        <Message isUser={true}>
          <div>Hey David. How may I help you?</div>
          <img src="/images/ai-icon.png" alt="AI" />
        </Message>
        <Message isUser={false}>
          <img src="/images/user-avatar.png" alt="User" />
          <div>Who designed this application?</div>
        </Message>
        <Message isUser={true}>
          <div>
            Tech Connect is an application that was designed by the UX/UI
            enthusiast Daniel Mudimba.
          </div>
          <a href='techconnect/src/app/components/Ai screen.tsx'><img src="/images/ai-icon.png" alt="AI" /></a>
        </Message>
        <Message isUser={false}>
          <img src="/images/user-avatar.png" alt="User" />
          <div>What inspired him?</div>
        </Message>
        <Message isUser={true}>
          <div>...</div>
          <img src="/images/ai-icon.png" alt="AI" />
        </Message>
      </ChatContainer>
      <InputContainer>
        <input type="text" placeholder="Type your message here..." />
        <button>
          <img src="/images/microphone.png" alt="Microphone" />
        </button>
      </InputContainer>
      <StyledLink href="/components/Ai2">
        <Button>Continue to AI Assistant</Button>
      </StyledLink>
    </Container>
  );
}

export default AiScreen;
