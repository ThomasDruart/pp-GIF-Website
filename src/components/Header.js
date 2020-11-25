import React from "react";
import styled from "styled-components";

const SHeader = styled.div`
  height: 10vh;
  background-color: #222b55;
  display: flex;
  justify-content: space-around;
`;

const SH1 = styled.h1`
  color: white;
  text-align: center;
  font-size: 1.3em;
  font-family: "Press Start 2P";
  margin: auto 0;
`;

const SMenu = styled.ul`
  font-family: "Press Start 2P";
  color: white;
  display: flex;
  flex-direction: row;
  margin: auto 0;
`;

const SLi = styled.li`
  margin: 0 1.5em;
`;

export default function Header() {
  return (
    <SHeader>
      <SH1>GIF Your Life</SH1>
      <SMenu>
        <SLi>Main</SLi>
        <SLi>Trending</SLi>
        <SLi>Gif Roulette</SLi>
      </SMenu>
    </SHeader>
  );
}
