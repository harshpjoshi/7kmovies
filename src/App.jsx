import TopNavBar from "./ui/TopNavBar";
import SideBar from "./ui/SideBar";
import SummaryCountBar from "./ui/SummaryCountBar";

import SalesOverview from "./ui/SalesOverview";
import YearlyBreakup from "./ui/YearlyBreakup";
import MonthlyEarning from "./ui/MonthlyEarning";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  useEffect(
    function () {
      console.log("Updated");
      setIsNavOpen(false);
    },
    [isTabletOrMobile],
  );

  function handleNavOpen() {
    setIsNavOpen((state) => !state);
  }

  return (
    <div className="p-4 h-screen flex flex-col">
      <TopNavBar onNavOpen={handleNavOpen} />
      <div className="static flex flex-row">
        <SideBar isNavOpen={isNavOpen} />
        <div className="flex flex-col w-full">
          <SummaryCountBar />
          <div className="md:flex md:flex-row w-full md:p-[24px] mt-8">
            <SalesOverview />
            <div className="basis-[30%] md:ml-[20px] max-[700px]:my-[24px]">
              <YearlyBreakup />
              <MonthlyEarning />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
