import React from "react";

import Admin from "../../layout.js";
import CompanyDetailsCard from "components/CompanyDetails/index.js";
import CardInlineBarChart from "components/Cards/CardOnboardedBarChart.js";

export default function Page() {
  return (
    <>
      <CardInlineBarChart />
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
