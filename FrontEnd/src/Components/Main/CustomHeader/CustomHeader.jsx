import { useState } from "react";
import "./CustomHeader.css";
import logo from "../../../imgs/gallery/shopius.PNG";
import searchIcon from "../../../imgs/gallery/search.png"
import cartIcon from "../../../imgs/gallery/shopping-cart.png"
import userIcon from "../../../imgs/gallery/user.png"
import { NavLink } from "react-router";

const CustomHeader = (props) => {
  const [open, setOpen] = useState(true);
  const [bar2, setBar2] = useState("container");
  const [dropopen, setDropopen] = useState("dropdownclosed");

  const clickedOption = () => {
    setBar2("container");
    window.scrollTo({ top: 0, behavior: "smooth" });
    props.actions("home");
    setDropopen("dropdownclosed");
    setOpen(true);
  };

  const clickedOption2 = () => {
    props.actions("home");
    window.scrollTo({ top: 1250, behavior: "smooth" });
    setDropopen("dropdownclosed");
    setBar2("container");
    setOpen(true);
  };

  const clickedOption3 = () => {
    props.actions("home");
    window.scrollTo({ top: 3280, behavior: "smooth" });
    setDropopen("dropdownclosed");
    setBar2("container");
    setOpen(true);
  };

  const clickedOption3__alt = () => {
    props.actions("home");
    window.scrollTo({ top: 2600, behavior: "smooth" });
    setDropopen("dropdownclosed");
    setBar2("container");
    setOpen(true);
  };

  const myFunction = () => {
    !open ? setOpen(true) : setOpen(false);
    open ? setBar2("container change") : setBar2("container");
    open ? setDropopen("nav-bar-dropdown") : setDropopen("dropdownclosed");
  };

  return (
    <header className="App-header">
      <div className="logo-div">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="logo-name">Shopius</h1>
      </div>
      <div className="nav-bar">
        <NavLink to="/" onClick={clickedOption} className="navbar-option">
          Inicio
        </NavLink>
        <a onClick={clickedOption2} className="navbar-option">
          Productos
        </a>
        <a onClick={clickedOption3__alt} className="navbar-option">
          Servicios
        </a>
        <a onClick={clickedOption3__alt} className="navbar-option">
          Nosotros
        </a>
      </div>
      <div className="nav-bar-compl">
        <NavLink to="/" onClick={clickedOption} className="navbar-option">
          <img src={searchIcon} className="ui-icons" alt="search icon"/>
        </NavLink>
        <a onClick={clickedOption2} className="navbar-option">
            <img src={cartIcon} className="ui-icons" alt="cart icon"/>
        </a>
        <a onClick={clickedOption3__alt} className="navbar-option">
        <img src={userIcon} className="ui-icons" alt="user icon"/>
        </a>
      </div>
      <div className={bar2} onClick={myFunction}>
        <div className="change bar1"></div>
        <div className="change bar2"></div>
        <div className="change bar3"></div>
      </div>
      <div className={dropopen}>
        <NavLink to="/" className="dropdown-option">
          Inicio
        </NavLink>
        <a onClick={clickedOption2} className="dropdown-option">
          Nosotros
        </a>
        <a onClick={clickedOption3} className="dropdown-option">
          Visítanos
        </a>
      </div>
    </header>
  );
};

export default CustomHeader;
