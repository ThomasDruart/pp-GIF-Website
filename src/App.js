import { Reset } from "styled-reset";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";
import GifList from "./components/GifList";
import Footer from "./components/Footer";

const SDiv = styled.div`
  background-color: #222831;
  min-height: 100vh;
`;

function App() {
  return (
    <SDiv>
      <Reset />
      <Header />

      <Switch>
        <Route path="/trending" component={GifList} />
        <Route exact path="/" component={Main} />
      </Switch>

      <Footer />
    </SDiv>
  );
}

export default App;
