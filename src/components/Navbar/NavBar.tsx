import React, { useState, useRef } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

interface listOfNav
{
  path:string,
  name:string
}

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
  const handleOutsideClick= () =>{
    if(open) handleClick();
  }
  const listOfNav: listOfNav[] = [
    { path: "/", name: "Home" },
    {path:"/launches" , name:"Launches"},
    { path: "/vehicles", name: "Vehicles" },
    // { path: "/roadster", name: "Roadster" },
    { path: "/about", name: "About" },
  ];
  return (
    <>
      <div className={open ? "overlay" : ""} onClick={handleOutsideClick}></div>
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

        {listOfNav.map((x) => (
          <Link
            to={x.path}
            className={location.pathname === x.path ? "change" : " "}
            onClick={handleClick}
          >
            {x.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
