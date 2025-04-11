"use client";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: #333;
  background-color: #e6e6e6;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 50px;
  height: auto;
  margin-bottom: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  background-color: #e6e6e6;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  color: #666;

  input {
    flex: 1;
    border: none;
    background: none;
    outline: none;
    font-size: 1rem;
    color: #333;
    margin-left: 10px;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 400px;
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

const Divider = styled.p`
  margin: 20px 0;
  font-size: 1rem;
  color: #666;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const Footer = styled.p`
  font-size: 1rem;
  color: #333;

  a {
    color: #0077b5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Sign2() {
  return (
    <Container>
      <Header>
        <ToggleButton>🌙</ToggleButton>
      </Header>
      <Title>Tech Connect</Title>
      <Icon src="/images/bulb.png" alt="Light Bulb Icon" />
      <InputContainer>
        <Input>
          <span>👤</span>
          <input type="text" required placeholder="Enter Full Name..." />
        </Input>
        <Input>
          <span>📧</span>
          <input type="email" required placeholder="Enter Email..." />
        </Input>
        <Input>
          <span>🔒</span>
          <input type="password" required placeholder="Enter Password..." />
        </Input>
      </InputContainer>
      <Button>Sign Up</Button>
      <Divider>Or Sign Up With</Divider>
      <SocialIcons>
        <img src="/images/facebook.png" alt="Facebook" />
        <img src="/images/google.png" alt="Google" />
        <img src="/images/apple.png" alt="Apple" />
      </SocialIcons>
      <Footer>
        Already have an account? <a href="/login">Login</a>
      </Footer>
    </Container>
  );
}

export default Sign2;
