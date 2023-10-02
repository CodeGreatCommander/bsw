import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/Logo.svg";
import { useState } from "react";

function Resources(){
  return (
    <div className="resources">
      <NavLink className="res-nav-link"></NavLink>
    </div>
  )
}

export default function Navbar() {
  const locaton = useLocation();
  const [show, setShow] = useState(false);
  return (
    <div className="navbar">
      <div className="Logo">
        <img src={logo} id="Logo" />
      </div>
      <nav
        id="menu"
        onClick={() => {
          setShow(true);
        }}
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </nav>
      <div className={"links" + (show ? "" : " no-show")}>
        <div
          className="close mobile"
          onClick={() => {
            setShow(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <g filter="url(#filter0_d_939_251)">
              <path
                d="M4.44728 1.33937C4.73376 1.05298 5.12226 0.89209 5.52734 0.89209C5.93242 0.89209 6.32092 1.05298 6.6074 1.33937L12.0092 6.74119L17.411 1.33937C17.6992 1.06109 18.0851 0.907113 18.4856 0.910594C18.8862 0.914074 19.2693 1.07474 19.5526 1.35798C19.8358 1.64122 19.9965 2.02438 19.9999 2.42493C20.0034 2.82548 19.8494 3.21137 19.5712 3.49949L14.1693 8.90131L19.5712 14.3031C19.8494 14.5913 20.0034 14.9771 19.9999 15.3777C19.9965 15.7782 19.8358 16.1614 19.5526 16.4446C19.2693 16.7279 18.8862 16.8886 18.4856 16.892C18.0851 16.8955 17.6992 16.7415 17.411 16.4633L12.0092 11.0614L6.6074 16.4633C6.31928 16.7415 5.93339 16.8955 5.53284 16.892C5.13229 16.8886 4.74913 16.7279 4.46589 16.4446C4.18265 16.1614 4.02198 15.7782 4.0185 15.3777C4.01502 14.9771 4.169 14.5913 4.44728 14.3031L9.8491 8.90131L4.44728 3.49949C4.16089 3.21301 4 2.82451 4 2.41943C4 2.01435 4.16089 1.62585 4.44728 1.33937Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_939_251"
                x="0"
                y="0.89209"
                width="24"
                height="24"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_939_251"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_939_251"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <NavLink
          className={"nav-link" + (locaton.pathname === "/" ? " activ" : "")}
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className={
            "nav-link" + (locaton.pathname === "/mentorship" ? " activ" : "")
          }
          to="/mentorship"
        >
          MENTORSHIP
        </NavLink>
        <NavLink
          className={"nav-link" + (locaton.pathname === "/" ? " activ" : "")}
          to="/"
        >
          WHAT WE DO
        </NavLink>
        <NavLink
          className={"nav-link" + (locaton.pathname === "/" ? " activ" : "")}
          to="/"
        >
          RESOURCES
        </NavLink>
        <NavLink
          className={
            "nav-link" + (locaton.pathname === "/faqs" ? " activ" : "")
          }
          to="/faqs"
        >
          FAQS
        </NavLink>
        <NavLink
          className={
            "nav-link" + (locaton.pathname === "/faqs" ? " activ" : "")
          }
          to="/faqs"
        >
          COUNSELLING
        </NavLink>
        <NavLink
          className={
            "nav-link" + (locaton.pathname === "/events" ? " activ" : "")
          }
          to="/events"
        >
          EVENTS
        </NavLink>
      </div>
    </div>
  );
}
