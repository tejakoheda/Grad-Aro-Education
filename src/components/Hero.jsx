import hero2 from "../assets/hero2.jpeg";

const Hero = () => (
  <section className="hero">
    <div className="container hero-inner">
      <div className="hero-left animate">
        <h1>Study Abroad Mega Education Fair 2026</h1>

        <p>
          <strong>Hosted by Grad Aro Education</strong>
        </p>

        <p>
          Get ready to meet representatives from top universities across
          Australia, Canada, the USA, the UK, Ireland, and New Zealand — all
          under one roof!
        </p>

        <p>
          Take your first step toward your dream international education with
          expert guidance from Grad Aro Education.
        </p>
      </div>

      <div className="hero-right animate">
        <img src={hero2} alt="students" />
      </div>
    </div>
  </section>
);

export default Hero;
