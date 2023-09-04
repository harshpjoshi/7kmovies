import ReactApexChart from "react-apexcharts";

function SalesOverview() {
  const chart = {
    series: [
      {
        name: "Earnings this month",
        data: [355, 390, 300, 350, 390, 180, 355, 390],
      },
      {
        name: "Expense this month",
        data: [280, 250, 325, 215, 250, 310, 280, 250],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 345,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: "#adb0bb",
        fontFamily: "inherit",
        sparkline: { enabled: false },
      },
      colors: ["#5D87FF", "#49BEFF"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "44%",
          borderRadius: [4],
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      markers: { size: 0 },
      dataLabels: {
        enabled: false,
      },

      legend: {
        show: false,
      },

      grid: {
        borderColor: "rgba(0,0,0,0.1)",
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "16/08",
          "17/08",
          "18/08",
          "19/08",
          "20/08",
          "21/08",
          "22/08",
          "23/08",
        ],
        labels: {
          style: { cssClass: "grey--text lighten-2--text fill-color" },
        },
      },
      yaxis: {
        show: true,
        min: 0,
        max: 400,
        tickAmount: 4,
        labels: {
          style: {
            cssClass: "grey--text lighten-2--text fill-color",
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
        lineCap: "butt",
        colors: ["transparent"],
      },

      tooltip: { theme: "light" },
      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 100,
              },
            },
          },
        },
      ],
    },
  };
  return (
    <div className="h-full basis-[70%] p-[30px] drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] bg-white dark:text-white dark:bg-dark-card-bg rounded-lg">
      <div className="flex flex-col">
        <h5 className="font-semibold text-lg mb-[24px]">Sales Overview</h5>
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="bar"
          height={345}
        />
      </div>
    </div>
  );
}

export default SalesOverview;
