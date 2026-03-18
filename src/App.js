import React, { useEffect } from "react";
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
  useEffect(() => {
    // Intersection Observer to trigger animations when elements enter viewport
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
