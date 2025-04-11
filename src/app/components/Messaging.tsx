"use client";

import React from "react";
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

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #0077b5;
  }

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const ChatProfiles = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #0077b5;
      margin-bottom: 5px;
    }

    span {
      font-size: 0.8rem;
      color: #333;
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 5px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  button {
    flex: 1;
    padding: 10px;
    font-size: 1rem;
    color: #0077b5;
    background-color: #fff;
    border: 2px solid #0077b5;
    border-radius: 20px;
    cursor: pointer;

    &.active {
      background-color: #0077b5;
      color: #fff;
    }
  }
`;

const ChatList = styled.div`
  width: 100%;
  max-width: 400px;

  div {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }

    div {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 1rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
      }

      p {
        font-size: 0.9rem;
        color: #666;
      }
    }
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

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

function Messaging() {
  return (
    <Container>
      <Header>
        <h1>Messaging</h1>
        <img src="/images/bell.png" alt="Notifications" />
      </Header>
      <ChatProfiles>
        <div>
          <img src="/images/profile1.png" alt="Profile 1" />
          <span>Rodney</span>
        </div>
        <div>
          <img src="/images/profile2.png" alt="Profile 2" />
          <span>Team</span>
        </div>
        <div>
          <img src="/images/profile3.png" alt="Profile 3" />
          <span>Group</span>
        </div>
      </ChatProfiles>
      <SearchBar>
        <input type="text" placeholder="Search for chats..." />
        <img src="/images/search-icon.png" alt="Search" />
      </SearchBar>
      <Tabs>
        <button className="active">All Chats</button>
        <button>Personal</button>
        <button>Groups</button>
      </Tabs>
      <ChatList>
        <div>
          <img src="/images/profile1.png" alt="Rodney Moyo" />
          <div>
            <h3>Rodney Moyo</h3>
            <p>Rodney is typing...</p>
          </div>
        </div>
        <div>
          <img src="/images/profile2.png" alt="Tech Project Team" />
          <div>
            <h3>Tech Project Team</h3>
            <p>Daniel is typing...</p>
          </div>
        </div>
      </ChatList>
      <Footer>
        <img src="/images/home.png" alt="Home" />
        <img src="/images/community.png" alt="Community" />
        <img src="/images/add.png" alt="Add" />
        <img src="/images/chat.png" alt="Chat" />
        <img src="/images/profile.png" alt="Profile" />
      </Footer>
    </Container>
  );
}

export default Messaging;
