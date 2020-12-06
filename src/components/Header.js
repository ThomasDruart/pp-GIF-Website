import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ghost from "../images/ghost.png";

const SHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3vh;
`;

const SLogo = styled(Link)`
  display: flex;
  text-decoration: none;
  margin: 0 2vw;
`;

const SImg = styled.img`
  width: 3.5vw;
  height: 5vh;
  margin: 3vh 1vw;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SH1 = styled.h1`
  color: #e8e8e8;
  text-align: center;
  font-size: 1.6em;
  font-family: "Press Start 2P";
  margin: 2vh 0;
  border: solid 2px #e0e0e0;
  border-radius: 5px;
  padding: 0.5em;
`;

const SMenu = styled.div`
  font-family: "Press Start 2P";
  display: flex;
  flex-direction: row;
  margin: 3vh 0;
`;

const SLi = styled(Link)`
  margin: 0 2vw;
  font-size: 1.1em;
  text-decoration: none;
  color: #e8e8e8;
`;

export default function Header() {
  return (
    <SHeader>
      <SLogo to="/">
        <SImg src={ghost} alt="ghost" />
        <SH1>Oh My GIF !</SH1>
      </SLogo>
      <SMenu>
        <SLi to="/">Home</SLi>
        <SLi to="/trending">Trending</SLi>
      </SMenu>
    </SHeader>
  );
}
