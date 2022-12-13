import GlobalStyle from "./Globalstyled";
import Header from "../src/header/Header";
import HeroSection from "./heroSection.js/Herosection";
import Main from "./mainSection/Main";
import Router from "./routes/Routes";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
