import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../components/Icon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 15);
  };

  const PATHS = [
    {
      to: "health",
      label: "Health",
      icon: "health_and_safety",
    },
    {
      to: "feelings",
      label: "Feelings",
      icon: "sentiment_satisfied",
    },
    {
      to: "illness",
      label: "Illness",
      icon: "sick",
    },
  ];

  const getBackgroundClass = () => {
    switch (location.pathname) {
      case "/":
        return "bg-primary";
      case "/health":
        return "bg-secondary";
      case "/feelings":
        return "bg-tertiary";
      default:
        return "";
    }
  };

  const getTextClass = () => {
    switch (location.pathname) {
      case "/":
        return "text-primary";
      case "/health":
        return "text-secondary";
      case "/feelings":
        return "text-tertiary";
      default:
        return "";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed inset-x-0 top-0 px-5 lg:px-12 py-3 text-white transition duration-300 ease-in-out z-[9999] ${
        isScrolled ? "drop-shadow-lg" : ""
      } ${getBackgroundClass()}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="hidden md:inline text-2xl font-bold">
          Kinderwell
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 font-semibold text-xl">
          {PATHS.map((path, index) => (
            <li key={index} className="flex gap-1 items-center">
              <Icon style={{ fontSize: "2rem" }}>{path.icon}</Icon>
              <Link to={path.to}>{path.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className={`btn rounded-full md:text-lg ${getTextClass()}`}>
          Contact Us
        </a>
      </div>
    </nav>
  );
}
