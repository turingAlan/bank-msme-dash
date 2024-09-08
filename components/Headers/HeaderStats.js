import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import { twMerge } from "tailwind-merge";

export default function HeaderStats(props) {
  const { headerData = [] } = props;
  const parentClass = twMerge(
    "relative bg-blueGray-800 pb-32 pt-12 md:pt-32",
    props.className,
  );

  console.log(headerData, "here is the data");

  return (
    <>
      {/* Header */}
      <div className={parentClass}>
        <div className="mx-auto w-full px-4 md:px-10">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              {headerData?.map((headerData, idx) => {
                return (
                  <div className="w-full px-4 lg:w-6/12 xl:w-3/12" key={idx}>
                    <CardStats {...headerData} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
