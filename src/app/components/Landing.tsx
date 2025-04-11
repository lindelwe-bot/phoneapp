"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0077b5;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
`;

function Landing() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => { 
      router.replace("/components/Splush1"); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <LandingContainer>
      <Title>Tech Connect</Title>
      <Image src="/images/bulb.png" alt="Light Bulb" />
    </LandingContainer>
  );
}

export default Landing;
