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

  & > input {
    text-align: center;
    outline: none;
    border-radius: 5px;
    padding: 0.5vh 0.5vw;
    border: 0;
  }
  & > button {
    margin: 2vh 0;
    border: none;
    outline: none;
    padding: 1vh 1.5vw;
    background: #22CB8A;
    color: #fff;
    box-shadow: 1px 1px 1px black;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background : #21B47C;
    }
   &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
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
  const [search, setSearch] = useState("Puppy");

  useEffect(() => {
    fetchGif();
  }, []);

  const fetchGif = async () => {
    try {
      const { data } = await axios.get("https://api.giphy.com/v1/gifs/random", {
        params: {
          api_key: "Khl0CRBp6qvnFcYuUjNsbk9aTw45Iv8r",
          tag: search,
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
        <input
          type="text"
          placeholder={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button onClick={fetchGif}>I Feel Lucky</button>
        <img src={gif.image_original_url} alt="random gif" />
      </SRandom>
    </SDiv>
  );
}
