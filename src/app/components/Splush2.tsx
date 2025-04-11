"use client"
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
  background-color: #f9f9f9;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Content = styled.div`
  text-align: center;
  margin-top: 20px;
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
  margin-bottom: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 8px;
`;

const Dot = styled.div<{ $active?: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${props => props.$active ? '#0077B5' : '#ddd'};
  border-radius: 50%;
  margin: 0 5px;
  transition: background-color 0.3s ease;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #0077B5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f8d;
  }
`;

function Splush2() {
  return (
    <Container>
      <ImageContainer>
        <StyledImage src="/images/mentorship.jpg" alt="Mentorship" />
      </ImageContainer>
      <Content>
        <Title>Mentorship. Growth. Connection.</Title>
        <Description>
          Tech Connect empowers growth through mentorship, connecting tech professionals with experienced mentors to foster development and collaboration in a thriving community.
        </Description>
      </Content>
      <Pagination>
        <Dot $active={false} />
        <Dot $active={true} />
        <Dot $active={false} />
      </Pagination>
      <StyledLink href="/components/Splush3">
        <Button>Get Started</Button>
      </StyledLink>
    </Container>
  );
}

export default Splush2;
