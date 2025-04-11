"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

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

const IconContainer = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export default function Sign1() {
  return (
    <Container>
      <Title>Tech Connect</Title>
      <ButtonContainer>
        <StyledLink href="/components/Interest">
          <Button>
            Sign Up
          </Button>
        </StyledLink>
        <StyledLink href="/components/Login">
          <Button>
            Login
          </Button>
        </StyledLink>
      </ButtonContainer>
    </Container>
  );
}
