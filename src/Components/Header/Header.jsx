import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { SignUpForm, LoginForm } from "./AuthForms"; // Importing SignUpForm and LoginForm

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false); // State to manage sign-up form visibility
  const [showLogin, setShowLogin] = useState(false); // State to manage login form visibility

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
    setShowLogin(false); // Hide login form when sign-up form is shown
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignUp(false); // Hide sign-up form when login form is shown
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex items-center justify-between py-2 md:px-12 px-4">
        <div className="flex justify-normal items-center">
          <NavLink to="/" className="text-cyan-700 font-medium">
            <img src={logo} alt="books" className="w-12 h-12" />
          </NavLink>
        </div>
        <div>
          <ul className="DESKTOP-MENU hidden space-x-4 sm:flex">
            <li>
              <NavLink
                to="/"
                activeClassName="text-orange-700"
                className="py-1 font-medium text-black"
              >
                HOME
              </NavLink>
            </li>
            <hr className="border-slate-400 border-2 w-7 rotate-90 justify-center self-center" />
            <li>
              <NavLink
                to="/about"
                activeClassName="text-orange-700"
                className="py-1 font-medium text-black"
              >
                ABOUT US
              </NavLink>
            </li>
            <hr className="border-slate-400 border-2 w-7 rotate-90 justify-center self-center" />
            <li>
              <NavLink
                to="/contact"
                activeClassName="text-orange-700"
                className="py-1 font-medium text-black"
              >
                CONTACT US
              </NavLink>
            </li>
            <hr className="border-slate-400 border-2 w-7 rotate-90 justify-center self-center" />
            {/* Sign Up Link */}
            <li>
              <button
                onClick={toggleSignUp}
                className="py-1 font-medium text-black"
              >
                SIGN UP
              </button>
            </li>
            <hr className="border-slate-400 border-2 w-7 rotate-90 justify-center self-center" />
            {/* Login Link */}
            <li>
              <button
                onClick={toggleLogin}
                className="py-1 font-medium text-black"
              >
                LOGIN
              </button>
            </li>
            <hr className="border-slate-400 border-2 w-7 rotate-90 justify-center self-center" />
          </ul>
        </div>
        <section className="flex justify-center items-center space-x-6">
          <div>
            <i
              className="fa-solid fa-cart-shopping fa-bounce fa-lg"
              style={{ color: "#00040a" }}
            ></i>
          </div>
          <div className="MOBILE-MENU flex sm:hidden">
            <div
              className="HAMBURGER-ICON space-y-1.5"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
              <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
              <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-4 py-4"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[150px]">
                <li>
                  <NavLink
                    to="/"
                    activeClassName="text-orange-700"
                    className="py-1 font-medium text-black"
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    activeClassName="text-orange-700"
                    className="py-1 font-medium text-black"
                  >
                    ABOUT US
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    activeClassName="text-orange-700"
                    className="py-1 font-medium text-black"
                  >
                    CONTACT US
                  </NavLink>
                </li>
                {/* Sign Up Link */}
                <li>
                  <button
                    onClick={toggleSignUp}
                    className="py-1 font-medium text-black"
                  >
                    SIGN UP
                  </button>
                </li>
                {/* Login Link */}
                <li>
                  <button
                    onClick={toggleLogin}
                    className="py-1 font-medium text-black"
                  >
                    LOGIN
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .hideMenuNav {
            display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>

      {/* Sign Up Form */}
      {showSignUp && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <SignUpForm />
            <button
              onClick={toggleSignUp}
              className="block mx-auto mt-4 text-sm text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Login Form */}
      {showLogin && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <LoginForm />
            <button
              onClick={toggleLogin}
              className="block mx-auto mt-4 text-sm text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Header;
