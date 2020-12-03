import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ghost from "../images/ghost.png";

const SHeader = styled.div`
  height: 10vh;
  background-color: #384b9c;
  display: flex;
  justify-content: space-around;
`;

const SLogo = styled(Link)`
  display: flex;
  text-decoration: none;
`;

const SImg = styled.img`
  width: 3em;
  height: 3em;
  margin: auto 1em auto 0;
`;

const SH1 = styled.h1`
  color: #e0e0e0;
  text-align: center;
  font-size: 1.3em;
  font-family: "Press Start 2P";
  margin: auto 0;
  border: solid 2px #e0e0e0;
  border-radius: 5px;
  padding: 0.5em;
`;

const SMenu = styled.div`
  font-family: "Press Start 2P";
  display: flex;
  flex-direction: row;
  margin: auto 0;
`;

const SLi = styled(Link)`
  margin: 0 1.5em;
  text-decoration: none;
  color: #e0e0e0;
`;

export default function Header() {
  return (
    <SHeader>
      <SLogo to="/">
        <SImg src={ghost} alt="ghost" />
        <SH1>Oh My GIF !</SH1>
      </SLogo>
      <SMenu>
        <SLi to="/">Main</SLi>
        <SLi to="/trending">Trending</SLi>
      </SMenu>
    </SHeader>
  );
}
