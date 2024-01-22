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
                borderBottom: isActive ? "0.2em solid var(--text-color)" : "",
            };
        }} to={'/'}>Home</NavLink>
        <span></span>
        <NavLink style={({ isActive }) => {
            return {
                borderBottom: isActive ? "0.2em solid var(--text-color)" : "",
            };
        }} to={'/about'}>About</NavLink>
        <span></span>
      </div>
    </header>
  );
};

export default Header;