import React from "react";

import Admin from "../../layout.js";
import CardLineChart from "components/Cards/CardLineChart.js";
import CompanyDetailsCard from "components/CompanyDetails/index.js";

export default function Page() {
  return (
    <>
      <CardLineChart />
      <CompanyDetailsCard
        companyName={"Levis"}
        logoUrl="/img/bank/yes.png"
        revenue={"10CR"}
        foundedOn={"10/12/2000"}
        category={"F&B"}
      />
    </>
  );
}

Page.layout = Admin;
