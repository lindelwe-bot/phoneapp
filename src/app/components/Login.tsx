"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  setPersistence, 
  browserLocalPersistence, 
  browserSessionPersistence,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "../firebase/config";

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

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const LoadingSpinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #0077b5;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

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
      case "auth/popup-closed-by-user":
        return "Sign in was cancelled";
      case "auth/account-exists-with-different-credential":
        return "An account already exists with this email";
      default:
        return "An error occurred. Please try again";
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/components/Events");
    } catch (error: any) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    setLoading(true);
    setError("");
    
    try {
      let authProvider;
      if (provider === 'google') {
        authProvider = new GoogleAuthProvider();
      } else {
        authProvider = new FacebookAuthProvider();
      }
      
      await signInWithPopup(auth, authProvider);
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
      
      {error && (
        <ErrorContainer>
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorText>{error}</ErrorText>
        </ErrorContainer>
      )}

      <InputContainer onSubmit={handleLogin}>
        <Input>
          <span>👤</span>
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
            type={showPassword ? "text" : "password"} 
            required 
            placeholder="Enter Password..." 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </Input>
        
        <RememberMeContainer>
          <Checkbox 
            type="checkbox" 
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <RememberMeLabel htmlFor="rememberMe">Remember me</RememberMeLabel>
        </RememberMeContainer>

        <Button type="submit" disabled={loading}>
          {loading ? <LoadingSpinner /> : "Login"}
        </Button>
      </InputContainer>

      <Divider>or continue with</Divider>

      <SocialIcons>
        <SocialButton onClick={() => handleSocialLogin('google')}>
          <img src="/images/google.png" alt="Google" />
          Google
        </SocialButton>
        <SocialButton onClick={() => handleSocialLogin('facebook')}>
          <img src="/images/facebook.png" alt="Facebook" />
          Facebook
        </SocialButton>
      </SocialIcons>

      <Footer>
        Don't have an account?{" "}
        <StyledLink href="/components/Sign1">Sign up</StyledLink>
      </Footer>
    </Container>
  );
}

export default Login;
