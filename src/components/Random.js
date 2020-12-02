import React from "react";
import styled from "styled-components";

const SDiv = styled.div`
  height: 80vh;
  text-align: center;
  background-color: #5896df;
`;

const SH1 = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

export default function Random() {
  return (
    <SDiv>
      <SH1>Awesome things coming soon !</SH1>
      <iframe
        src="https://giphy.com/embed/3o72FkiKGMGauydfyg"
        width="480"
        height="363"
        frameBorder="0"
      ></iframe>
    </SDiv>
  );
}
