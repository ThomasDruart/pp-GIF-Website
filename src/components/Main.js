import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SDiv = styled.div`
  height: 80vh;
  text-align: center;
  background-color: #e0e0e0;
`;

export default function Main() {
  const [gif, setGif] = useState([]);

  useEffect(() => {
    fetchGif();
  }, []);

  const fetchGif = async () => {
    try {
      const { data } = await axios.get("https://api.giphy.com/v1/gifs/random", {
        params: {
          api_key: "Khl0CRBp6qvnFcYuUjNsbk9aTw45Iv8r",
          tag: "dog",
        },
      });
      setGif(data.data);
    } catch (error) {
      return error;
    }
  };

  return (
    <SDiv>
      <h1>Gif Roulette</h1>
      <button onClick={fetchGif}>Another One</button>
      <img src={gif.image_original_url} alt="random gif" />
    </SDiv>
  );
}
