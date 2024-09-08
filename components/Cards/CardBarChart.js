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

export default function CardBarChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "rgba(0,0,0,.4)",
        },
      },
      title: {
        display: false,
        text: "Orders Chart",
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(33, 37, 41, 0.2)",
          borderDash: [2],
          drawBorder: false,
          zeroLineColor: "rgba(33, 37, 41, 0.15)",
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: new Date().getFullYear().toString(),
        data: [30, 78, 56, 34, 100, 45, 13],
        backgroundColor: "#ed64a6",
        borderColor: "#ed64a6",
        barThickness: 8,
      },
      {
        label: (new Date().getFullYear() - 1).toString(),
        data: [27, 68, 86, 74, 10, 4, 87],
        backgroundColor: "#4c51bf",
        borderColor: "#4c51bf",
        barThickness: 8,
      },
    ],
  };

  return (
    <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
      <div className="mb-0 rounded-t bg-transparent px-4 py-3">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-1 flex-grow">
            <h6 className="mb-1 text-xs font-semibold uppercase text-blueGray-400">
              Performance
            </h6>
            <h2 className="text-xl font-semibold text-blueGray-700">
              Total orders
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-auto p-4">
        <div className="relative h-350-px">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
