import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function GifList() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchGif();
  }, []);

  const fetchGif = () => {
    axios
      .get("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "Khl0CRBp6qvnFcYuUjNsbk9aTw45Iv8r",
        },
      })
      .then(({ data }) => {
        setGifs(data.data);
      });
  };

  const renderGif = () => {
    return gifs.map((gif) => {
      return (
        <div>
          <img src={gif.images.fixed_height.url} alt="" />
        </div>
      );
    });
  };
  //console.log(gifs);

  return (
    <>
      <SDiv>{renderGif()}</SDiv>
    </>
  );
}
