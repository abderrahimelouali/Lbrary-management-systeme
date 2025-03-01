// Navbar.js - Navigation component with theme toggle functionality
import { useState, useEffect } from "react";
import {
  FaBars,
  FaBell,
  FaTimes,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaShoppingCart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";

const navigation = [
  { name: "Books", path: "/books", current: false },
  { name: "Categories", path: "/categories", current: false },
  { name: "Bestsellers", path: "/bestsellers", current: false },
  { name: "Deals", path: "/deals", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  // Redux integration
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Track window width for better responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Apply the CSS variables on initial load
  useEffect(() => {
    const root = document.documentElement;

    // Set all the CSS custom properties from your variables
    root.style.setProperty("--clr-dark-a0", "#000000");
    root.style.setProperty("--clr-light-a0", "#ffffff");

    root.style.setProperty("--clr-primary-a0", "#4a148c");
    root.style.setProperty("--clr-primary-a10", "#603099");
    root.style.setProperty("--clr-primary-a20", "#7549a6");
    root.style.setProperty("--clr-primary-a30", "#8961b3");
    root.style.setProperty("--clr-primary-a40", "#9d7ac0");
    root.style.setProperty("--clr-primary-a50", "#b194cc");

    root.style.setProperty("--clr-surface-a0", "#121212");
    root.style.setProperty("--clr-surface-a10", "#282828");
    root.style.setProperty("--clr-surface-a20", "#3f3f3f");
    root.style.setProperty("--clr-surface-a30", "#575757");
    root.style.setProperty("--clr-surface-a40", "#717171");
    root.style.setProperty("--clr-surface-a50", "#8b8b8b");

    root.style.setProperty("--clr-surface-tonal-a0", "#1f1528");
    root.style.setProperty("--clr-surface-tonal-a10", "#342a3c");
    root.style.setProperty("--clr-surface-tonal-a20", "#4a4152");
    root.style.setProperty("--clr-surface-tonal-a30", "#625968");
    root.style.setProperty("--clr-surface-tonal-a40", "#7a7380");
    root.style.setProperty("--clr-surface-tonal-a50", "#938d98");

    // Trigger initial theme
    if (darkMode) {
      dispatch(toggleTheme());
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const goHome = () => {
    navigate("/");
    setMobileMenuOpen(false);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const isMobile = windowWidth < 768;

  return (
    <nav
      className="shadow-lg w-full"
      style={{
        backgroundColor: darkMode
          ? "var(--clr-surface-a10)"
          : "var(--clr-primary-a0)",
        color: darkMode ? "var(--clr-light-a0)" : "var(--clr-light-a0)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button - only visible on md and smaller screens */}
          <div className="flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-purple-100 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              style={{
                color: "var(--clr-light-a0)",
                backgroundColor: darkMode
                  ? "var(--clr-surface-a10)"
                  : "var(--clr-primary-a0)",
                ":hover": {
                  backgroundColor: darkMode
                    ? "var(--clr-surface-tonal-a20)"
                    : "var(--clr-primary-a20)",
                },
              }}
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo - always visible and clickable to go home */}
          <div
            className={`flex ${isMobile ? "flex-1 justify-center" : "mr-4"}`}
          >
            <button
              onClick={goHome}
              className="flex items-center text-white font-bold text-xl focus:outline-none"
            >
              <img
                alt="Bookio"
                src={darkMode ? "/darklogo.png" : "/logo.png"}
                width="170"
                height="170"
                className="mr-2"
              />
            </button>
          </div>

          {/* Desktop navigation - hidden on md and smaller screens */}
          <div className="hidden md:block flex-1">
            <div className="flex justify-center">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={classNames(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 mx-1"
                  )}
                  style={{
                    color: "var(--clr-light-a0)",
                    backgroundColor: item.current
                      ? darkMode
                        ? "var(--clr-surface-tonal-a20)"
                        : "var(--clr-primary-a20)"
                      : "transparent",
                    ":hover": {
                      backgroundColor: darkMode
                        ? "var(--clr-surface-tonal-a20)"
                        : "var(--clr-primary-a20)",
                      color: "var(--clr-light-a0)",
                    },
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center">
            {/* Search bar - hidden on small screens */}
            <div className="hidden lg:block relative mr-3">
              <input
                type="text"
                placeholder="Search books..."
                className="rounded-full py-1 px-4 focus:outline-none focus:ring-2 w-48 lg:w-64"
                style={{
                  backgroundColor: darkMode
                    ? "var(--clr-surface-a20)"
                    : "var(--clr-primary-a20)",
                  color: "var(--clr-light-a0)",
                  "::placeholder": {
                    color: darkMode
                      ? "var(--clr-surface-a50)"
                      : "var(--clr-primary-a50)",
                  },
                  borderColor: darkMode
                    ? "var(--clr-surface-tonal-a30)"
                    : "var(--clr-primary-a30)",
                }}
              />
            </div>

            {/* Theme toggle */}
            <button
              onClick={handleToggleTheme}
              className="rounded-full p-1 mx-1 lg:mx-2"
              style={{
                color: "var(--clr-light-a0)",
                ":hover": {
                  backgroundColor: darkMode
                    ? "var(--clr-surface-tonal-a20)"
                    : "var(--clr-primary-a20)",
                },
              }}
            >
              <span className="sr-only">Toggle dark mode</span>
              {darkMode ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>

            {/* Notifications */}
            <button
              type="button"
              className="relative rounded-full p-1 mx-1 lg:mx-2"
              style={{
                color: "var(--clr-light-a0)",
                ":hover": {
                  backgroundColor: darkMode
                    ? "var(--clr-surface-tonal-a20)"
                    : "var(--clr-primary-a20)",
                },
              }}
            >
              <span className="sr-only">View notifications</span>
              <FaBell className="h-5 w-5" aria-hidden="true" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Cart button */}
            <button
              onClick={() => handleNavigation("/cart")}
              className="hidden sm:flex text-white py-1 px-3 rounded-md mx-1 lg:mx-2 text-sm font-medium transition-colors duration-200 items-center"
              style={{
                backgroundColor: darkMode
                  ? "var(--clr-surface-a20)"
                  : "var(--clr-primary-a20)",
                color: "var(--clr-light-a0)",
                ":hover": {
                  backgroundColor: darkMode
                    ? "var(--clr-surface-tonal-a30)"
                    : "var(--clr-primary-a30)",
                },
              }}
            >
              <FaShoppingCart className="mr-1" />
              <span className="hidden sm:inline">Cart </span>
              <span
                className="ml-1 px-1.5 py-0.5 rounded-full text-xs"
                style={{
                  backgroundColor: darkMode
                    ? "var(--clr-surface-a30)"
                    : "var(--clr-primary-a30)",
                }}
              >
                3
              </span>
            </button>

            {/* Mobile cart icon */}
            <button
              onClick={() => handleNavigation("/cart")}
              className="sm:hidden relative rounded-full p-1 mx-1"
              style={{
                color: "var(--clr-light-a0)",
                ":hover": {
                  backgroundColor: darkMode
                    ? "var(--clr-surface-tonal-a20)"
                    : "var(--clr-primary-a20)",
                },
              }}
            >
              <FaShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">
                3
              </span>
            </button>

            {/* Profile icon */}
            <div className="relative ml-1 lg:ml-2">
              <button
                onClick={() => handleNavigation("/profile")}
                className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white p-1"
                style={{
                  backgroundColor: darkMode
                    ? "var(--clr-surface-a20)"
                    : "var(--clr-primary-a20)",
                }}
              >
                <span className="sr-only">Open user menu</span>
                <FaUserCircle
                  className="h-6 w-6"
                  style={{ color: "var(--clr-light-a0)" }}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - slide down animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="block w-full text-left rounded-md px-3 py-2 text-base font-medium"
              style={{
                color: "var(--clr-light-a0)",
                backgroundColor: item.current
                  ? darkMode
                    ? "var(--clr-surface-tonal-a20)"
                    : "var(--clr-primary-a20)"
                  : "transparent",
                ":hover": {
                  backgroundColor: darkMode
                    ? "var(--clr-surface-tonal-a20)"
                    : "var(--clr-primary-a20)",
                  color: "var(--clr-light-a0)",
                },
              }}
            >
              {item.name}
            </button>
          ))}
          <div className="mt-4 px-2 pb-2">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full rounded-full py-2 px-4 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: darkMode
                  ? "var(--clr-surface-a20)"
                  : "var(--clr-primary-a20)",
                color: "var(--clr-light-a0)",
                "::placeholder": {
                  color: darkMode
                    ? "var(--clr-surface-a50)"
                    : "var(--clr-primary-a50)",
                },
                borderColor: darkMode
                  ? "var(--clr-surface-tonal-a30)"
                  : "var(--clr-primary-a30)",
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
