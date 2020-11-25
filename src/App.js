import { Reset } from "styled-reset";

import Header from "./components/Header";
import GifList from "./components/GifList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <GifList />
      <Footer />
    </div>
  );
}

export default App;

/*

TO DO : 
Fix Each child key // Switch to axios async

Composant : no result found + img/gif
Composants : gif / gif list (map) / no gif
Catch Error with popup (react tostify)

Style général ?

*/
