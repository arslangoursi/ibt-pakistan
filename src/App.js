import { useState, useLayoutEffect } from "react";
import "./App.css";
import ClickAwayListener from "react-click-away-listener";
import Logo from "./assets/logo.png";
import Header from "./assets/header.png";
import Pakmap from "./assets/pakmap.png";
import Aboutimg from "./assets/aboutimg.png";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isScroll, setIsScroll] = useState(false);

  function changeIsNavOpen() {
    if (window.innerWidth <= 945) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }

  useLayoutEffect(() => {
    changeIsNavOpen();
    window.addEventListener("resize", changeIsNavOpen);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
      changeIsNavOpen();
    });
  }, []);
  return (
    <div className="app">
      <div className="header__section">
        <img className="header__section__img" src={Header} alt="headerimage" />
        <div className="header__navbar">
          <div className="header__navbar__left"></div>
          <div
            className={
              isScroll
                ? "header__navbar__center header__navbar__center__active"
                : "header__navbar__center"
            }
          >
            <div className="header__logo">
              <img src={Logo} alt="logo" />
            </div>
            <div
              className="header__menu"
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
            >
              {isNavOpen ? <Y /> : <X />}
            </div>
            {isNavOpen ? (
              <ClickAwayListener
                onClickAway={() => {
                  if (window.innerWidth <= 945) {
                    setIsNavOpen(false);
                  }
                }}
              >
                <div className="header__entries">
                  <a href="#" className="header__entry">
                    Home
                  </a>
                  <a href="#" className="header__entry">
                    Components
                  </a>
                  <a href="#" className="header__entry">
                    Specifications
                  </a>
                  <a href="#" className="header__entry">
                    Features
                  </a>
                  <a href="#" className="header__entry">
                    Location
                  </a>
                </div>
              </ClickAwayListener>
            ) : null}
          </div>
          <div className="header__navbar__right"></div>
        </div>
        <div className="pak__map">
          <img src={Pakmap} alt="pakmap" />
        </div>
        <div className="header__text">
          <div className="header__heading">
            <span>IBT</span> Pakistan
          </div>
          <div className="header__subheading">
            Pakistan's Largest Business Tower
          </div>
        </div>
      </div>
      <div className="about__section">
        <div className="about__section__text">
          <div className="about__section__text__heading">INTRODUCTION</div>
          <div className="about__section__text__subtext">
            IBT is an industrial Mall , It will cater needs of all construction
            industry, Home furnitures and accessories and auto mobile industry
            Pakistan needs industrial mall for its economic growth It will be
            like mini china It will be like a trade centre IBT will create
            opportunities for Pakistani traders to buy Chinese, Korean, German
            and other International Products under one roof in international
            pavilion, While our national products will be displayed at national
            pavilion.
          </div>
        </div>
        <div className="about__section__img">
          <img src={Aboutimg} alt="aboutimg" />
        </div>
      </div>
    </div>
  );
}

export default App;
function X() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="21"
      viewBox="0 0 30 21"
    >
      <g
        id="Icon_feather-menu"
        data-name="Icon feather-menu"
        transform="translate(-3 -7.5)"
      >
        <path
          id="Path_21895"
          data-name="Path 21895"
          d="M4.5,18h27"
          fill="none"
          stroke="#bc993d"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Path_21896"
          data-name="Path 21896"
          d="M4.5,9h27"
          fill="none"
          stroke="#bc993d"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Path_21897"
          data-name="Path 21897"
          d="M4.5,27h27"
          fill="none"
          stroke="#bc993d"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </svg>
  );
}
function Y() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31.82"
      height="31.82"
      viewBox="0 0 31.82 31.82"
    >
      <path
        id="Icon_ionic-md-add"
        data-name="Icon ionic-md-add"
        d="M29.25,19.5H19.5v9.75h-3V19.5H6.75v-3H16.5V6.75h3V16.5h9.75Z"
        transform="translate(-9.546 15.91) rotate(-45)"
        fill="#bc993d"
      />
    </svg>
  );
}
