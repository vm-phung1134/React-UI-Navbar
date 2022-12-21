import "./NavbarStyle.css";
import { useState } from "react";
function Navbar() {
  const [state, setState] = useState("fas fa-bars");
  const [stateNav, setStateNav] = useState("navbar");
  const [stateDrop, setStateDrop] = useState("dropdown-content active");
  const menus = [
    { name: "Home", link: "index.html" },
    { name: "Product", link: "index.html" },
    { name: "About", link: "about.html" },
    { name: "Service", link: "service.html" },
  ];
  return (
    <>
      <nav>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          width="150px"
        />
        <div>
          <ul className={stateNav}>
            {menus.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
            <li>
              <button className="signIn">
                <i className="fas fa-user"></i> Sign In
              </button>
            </li>
          </ul>
        </div>
        <div className="searchForm">
          <input className="searchInput" placeholder="Search..." />
          <i className="searchIcon fas fa-search"></i>
        </div>
        <div className="burget">
          <i
            className={state}
            onClick={() => {
              setState(
                state === "fas fa-bars" ? "fas fa-times" : "fas fa-bars"
              );
              setStateNav(stateNav === "navbar" ? "navbar active" : "navbar");
            }}
          ></i>
        </div>
        <div className="dropdown">
          <div
            className="dropdown-icon"
            onClick={() => {
              setStateDrop(
                stateDrop === "dropdown-content active"
                  ? "dropdown-content"
                  : "dropdown-content active"
              );
            }}
          >
            <i className="fas fa-gear"></i>
            <p>Settings</p>
          </div>
          <div className={stateDrop}>
            <a>
              Dark Mode
              <button className="toggle-btn">On</button>
            </a>
            <a>
              Language <button className="toggle-btn">English</button>
            </a>
            <a>Help</a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
