"use client"
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
  background-color: #ffffff;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

const Content = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const Pagination = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

const Dot = styled.div<{ $active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#0077b5' : '#ddd'};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  padding: 12px 24px;
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

export default function Splush1() {
  return (
    <Container>
      <ImageContainer>
        <StyledImage 
          src="/images/splush1.jpeg" 
          alt="Welcome to TechConnect" 
          width={500}
          height={300}
          priority
        />
      </ImageContainer>
      <Content>
        <Title>Welcome to TechConnect</Title>
        <Description>
          Connect with experienced tech mentors and accelerate your learning journey.
          Start your path to success today!
        </Description>
        <Pagination>
          <Dot $active={true} />
          <Dot $active={false} />
          <Dot $active={false} />
        </Pagination>
        <StyledLink href="/components/Sign1">
          <Button>Get Started</Button>
        </StyledLink>
      </Content>
    </Container>
  );
}
