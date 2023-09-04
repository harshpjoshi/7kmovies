import TopNavBar from "./ui/TopNavBar";
import SideBar from "./ui/SideBar";
import SummaryCountBar from "./ui/SummaryCountBar";

import SalesOverview from "./ui/SalesOverview";
import YearlyBreakup from "./ui/YearlyBreakup";
import MonthlyEarning from "./ui/MonthlyEarning";

function App() {
  return (
    <div className="p-4 h-screen flex flex-col">
      <TopNavBar />
      <div className="flex flex-row">
        <SideBar />
        <div className="flex flex-col w-full">
          <SummaryCountBar />
          <div className="flex flex-row w-full p-[24px]">
            <SalesOverview />
            <div className="basis-[30%] ml-[20px]">
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
