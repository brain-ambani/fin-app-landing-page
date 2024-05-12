import FounderStats from "./FounderStats";
import BeforeFooter from "./sections/BeforeFooter";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Nav from "./sections/Nav";
import Slider from "./sections/Slider";

function App() {
  return (
    <div className="">
      <Nav />
      <Header />
      <Features />
      <Slider />
      <FounderStats />
      <Faq />
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default App;
