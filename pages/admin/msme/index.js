import React from "react";

import Admin from "../layout.js";
import CardTable from "components/Cards/CardTable.js";

export default function Msme() {
  return (
    <>
      <CardTable title={"Sales"} />
    </>
  );
}

Msme.layout = Admin;
