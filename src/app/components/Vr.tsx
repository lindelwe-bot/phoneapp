"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  min-height: 100vh;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
`;

const EventImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }
`;

const EventDetails = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: -20px;
  padding: 20px;
  z-index: 1;
`;

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h1 {
    font-size: 1.5rem;
    color: #333;
  }

  span {
    font-size: 0.9rem;
    color: #0077b5;
    background-color: #e6f7ff;
    padding: 5px 10px;
    border-radius: 20px;
  }
`;

const NetworkInfo = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
  }

  a {
    font-size: 0.9rem;
    color: #0077b5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  p {
    font-size: 1rem;
    color: #333;
  }

  span {
    font-size: 0.9rem;
    color: #666;
  }
`;

const ConfirmButton = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #0077b5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #005f8d;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
  margin-top: 20px;

  &:hover {
    background-color: #005f8d;
  }
`;

function VR() {
  return (
    <Container>
      <ImageContainer>
        <EventImage src="/images/Tech Connect Pictures/download (23).jpeg" alt="VR Update Launch" />
        <FavoriteButton>
          <img src="/images/heart.png" alt="Favorite" />
        </FavoriteButton>
      </ImageContainer>
      <EventDetails>
        <EventHeader>
          <h1>VR Update Launch</h1>
          <span>Free Entry</span>
        </EventHeader>
        <NetworkInfo>
          5+ People in Your Network Joined
          <div>
            <img src="techconnect/public/images/Tech Connect Pictures/stylish-afroamerican-lady-studio-shot.jpg" alt="Person 1" />
            <img src="techconnect/public/images/Tech Connect Pictures/pexels-pixabay-262012.jpg" alt="Person 2" />
            <img src="techconnect/public/images/Tech Connect Pictures/pexels-pixabay-262012.jpg" alt="Person 3" />
            <a href="#">View All</a>
          </div>
        </NetworkInfo>
        <InfoRow>
          <img src="/images/location.png" alt="Location" />
          <p>Bulawayo</p>
        </InfoRow>
        <InfoRow>
          <img src="/images/calendar.png" alt="Date" />
          <p>
            Zimbabwe International Trade Fair
            <br />
            <span>April 21-22 2025 | 10:00 - 16:00</span>
          </p>
        </InfoRow>
      </EventDetails>
      <StyledLink href="/components/Mentor">
        <Button>Find a Mentor</Button>
      </StyledLink>
      <ConfirmButton>Confirm Attendance</ConfirmButton>
    </Container>
  );
}

export default VR;
