import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <nav>
        <Link to="/" className={String(location.pathname === "/") && "change"}>
          Home
        </Link>
        <Link to="/l">Launches</Link>
        <Link to="/v">Vehicles</Link>
        <Link to="/r">Roadster</Link>
        <Link to="/a">About</Link>
      </nav>
    </>
  );
};

export default NavBar;
