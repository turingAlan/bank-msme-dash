import React from "react";

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardUserInterested from "components/Cards/CardPageVisits.js";
import Admin from "./layout.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
          <CardLineChart />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardBarChart />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap">
        <div className="mb-12 w-full px-4 xl:mb-0">
          <CardUserInterested />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
