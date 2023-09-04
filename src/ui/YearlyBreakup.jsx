import { BsArrowUpLeftCircleFill } from "react-icons/bs";
import Dot from "../ui/Dot";
import ReactApexChart from "react-apexcharts";

function YearlyBreakup() {
  const chart = {
    series: [38, 40, 25],
    labels: ["2022", "2021", "2020"],
    options: {
      chart: {
        width: 180,
        type: "donut",
        fontFamily: "Plus Jakarta Sans', sans-serif",
        foreColor: "#adb0bb",
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: "75%",
          },
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },

      legend: {
        show: false,
      },
      colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      tooltip: {
        theme: "dark",
        fillSeriesColor: false,
      },
    },
  };

  return (
    <div className="flex flex-col py-[20px] pl-[20px] drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] bg-white rounded-lg">
      <h5 className="font-semibold text-lg mb-[24px]">Yearly Breakup</h5>
      <div className="flex flex-row justify-between">
        <div className="flex">
          <div className="flex flex-col">
            <h5 className="font-semibold text-lg">{`\$36,358`}</h5>
            <div className="flex-row my-[10px]">
              <BsArrowUpLeftCircleFill className="bg-green-500 text-green-200 rounded-full inline-block" />
              <h5 className="font-light text-sm pl-2 inline-block">{`+9% last year`}</h5>
            </div>
            <div className="flex flex-row gap-4">
              <span className="flex flex-row">
                <Dot size="45" />
                <h5 className="font-light text-sm pl-2 inline-block">2023</h5>
              </span>
              <span className="flex flex-row">
                <Dot size="45" isDisable={true} />
                <h5 className="font-light text-sm pl-2 inline-block">2023</h5>
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <ReactApexChart
            options={chart.options}
            series={chart.series}
            type="donut"
            height={150}
            width={150}
          />
        </div>
      </div>
    </div>
  );
}

export default YearlyBreakup;
