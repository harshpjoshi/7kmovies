import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import ReactApexChart from "react-apexcharts";

function MonthlyEarning() {
  const chart = {
    series: [
      {
        name: "Earnings",
        color: "#49BEFF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    options: {
      chart: {
        id: "sparkline3",
        type: "area",
        height: 60,

        sparkline: {
          enabled: true,
        },
        group: "sparklines",
        fontFamily: "Plus Jakarta Sans', sans-serif",
        foreColor: "#adb0bb",
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        colors: ["#f3feff"],
        type: "solid",
        opacity: 0.05,
      },

      markers: {
        size: 0,
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: true,
          position: "right",
        },
        x: {
          show: false,
        },
      },
    },
  };

  return (
    <div className="flex flex-col dark:rounded-lg dark:border dark:border-solid dark:border-gray-600/70  dark:drop-shadow-none drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] bg-white dark:bg-dark-card-bg dark:text-white rounded-lg mt-7">
      <h5 className="font-semibold text-lg mb-[24px] pt-[20px] pl-[20px]">
        Monthly Earning
      </h5>
      <div className="flex flex-row">
        <div className="flex">
          <div className="flex flex-col">
            <div className="pl-[20px]">
              {" "}
              <h5 className="font-semibold text-lg">{`\€6,820`}</h5>
              <div className="flex-row my-[10px]">
                <BsArrowDownLeftCircleFill className="bg-red-500 text-red-200 rounded-full inline-block" />
                <h5 className="font-light text-sm pl-2 inline-block">{`+9% last year`}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="area"
        height={40}
      />
    </div>
  );
}

export default MonthlyEarning;
