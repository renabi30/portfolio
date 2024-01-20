import './header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <span className="name"></span>
      </div>
      <div className="right-section">
        <NavLink style={({ isActive }) => {
            return {
                borderBottom: isActive ? "0.1em solid var(--text-color)" : "",
            };
        }} to={'/'}>Home</NavLink>
        <span></span>
        <NavLink style={({ isActive }) => {
            return {
                borderBottom: isActive ? "0.1em solid var(--text-color)" : "",
            };
        }} to={'/about'}>About</NavLink>
        <span></span>
        <button>
          <a href="" target = "_blank">Resume</a>
        </button>
      </div>
    </header>
  );
};

export default Header;