import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import CirkleLogo from "./CirkleLogo";
import BackgroundContainer from "../BackgroundContainer";

function Layout() {
  return (
    <div className="layout">
      <BackgroundContainer />
      <nav className="navbar">
        <div className="logo-container">
          <CirkleLogo />
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/joinus">Join Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;