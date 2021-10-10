import React, { useState, useRef } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  let toggleClassInNav = useRef<HTMLElement>(null);
  let toggleClassInHam = useRef<HTMLButtonElement>(null);
  const handleClick =()=>{
    setOpen((state)=> !state);
    toggleClassInNav.current?.classList.toggle("openNav");
    toggleClassInHam.current?.classList.toggle("is-active");
  }
  return (
    <>
      <div className={open ? "overlay" : ""}></div>
      <nav ref={toggleClassInNav}>
        <button
          className="hamburger hamburger--slider"
          type="button"
          onClick={handleClick}
          ref={toggleClassInHam}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 70 70"
          fill="none"
          className="hamburger"
          onClick={handleClick}
        >
          <rect width="70" height="70" rx="35" fill="#006FB8" />
          <path d="M17 15H52V21H17V15Z" fill="white" />
          <rect x="17" y="32" width="35" height="6" fill="white" />
          <rect x="17" y="49" width="35" height="6" fill="white" />
        </svg> */}
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
