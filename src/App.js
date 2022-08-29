import { useState, useLayoutEffect } from "react";
import "./App.css";
import ClickAwayListener from "react-click-away-listener";
import Card from "./components/componentCard";
import SpecificationCard from "./components/specificationcard";
import Logo from "./assets/logo.png";
import Header from "./assets/header.png";
import Pakmap from "./assets/pakmap.png";
import Aboutimg from "./assets/aboutimg.png";
import Component1 from "./assets/component1.png";
import Component2 from "./assets/component2.png";
import Component3 from "./assets/component3.png";
import Component4 from "./assets/component4.png";

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
      <div className="components__section">
        <div className="components__background">
          <span className="components__border"></span>
        </div>
        <div className="components__section__info">
          <div className="about__section__text__heading">
            PROJECT COMPONENTS
          </div>
          <div className="components__section__cards">
            <Card
              img={Component1}
              label="One dedicated tower for most 
Luxurious Apartments "
            />
            <Card img={Component2} label="Industrial Mall" />
            <Card img={Component3} label="One Five Star Hotel" />
            <Card
              img={Component4}
              label="Dedicated corporate 
and IT Centre"
            />
          </div>
        </div>
      </div>
      <div className="specification__section">
        <div className="specification__section__info">
          <div className="specification__section__left">
            <div className="specification__section__left__upper">
              <SpecificationCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72.167"
                    height="72.165"
                    viewBox="0 0 72.167 72.165"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_794"
                          data-name="Rectangle 794"
                          width="72.167"
                          height="72.165"
                          fill="none"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_1965"
                      data-name="Group 1965"
                      transform="translate(-284.97 -2249)"
                    >
                      <g
                        id="Group_311"
                        data-name="Group 311"
                        transform="translate(284.97 2249)"
                        clip-path="url(#clip-path)"
                      >
                        <path
                          id="Path_41"
                          data-name="Path 41"
                          d="M36.077,0Q47.124,0,58.17,0a13.825,13.825,0,0,1,13.982,13.92q.02,22.169.005,44.338a13.743,13.743,0,0,1-13.936,13.9q-22.131.017-44.263,0A13.753,13.753,0,0,1,.007,58.2q-.013-22.131,0-44.263A13.753,13.753,0,0,1,13.982,0Q25.029-.008,36.077,0M67.352,36.156q0-10.972,0-21.945a8.974,8.974,0,0,0-9.4-9.4H14.215a8.977,8.977,0,0,0-9.4,9.4q0,21.87,0,43.739a8.979,8.979,0,0,0,9.4,9.4q21.87,0,43.739,0a8.979,8.979,0,0,0,9.4-9.4q0-10.9,0-21.794"
                          transform="translate(0 0)"
                        />
                        <path
                          id="Path_42"
                          data-name="Path 42"
                          d="M64.7,68.356c0,2.842.011,5.744,0,8.645a2.4,2.4,0,1,1-4.8-.066q-.01-5.711,0-11.422c0-1.252-.008-2.5,0-3.757a1.68,1.68,0,0,1,1.854-1.868q7.627-.011,15.255,0a2.4,2.4,0,1,1,.023,4.8c-2.9.014-5.808,0-8.569,0l34.73,34.725v-.481q0-3.945,0-7.89a2.419,2.419,0,1,1,4.808.011q0,7.44,0,14.879c0,1.446-.606,2.051-2.051,2.052q-7.44,0-14.879,0a2.419,2.419,0,1,1-.011-4.808q3.907-.007,7.815,0h.656Z"
                          transform="translate(-47.862 -47.855)"
                        />
                      </g>
                    </g>
                  </svg>
                }
                heading="Land Area"
                subheading="136 Kanals - 81600 Sq Yards"
              />
              <SpecificationCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="79.002"
                    height="79.172"
                    viewBox="0 0 79.002 79.172"
                  >
                    <g
                      id="Group_1966"
                      data-name="Group 1966"
                      transform="translate(-284.97 -2527.584)"
                    >
                      <path
                        id="Path_4761"
                        data-name="Path 4761"
                        d="M216.967,79.619c-.177-.213-.337-.442-.533-.635q-6.377-6.3-12.763-12.595c-.2-.2-.427-.372-.613-.532l4.49-4.339,6.417,6.337V12.389l-6.281,6.574-4.666-4.5L217.075.6c.218.209.423.4.621.6q6.348,6.331,12.7,12.661a7.312,7.312,0,0,0,.642.515v.155L226.668,19.1l-6.433-6.487V67.777l6.228-6.278,4.455,4.422c-.178.15-.452.348-.688.584q-6.558,6.552-13.108,13.113Z"
                        transform="translate(132.937 2527.137)"
                      />
                      <g id="Group_1965" data-name="Group 1965">
                        <path
                          id="Path_4760"
                          data-name="Path 4760"
                          d="M121.906,279.417v-6.186h6.155V267.4h6.278c-.08,2.4.023,4.8-.288,7.152a5.84,5.84,0,0,1-5.058,4.741,3.264,3.264,0,0,0-.439.126Z"
                          transform="translate(193.679 2327.339)"
                        />
                        <path
                          id="Path_4759"
                          data-name="Path 4759"
                          d="M5.726,279.436A16.716,16.716,0,0,1,2.614,278.2a5.631,5.631,0,0,1-2.58-4.769c-.066-1.98-.014-3.964-.014-6.01H6.18v5.8h6.039v6.215Z"
                          transform="translate(284.97 2327.32)"
                        />
                        <rect
                          id="Rectangle_989"
                          data-name="Rectangle 989"
                          width="6.184"
                          height="6.142"
                          transform="translate(303.218 2600.615)"
                        />
                        <path
                          id="Path_4762"
                          data-name="Path 4762"
                          d="M128.234,12.157V6.217h-6.109V.006h1.265c1.543,0,3.088-.014,4.631,0a6.153,6.153,0,0,1,6.381,6.07c.1,2,.017,4.01.017,6.078Z"
                          transform="translate(193.515 2527.583)"
                        />
                        <path
                          id="Path_4763"
                          data-name="Path 4763"
                          d="M.4,12.183C.4,9.746.212,7.318.452,4.934A5.82,5.82,0,0,1,5.443.131,8.377,8.377,0,0,1,6.594.022C8.52.012,10.445.017,12.417.017V6.183H6.464v6Z"
                          transform="translate(284.723 2527.572)"
                        />
                        <rect
                          id="Rectangle_999"
                          data-name="Rectangle 999"
                          width="6.112"
                          height="6.084"
                          transform="translate(303.247 2527.633)"
                        />
                        <rect
                          id="Rectangle_997"
                          data-name="Rectangle 997"
                          width="6.087"
                          height="6.087"
                          transform="translate(285.012 2546.027)"
                        />
                        <rect
                          id="Rectangle_998"
                          data-name="Rectangle 998"
                          width="6.097"
                          height="6.083"
                          transform="translate(321.797 2546.043)"
                        />
                        <rect
                          id="Rectangle_995"
                          data-name="Rectangle 995"
                          width="6.075"
                          height="6.115"
                          transform="translate(285.023 2558.085)"
                        />
                        <rect
                          id="Rectangle_996"
                          data-name="Rectangle 996"
                          width="6.089"
                          height="6.084"
                          transform="translate(321.801 2558.413)"
                        />
                        <rect
                          id="Rectangle_993"
                          data-name="Rectangle 993"
                          width="6.067"
                          height="6.109"
                          transform="translate(285.042 2570.16)"
                        />
                        <rect
                          id="Rectangle_994"
                          data-name="Rectangle 994"
                          width="6.084"
                          height="6.085"
                          transform="translate(321.817 2570.448)"
                        />
                        <rect
                          id="Rectangle_991"
                          data-name="Rectangle 991"
                          width="6.075"
                          height="6.114"
                          transform="translate(285.038 2582.189)"
                        />
                        <rect
                          id="Rectangle_992"
                          data-name="Rectangle 992"
                          width="6.109"
                          height="6.068"
                          transform="translate(321.777 2582.533)"
                        />
                      </g>
                    </g>
                  </svg>
                }
                heading="Maximum No of stories of Building"
                subheading="70"
              />
            </div>
            <div className="specification__section__left__down">
              <SpecificationCard
                icon={
                  <svg
                    id="Group_316"
                    data-name="Group 316"
                    xmlns="http://www.w3.org/2000/svg"
                    width="72.152"
                    height="72.165"
                    viewBox="0 0 72.152 72.165"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_806"
                          data-name="Rectangle 806"
                          width="72.152"
                          height="72.165"
                          fill="none"
                          stroke="#fff"
                          stroke-width="1"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_315"
                      data-name="Group 315"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M0,64.815V12.681a2.707,2.707,0,0,0,.124-.4A13.8,13.8,0,0,1,8.773,1.075,28.071,28.071,0,0,1,12.681,0H59.461a3.159,3.159,0,0,0,.464.13,14.022,14.022,0,0,1,12.2,13.626q.072,25.043.009,50.087a8.39,8.39,0,0,1-7.09,8.171,12.789,12.789,0,0,1-1.822.123c-8.479.076-8.028.513-7.994-7.944.037-9.064.009-18.128.008-27.192a2.861,2.861,0,0,0-3.168-3.185q-6.2,0-12.4,0h-.743V66.506h.788c2.325,0,4.649-.009,6.974,0a2.815,2.815,0,1,1,.023,5.628q-19.232.009-38.463-.015a8.112,8.112,0,0,1-6.49-3.294A10.239,10.239,0,0,1,0,64.815m11.272,1.672v-.926q0-14.263,0-28.527a8.469,8.469,0,0,1,8.856-8.854H51.966a8.467,8.467,0,0,1,8.9,8.878q0,14.3,0,28.6v.851h2.274c2.3,0,3.362-1.055,3.362-3.345q0-24.336,0-48.672a8.466,8.466,0,0,0-8.858-8.852H14.54a8.469,8.469,0,0,0-8.9,8.877q0,24.336,0,48.672c0,.211-.006.423.005.634a2.765,2.765,0,0,0,2.466,2.652c1.021.084,2.055.017,3.165.017m5.636-.032H33.2V33.817H20.178c-2.194,0-3.27,1.083-3.27,3.294q0,14.264,0,28.527Z"
                        stroke="#fff"
                        stroke-width="1"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M88.725,58.049c1.249-1.253,2.4-2.413,3.56-3.571a2.8,2.8,0,0,1,4.274,3.629c-1.918,2.088-3.956,4.07-6.009,6.028a2.615,2.615,0,0,1-3.651-.053Q83.911,61.2,81.03,58.208a2.8,2.8,0,0,1,4.006-3.9c1.238,1.18,2.405,2.435,3.689,3.744"
                        transform="translate(-63.398 -42.264)"
                        stroke="#fff"
                        stroke-width="1"
                      />
                      <path
                        id="Path_50"
                        data-name="Path 50"
                        d="M190.555,60.366c-1.169,1.187-2.334,2.409-3.543,3.586a2.73,2.73,0,0,1-3.184.536,2.626,2.626,0,0,1-1.568-2.671,3.65,3.65,0,0,1,.838-1.862c1.8-1.913,3.678-3.751,5.553-5.591a2.748,2.748,0,0,1,4.031-.019q2.846,2.776,5.621,5.624a2.811,2.811,0,1,1-3.993,3.957c-1.2-1.153-2.369-2.339-3.553-3.509-.014-.014-.043-.012-.2-.051"
                        transform="translate(-143.897 -42.225)"
                        stroke="#fff"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                }
                heading="Height of Building"
                subheading="1000 Ft  - 304.8m"
              />
              <SpecificationCard
                icon={
                  <svg
                    id="Group_318"
                    data-name="Group 318"
                    xmlns="http://www.w3.org/2000/svg"
                    width="71.283"
                    height="71.084"
                    viewBox="0 0 71.283 71.084"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_807"
                          data-name="Rectangle 807"
                          width="71.283"
                          height="71.084"
                          fill="none"
                          stroke="#fff"
                          stroke-width="1.5"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_317"
                      data-name="Group 317"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Path_51"
                        data-name="Path 51"
                        d="M17.409,0H64.485a.672.672,0,0,0,.176.1A7.787,7.787,0,0,1,71.28,8.156q.008,22.386,0,44.771v.627c-1.912-1.7-3.653-3.435-5.369-5.193a1.1,1.1,0,0,1-.19-.7c-.017-1.462-.008-2.924-.009-4.386V41.069L47.8,58.97H60.759l-2.931-2.845,3.9-3.91,9.407,9.418-9.451,9.45-3.957-3.96,2.613-2.541H59.47q-22.177,0-44.353-.014a10.774,10.774,0,0,1-2.75-.323,7.752,7.752,0,0,1-5.673-7.827q-.005-22.281,0-44.562v-.79l-.185-.073L3.882,13.769,0,9.748V9.609a7.291,7.291,0,0,0,.577-.472Q4.839,4.885,9.095.626c.172-.172.353-.334.418-.4L19,9.707l-3.982,3.969-2.707-2.73v12.66L30.343,5.568h-.611c-2.088,0-4.176.011-6.264-.013a1.241,1.241,0,0,1-.79-.294C20.907,3.522,19.162,1.757,17.409,0M65.715,9.853,16.536,59.015c2.134,0,4.378-.02,6.622.014a1.762,1.762,0,0,0,1.4-.58q18.173-18.2,36.367-36.385c1.59-1.591,3.166-3.2,4.748-4.8q.023-3.407.046-6.814c0-.248,0-.5,0-.6M12.261,54.709,61.391,5.568c-2.111,0-4.385.018-6.658-.013a1.757,1.757,0,0,0-1.4.568Q38.489,21.009,23.613,35.867,18.149,41.331,12.691,46.8a1.269,1.269,0,0,0-.412.743c-.031,2.435-.018,4.872-.018,7.164m19.753,4.3c2.489,0,4.922.009,7.354-.016A1.082,1.082,0,0,0,40,58.64Q52.686,45.971,65.351,33.279a1.325,1.325,0,0,0,.348-.838c.028-2.228.017-4.456.013-6.684a2.467,2.467,0,0,0-.055-.385L32.015,59.014M12.261,39.063,45.746,5.569c-2.263,0-4.624-.011-6.985.017a1.176,1.176,0,0,0-.682.385q-2.748,2.715-5.471,5.456Q22.69,21.345,12.78,31.27a1.482,1.482,0,0,0-.5.844c-.04,2.34-.023,4.68-.023,6.949"
                        transform="translate(0 0.001)"
                        stroke="#fff"
                        stroke-width="1.5"
                      />
                    </g>
                  </svg>
                }
                heading="Total Covered Area"
                subheading="More than 4Million Sq.ft"
              />
            </div>
          </div>
          <div className="specification__section__right">
            PROJECT
            <br /> SPECIFICATIONS
          </div>
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
