import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <span className="name">Rena Bi</span>
      </div>
      <div className="right-section">
        <a href="/">Home</a>
        <span></span>
        <a href="#about">About</a>
        <span></span>
        <button>Resume</button>
      </div>
    </div>
  );
};

export default Header;