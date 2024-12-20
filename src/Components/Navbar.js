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

  // Determine screen width for conditional rendering
  const [isMobileView, setMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header className={`header ${isHeaderActive ? "active" : ""}`} data-header>
        <div className="container">
          <a href="#" className="logo">
            <img 
              src={Logo}
              alt="Infiedge Logo"
              className="logo-image"
              width="155"
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
              {["Home", "About", "Services", "Features", "Team", "Contact"].map(
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
              {/* Show "Let's Connect" in the navbar list only for mobile */}
              {isMobileView && (
                <li>
                  <a
                    href="https://wa.me/+917670875823?text=Let's%20Talk%20👋"
                    className="navbar-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#25D366', // WhatsApp green color for mobile
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '30px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      transition: 'background-color 0.3s',
                      marginTop: '235px', // Added margin to push it down
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#128C7E'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#25D366'}
                  >
                    <ion-icon name="logo-whatsapp" style={{ fontSize: '20px' }}></ion-icon>
                    Let's Connect
                  </a>
                </li>
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

          {/* Show "Let's Connect" outside navbar for desktop with the same style */}
          {!isMobileView && (
            <a
              href="https://wa.me/+917670875823?text=Let's%20Talk%20👋"
              className="btn-outline"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#25D366', // WhatsApp green color for desktop
                color: 'white',
                padding: '10px 20px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#128C7E'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#25D366'}
            >
              <ion-icon name="logo-whatsapp" style={{ fontSize: '20px' }}></ion-icon>
              Let's Connect
            </a>
          )}
          {isNavbarActive && (
            <div
              className="overlay"
              onClick={() => setNavbarActive(false)}
              aria-hidden="true"
            ></div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
