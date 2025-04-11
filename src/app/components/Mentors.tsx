"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface CardProps {
  angle: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
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
    padding-bottom:80rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 200px;
  margin-bottom: 20px;
`;

const Card = styled.div<CardProps>`
  width: 150px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  transform: rotate(${(props) => props.angle}deg);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #0077b5;
    background-color: #e6f7ff;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;

  div {
    width: 10px;
    height: 10px;
    background-color: #0077b5;
    border-radius: 50%;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Loading() {
  return (
    <Container>
      <Header>
        <button>←</button>
      </Header>
      <CardContainer>
        <Card angle={-10}>
          <img src="techconnect/public/images/redjacket.jpg" alt="Mentor 1" />
        </Card>
        <Card angle={10}>
          <img src="techconnect/public/images/redjeanjacket.jpg" alt="Mentor 2" />
        </Card>
      </CardContainer>
    
      <Pagination>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Pagination>
      <Title>Finding A Mentor</Title>
    </Container>
  );
}

export default Loading;
