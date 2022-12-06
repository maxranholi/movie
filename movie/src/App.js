import GlobalStyle from "./Globalstyled";
import Header from "../src/header/Header";
import HeroSection from "./heroSection.js/Herosection";
import Main from "./mainSection/Main";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <Main />
    </div>
  );
}

export default App;
