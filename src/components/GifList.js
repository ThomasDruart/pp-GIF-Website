import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SGifList = styled.div``;

const SDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SImg = styled.img`
  margin: 0.2em;
`;

export default function GifList() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchGif();
  }, []);

  const fetchGif = async () => {
    try {
      const { data } = await axios.get(
        "https://api.giphy.com/v1/gifs/trending",
        {
          params: {
            api_key: "Khl0CRBp6qvnFcYuUjNsbk9aTw45Iv8r",
            limit: 15,
          },
        }
      );
      setGifs(data.data);
    } catch (error) {
      return error;
    }
  };

  const renderGif = () => {
    return gifs.map((gif) => {
      return (
        <div>
          <SImg src={gif.images.fixed_height.url} alt="trendy gif" />
        </div>
      );
    });
  };
  //console.log(gifs);

  return (
    <SGifList>
      <SDiv>{renderGif()}</SDiv>
    </SGifList>
  );
}
