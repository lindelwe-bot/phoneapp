"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

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

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0077b5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function Sign2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    if (!name.trim()) {
      setError("Please enter your full name");
      return false;
    }
    if (!email.trim()) {
      setError("Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        createdAt: new Date().toISOString(),
      });

      router.push("/components/Interest");
    } catch (error) {
      console.error("Error signing up:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("Email is already in use");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak");
      } else {
        setError("An error occurred during sign up");
      }
    } finally {
      setLoading(false);
    }
  };

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
          <input 
            type="text" 
            required 
            placeholder="Enter Full Name..." 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Input>
        <Input>
          <span>📧</span>
          <input 
            type="email" 
            required 
            placeholder="Enter Email..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Input>
        <Input>
          <span>🔒</span>
          <input 
            type="password" 
            required 
            placeholder="Enter Password..." 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input>
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button onClick={handleSignUp} disabled={loading}>
        {loading ? "Signing Up..." : "Sign Up"}
      </Button>
      <Divider>Or Sign Up With</Divider>
      <SocialIcons>
        <img src="/images/facebook.png" alt="Facebook" />
        <img src="/images/google.png" alt="Google" />
        <img src="/images/apple.png" alt="Apple" />
      </SocialIcons>
      <Footer>
        Already have an account? <a href="/components/Login">Login</a>
      </Footer>
      {loading && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
    </Container>
  );
}

export default Sign2;
