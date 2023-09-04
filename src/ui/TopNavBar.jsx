import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAslInterpreting,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function TopNavBar() {
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.theme);

  function handleTheme() {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    console.log(isDark);
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (!isDark) {
      document.documentElement.classList.add("dark");
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
      setIsDarkTheme(true);
    } else {
      document.documentElement.classList.remove("dark");
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
      setIsDarkTheme(false);
    }
  }

  return (
    <div className="flex justify-between  drop-shadow-[0_0.5px_4px_rgba(211,211,211,0.8)] bg-white dark:bg-dark-card-bg rounded-lg">
      <div className="flex justify-self-center items-center">
        <img src="/logos/dark-logo.svg" width="160" className="ml-6" />
      </div>
      <div className="flex justify-between w-[120px] h-16 mr-6">
        <div
          onClick={handleTheme}
          className="flex items-center my-[17px] px-[14px] py-4 rounded-md border-custom-blue border hover:bg-blue-500 transition-all duration-300 hover:text-white text-blue-500"
        >
          <FontAwesomeIcon
            icon={isDarkTheme ? faSun : faMoon}
            className=" w-[10.5px] h-[14px] "
          />
        </div>
        <img
          src="/profile/user-1.jpg"
          className="object-cover rounded-full p-4"
        />
      </div>
    </div>
  );
}

export default TopNavBar;
