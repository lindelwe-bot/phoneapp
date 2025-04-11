"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
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

const CategoriesContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CategoryButton = styled.button`
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
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  background-color: #0077b5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005a8c;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Interest() {
  return (
    <Container>
      <Header>
        <ToggleButton>🌙</ToggleButton>
      </Header>
      <Title>Interests</Title>
      <Description>
        Enter your tech passions so you can get the most of our app
      </Description>
      <InputContainer>
        <span>📍</span>
        <input type="text" placeholder="Enter Location..." />
        <button>▼</button>
      </InputContainer>
      <CategoriesContainer>
        <CategoryTitle>Popular Categories</CategoryTitle>
        <CategoryList>
          <CategoryButton>Software Dev</CategoryButton>
          <CategoryButton>Data Science</CategoryButton>
          <CategoryButton>Web Developer</CategoryButton>
          <CategoryButton>Cyber-Security</CategoryButton>
          <CategoryButton>UX/UI Design</CategoryButton>
          <CategoryButton>Systems Admin</CategoryButton>
        </CategoryList>
      </CategoriesContainer>
      <CategoriesContainer>
        <CategoryTitle>Featured Categories</CategoryTitle>
        <CategoryList>
          <CategoryButton>Digital Marketing</CategoryButton>
          <CategoryButton>AI Research</CategoryButton>
          <CategoryButton>Game Developer</CategoryButton>
          <CategoryButton>AI Engineering</CategoryButton>
          <CategoryButton>Graphic Design</CategoryButton>
          <CategoryButton>App Dev</CategoryButton>
          <CategoryButton>Logo Design</CategoryButton>
          <CategoryButton>Back-end Dev</CategoryButton>
        </CategoryList>
      </CategoriesContainer>
      <StyledLink href="/components/Techconnect">
        <Button>Get Started</Button>
      </StyledLink>
    </Container>
  );
}

export default Interest;
