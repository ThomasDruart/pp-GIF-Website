import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SDiv = styled.div`
  text-align: center;
`;

const SRandom = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;

  & > h2 {
    color : #e8e8e8;
    margin-bottom: 2vh; 
  }

  & > button {
    margin-bottom: 2vh;
    }
  }
  & > img {
    max-width: 90vw;
    border: 0.5em solid #e8e8e8;
    border-bottom: 3em solid #e8e8e8;
    box-shadow: 1px 1px 12px #555;

  }
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
      <SRandom>
        <h2>Dogs</h2>
        <button onClick={fetchGif}>Another One</button>
        <img src={gif.image_original_url} alt="random gif" />
      </SRandom>
    </SDiv>
  );
}
