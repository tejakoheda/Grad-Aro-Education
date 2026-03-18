import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo-box">
          <img src={logo} alt="logo" />
          <div>
            <h2>Grad Aro Education</h2>
            <p className="tagline">Aim Higher. Study Worldwide.</p>
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
