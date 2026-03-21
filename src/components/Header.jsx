import logo2 from "../assets/logo2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo-box">
          <img src={logo2} alt="logo" />
          <div>
            <h2>Grad Aro Education</h2>
            <p className="tagline">From Local Dreams to Global Degree</p>
          </div>
        </div>

        <div className="header-right">
          <span className="badge">Education Fair 2026</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
