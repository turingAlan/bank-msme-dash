import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function CardPendingLineChart() {
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
          color: "white",
        },
      },
      title: {
        display: false,
        text: "Sales Charts",
        color: "white",
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        ticks: {
          color: "rgba(255,255,255,.7)",
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: "rgba(255,255,255,.7)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.15)",
          borderDash: [3],
          borderDashOffset: 3,
          drawBorder: false,
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
        label: "Current Revenue",
        data: [65, 78, 79, 75, 80, 80, 76],
        borderColor: "#4c51bf",
        backgroundColor: "#4c51bf",
        fill: false,
      },
      {
        label: "Expected Revenue",
        data: [70, 82, 90, 111, 122, 125, 129],
        borderColor: "#fff",
        backgroundColor: "#fff",
        fill: false,
      },
    ],
  };

  return (
    <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-blueGray-700 shadow-lg">
      <div className="mb-0 rounded-t bg-transparent px-4 py-3">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-1 flex-grow">
            <h6 className="mb-1 text-xs font-semibold uppercase text-blueGray-100">
              Overview
            </h6>
            <h2 className="text-xl font-semibold text-white">Revenue value</h2>
          </div>
        </div>
      </div>
      <div className="flex-auto p-4">
        <div className="relative h-350-px">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
