"use client";

import React, { useState, useEffect } from "react";
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
  background-color: white;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 400px;
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 400px;
  margin-bottom: 30px;
`;

const Card = styled.div<CardProps>`
  width: 280px;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  transform: ${(props) => `rotate(${props.angle}deg) translateX(${props.angle * 2}px)`};
  overflow: hidden;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: ${(props) => `rotate(${props.angle}deg) translateX(${props.angle * 2}px) scale(1.02)`};
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    background-color: transparent;
    padding: 5px 10px;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
`;

interface DotProps {
  $isActive: boolean;
  $dotSize: 'large' | 'medium' | 'small';
}

const Dot = styled.div<DotProps>`
  width: ${props => {
    switch(props.$dotSize) {
      case 'large': return '12px';
      case 'medium': return '10px';
      case 'small': return '8px';
    }
  }};
  height: ${props => {
    switch(props.$dotSize) {
      case 'large': return '12px';
      case 'medium': return '10px';
      case 'small': return '8px';
    }
  }};
  background-color: ${props => props.$isActive ? '#333' : '#ddd'};
  border-radius: 50%;
  transition: all 0.3s ease;
  transform: ${props => props.$isActive ? 'scale(1.2)' : 'scale(1)'};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: center;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;
  padding: 0;
  margin: 0;
  line-height: 1;

  &:hover {
    color: #666;
  }
`;

function Loading() {
  const [activeDot, setActiveDot] = useState(0);
  const totalDots = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % totalDots);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const getDotSize = (index: number): 'large' | 'medium' | 'small' => {
    if (index === 0) return 'large';
    if (index === 1) return 'medium';
    return 'small';
  };

  return (
    <Container>
      <Header>
        <StyledLink href="/components/Splush3">
          <BackButton>←</BackButton>
        </StyledLink>
      </Header>
      <CardContainer>
        <Card angle={-5}>
          <img src="/images/redjeanjacket.jpg" alt="Mentor 1" />
        </Card>
        <Card angle={5}>
          <img src="/images/redjacket.jpg" alt="Mentor 2" />
        </Card>
      </CardContainer>
      <StatsContainer>
        <span>430</span>
        <span>487</span>
      </StatsContainer>
      <Pagination>
        {[...Array(totalDots)].map((_, index) => (
          <Dot 
            key={index} 
            $isActive={index === activeDot}
            $dotSize={getDotSize(index)}
          />
        ))}
      </Pagination>
      <StyledLink href="/components/Mentors">
        <Title>Finding A Mentor</Title>
      </StyledLink>
    </Container>
  );
}

export default Loading;
