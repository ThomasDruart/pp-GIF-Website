import React from "react";
import styled from "styled-components";

const SHeader = styled.div`
  height: 10vh;
  background-color: #222b55;
`;

const SH1 = styled.h1`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 1.3em;
  font-family: "Press Start 2P";
  padding-top: 1em;
`;

export default function Header() {
  return (
    <SHeader>
      <SH1>Have fun with GIFs</SH1>
    </SHeader>
  );
}
