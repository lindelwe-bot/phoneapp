"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 300px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:first-child {
    background-color: #007AFF;
    color: white;
  }

  &:last-child {
    background-color: #F2F2F7;
    color: #007AFF;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default function Sign1() {
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();
    router.push("/components/Sign2");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/components/Login");
  };

  return (
    <Container>
      <Title>Tech Connect</Title>
      <ButtonContainer>
        <Button onClick={handleSignUp}>
          Sign Up
        </Button>
        <Button onClick={handleLogin}>
          Login
        </Button>
      </ButtonContainer>
    </Container>
  );
}
