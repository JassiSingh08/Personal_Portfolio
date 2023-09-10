import React from "react";

const Nav = ({isNavOpen}) => {

  return (
    <>
    <div className={`side-nav-bar ${isNavOpen ? "close" : ""}`}>
      <div className="header">
        <div className="image-text">
          <span className="image">{/*<img src="logo.png" alt="">*/}</span>
          <div className="text logo-text">
            <span className="name">JASSI SINGH</span>
          </div>
        </div>
      </div>
      <div className="side-nav-menu-bar">
        <div className="side-nav-menu">
          <ul className="side-nav-menu-links">
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-side-nav-home-alt icon" />
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bar-chart-alt-2 icon" />
                <span className="text nav-text">Revenue</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bell icon" />
                <span className="text nav-text">Notifications</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-pie-chart-alt icon" />
                <span className="text nav-text">Analytics</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-heart icon" />
                <span className="text nav-text">Likes</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-wallet icon" />
                <span className="text nav-text">Wallets</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Nav;
