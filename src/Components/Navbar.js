import React, { useState, useEffect } from "react";
import Logo from './assets/images/logo_final4.png';


const Navbar = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isHeaderActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`header ${isHeaderActive ? "active" : ""}`} data-header>
        <div className="container">
          {/* Use your logo image here */}
          <a href="#" className="logo">
            <img 
              src={Logo} // Replace with the path to your logo image
              alt="Infiedge Logo" 
              className="logo-image" 
              width="155" // Adjust as needed
              height="auto" 
            />
          </a>

          <nav className={`navbar ${isNavbarActive ? "active" : ""}`} data-navbar>
            <div className="wrapper">
              <a href="#" className="logo">
                <img 
                  src={Logo}
                  alt="Infiedge Logo" 
                  className="logo-image" 
                  width="125" 
                  height="auto" 
                />
              </a>
              <button
                className="nav-close-btn"
                aria-label="close menu"
                onClick={() => setNavbarActive(!isNavbarActive)}
              >
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
            <ul className="navbar-list">
              {["Home", "About", "Services", "Features","Team", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="navbar-link"
                      onClick={() => setNavbarActive(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          <button
            className="nav-open-btn"
            aria-label="open menu"
            onClick={() => setNavbarActive(!isNavbarActive)}
          >
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
          <a
            href="https://wa.me/+917670875823?text=Let's%20Talk%20👋"
            className="btn-outline"
          >
            Let's Connect <i class="fa fa-whatsapp"></i>

          </a>
          {isNavbarActive && (
            <div className="overlay" onClick={() => setNavbarActive(false)} aria-hidden="true"></div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
