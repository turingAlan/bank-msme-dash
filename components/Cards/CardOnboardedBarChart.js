import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += "$" + context.parsed.y + "k";
          }
          return label;
        },
      },
    },
    legend: {
      position: "bottom",
      labels: {
        color: "rgba(0,0,0,.4)",
      },
    },
    title: {
      display: false,
      text: "Revenue Chart",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
      grid: {
        color: "rgba(33, 37, 41, 0.3)",
        borderDash: [2],
        borderDashOffset: 2,
      },
    },
    y: {
      grid: {
        color: "rgba(33, 37, 41, 0.2)",
        borderDash: [2],
        borderDashOffset: 2,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Company Revenue",
      data: [30, 50, 70, 75, 82, 89, 98],
      backgroundColor: "#ed64a6",
      borderRadius: 5,
    },
    {
      label: "Partner Revenue",
      data: [10, 15, 25, 27, 30, 33, 36],
      backgroundColor: "#4c51bf",
      borderRadius: 5,
    },
  ],
};

export default function CardInlineBarChart() {
  return (
    <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
      <div className="mb-0 rounded-t bg-transparent px-4 py-3">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-1 flex-grow">
            <h6 className="mb-1 text-xs font-semibold uppercase text-blueGray-400">
              Performance
            </h6>
            <h2 className="text-xl font-semibold text-blueGray-700">
              Total Revenue
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-auto p-4">
        <div className="relative h-350-px">
          <Bar options={options} data={data} />
        </div>
      </div>
      n
    </div>
  );
}
