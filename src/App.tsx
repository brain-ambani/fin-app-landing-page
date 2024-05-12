import FounderStats from "./FounderStats";
import BeforeFooter from "./sections/BeforeFooter";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Nav from "./sections/Nav";
import Slider from "./sections/Slider";

function App() {
  return (
    <div className="">
      <Nav />
      <Header />
      <Features />
      <FounderStats />
      <Slider />
      <Faq />
      <BeforeFooter />
    </div>
  );
}

export default App;
