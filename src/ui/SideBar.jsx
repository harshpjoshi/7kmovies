function SideBar({ isNavOpen }) {
  return (
    <div
      className={`xl:block ${
        isNavOpen ? "absolute top-20 left-4 w-[250px] h-full z-10" : "hidden"
      } basis-1/4 mt-6 dark:border dark:border-solid dark:border-gray-600/70  dark:drop-shadow-none drop-shadow-[0_0.5px_4px_rgba(211,211,211,0.8)] bg-white dark:bg-dark-card-bg rounded-lg`}
    ></div>
  );
}

export default SideBar;
