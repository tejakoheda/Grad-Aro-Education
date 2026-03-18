import "./styles/main.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import WhyAbroad from "./components/WhyAbroad";
import Destinations from "./components/Destinations";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Enable scroll animations

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <WhyAbroad />
        <Destinations />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
