"use client";

import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #0077b5;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const UpdatesContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const UpdatesTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const UpdatesList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }

  span {
    font-size: 0.8rem;
    text-align: center;
    display: block;
    margin-top: 5px;
  }
`;

const MentorMatchContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #0077b5;
  color: #fff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
`;

const MentorMatchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MentorMatchTitle = styled.h2`
  font-size: 1.2rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;

const MentorMatchContent = styled.div`
  margin-top: 10px;

  p {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

const MentorsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const PostContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  h3 {
    font-size: 1rem;
    color: #333;
  }

  span {
    font-size: 0.8rem;
    color: #666;
  }
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    color: #666;
    cursor: pointer;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const FooterItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
  
  &:active {
    transform: scale(1.2);
  }

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 10px 0;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  background-color: #0077b5;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005a8c;
  }
`;

function Techconnect() {
  return (
    <Container>
      <Header>
        <Title>Tech Connect</Title>
        <IconContainer>
          <img src="/images/persona.jpeg" alt="User Avatar" />
          <img src="/images/bell.png" alt="Notifications" />
        </IconContainer>
      </Header>
      <UpdatesContainer>
        <UpdatesTitle>Recent Updates</UpdatesTitle>
        <UpdatesList>
          <div>
            <img src="/images/persona.jpeg" alt="Story 1" />
            <span>Add to Story</span>
          </div>
          <div>
            <img src="/images/pexels-henri-mathieu-8349428.jpg" alt="Story 2" />
            <span>HenryDev</span>
          </div>
          <div>
            <img src="/images/pexels-katerina-holmes-5905483.jpg" alt="Story 3" />
            <span>MaryAnn</span>
          </div>
        </UpdatesList>
      </UpdatesContainer>
      <MentorMatchContainer>
        <MentorMatchHeader>
          <MentorMatchTitle>Mentor Match</MentorMatchTitle>
          <CloseButton>X</CloseButton>
        </MentorMatchHeader>
        <MentorMatchContent>
          <p>Connect With A Mentor Today!</p>
          <div className="mentorsa">
            <img src="/images/afroamerican.jpg" alt="Mentor 1" />
            <img src="/images/redjeanjacket.jpg" alt="Mentor 2" />
            <img src="/images/redjacket.jpg" alt="Mentor 3" />
          </div>
        </MentorMatchContent>
      </MentorMatchContainer>
      <PostContainer>
        <PostHeader>
          <img src="/images/persona.jpeg" alt="HenryDev" />
          <div>
            <h3>HenryDev</h3>
            <span>20h ago</span>
          </div>
        </PostHeader>
        <PostContent>
          Had an exciting day presenting my new VR program at the Bulawayo
          International Fair.
        </PostContent>
        <PostImage src="/images/pexels-fauxels-3184360.jpg" alt="VR Presentation" />
        <PostActions>
          <span>
            <img src="/images/bell.png" alt="Like" /> 1.4k
          </span>
          <span>
            <img src="/images/bell.png" alt="Comment" /> 29
          </span>
          <span>
            <img src="/images/bell.png" alt="Share" /> 4
          </span>
        </PostActions>
      </PostContainer>
      <Footer>
        <FooterItem href="/home">
          <img src="/images/bell.png" alt="Home" />
        </FooterItem>
        <FooterItem href="/search">
          <img src="/images/bell.png" alt="Search" />
        </FooterItem>
        <FooterItem href="/Aiscreen">
          <img src="/images/chat.png" alt="Chat" />
        </FooterItem>
        <FooterItem href="/add">
          <img src="/images/bell.png" alt="Add" />
        </FooterItem>
        <FooterItem href="/profile">
          <img src="/images/bell.png" alt="Profile" />
        </FooterItem>
      </Footer>
      <StyledLink href="/components/Community">
        <Button>Next</Button>
      </StyledLink>
    </Container>
  );
}

export default Techconnect;
