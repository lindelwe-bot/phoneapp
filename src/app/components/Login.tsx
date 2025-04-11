"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: #333;
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

const ErrorContainer = styled.div`
  background-color: #ffebee;
  border: 1px solid #ffcdd2;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ErrorIcon = styled.span`
  color: #d32f2f;
  font-size: 1.2rem;
`;

const ErrorText = styled.p`
  color: #d32f2f;
  font-size: 0.9rem;
  margin: 0;
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  width: 100%;
  max-width: 400px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const RememberMeLabel = styled.label`
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const auth = getAuth();

  const getErrorMessage = (error: any) => {
    switch (error.code) {
      case "auth/invalid-email":
        return "Please enter a valid email address";
      case "auth/user-not-found":
        return "No account found with this email";
      case "auth/wrong-password":
        return "Incorrect password. Please try again";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later";
      case "auth/network-request-failed":
        return "Network error. Please check your connection";
      default:
        return "An error occurred. Please try again";
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      // Set persistence based on remember me option
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      router.push("/components/Events");
    } catch (error: any) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            type="email" 
            required 
            placeholder="Enter Email..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </Input>
        <Input>
          <span>🔒</span>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="********" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <ToggleButton onClick={togglePasswordVisibility} disabled={loading}>
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </ToggleButton>
        </Input>
        {error && (
          <ErrorContainer>
            <ErrorIcon>⚠️</ErrorIcon>
            <ErrorText>{error}</ErrorText>
          </ErrorContainer>
        )}
        <RememberMeContainer>
          <Checkbox
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            disabled={loading}
          />
          <RememberMeLabel htmlFor="rememberMe">Remember me</RememberMeLabel>
        </RememberMeContainer>
      </InputContainer>
      <StyledLink href="/components/Interest">
        <Button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </StyledLink>
      <Divider>Or Log In With</Divider>
      <SocialIcons>
        <img src="/images/ico-facebook.svg" alt="Facebook" />
        <img src="/images/google.png" alt="Google" />
        <img src="/images/apple.png" alt="Apple" />
      </SocialIcons>
      <Footer>
        Don't have an account? <Link href="/components/Interest">Sign up</Link>
      </Footer>
    </Container>
  );
}

export default Login;
