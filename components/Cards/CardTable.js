import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import registeredMsmes from "contants/registeredMsme";
import onboardingStatusTypes from "contants/onboardingStatusTypes";
import { getMsmeStatusColor } from "utility/utils";
import TableDropdown from "components/Dropdowns/TableDropdown";
import { msmeFilters } from "contants/filters";
import { useRouter } from "next/router";

export default function CardTable({ color, title }) {
  const router = useRouter();

  const [filter, setFilter] = useState("All");

  const [tableValue, setTableValue] = useState(registeredMsmes ?? []);

  const handleDetailsNavigate = (msmeData) => {
    if (msmeData?.onboardingStatus === onboardingStatusTypes.COMPLETED) {
      router.push(`msme/onboarded/${msmeData?.name}`);
    } else {
      router.push(`msme/pending/${msmeData?.name}`);
    }
  };

  useEffect(() => {
    if (filter === "All") {
      setTableValue(registeredMsmes);
    } else {
      const filteredValues = registeredMsmes?.filter((msmseData) => {
        return filter === msmseData.onboardingStatus;
      });
      setTableValue(filteredValues);
    }
  }, [filter]);

  return (
    <>
      <div
        className={
          "relative mb-6 flex w-full min-w-0 flex-col break-words rounded shadow-lg " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="mb-0 rounded-t border-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative flex w-full max-w-full flex-1 flex-grow items-center gap-5 px-4">
              <h3
                className={
                  "text-lg font-semibold " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {title ?? ""}
              </h3>
              <TableDropdown
                setValue={setFilter}
                value={filter}
                title="filter"
                icon={"fa-solid fa-filter"}
                values={msmeFilters}
              />
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="w-full border-collapse items-center bg-transparent">
            <thead>
              <tr>
                <th
                  className={
                    "whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase " +
                    (color === "light"
                      ? "border-blueGray-100 bg-blueGray-50 text-blueGray-500"
                      : "border-blueGray-500 bg-blueGray-600 text-blueGray-200")
                  }
                >
                  Company
                </th>
                <th
                  className={
                    "whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase " +
                    (color === "light"
                      ? "border-blueGray-100 bg-blueGray-50 text-blueGray-500"
                      : "border-blueGray-500 bg-blueGray-600 text-blueGray-200")
                  }
                >
                  Total Revenue
                </th>
                <th
                  className={
                    "whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase " +
                    (color === "light"
                      ? "border-blueGray-100 bg-blueGray-50 text-blueGray-500"
                      : "border-blueGray-500 bg-blueGray-600 text-blueGray-200")
                  }
                >
                  Onboarding Status
                </th>
                <th
                  className={
                    "whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase " +
                    (color === "light"
                      ? "border-blueGray-100 bg-blueGray-50 text-blueGray-500"
                      : "border-blueGray-500 bg-blueGray-600 text-blueGray-200")
                  }
                >
                  ONDC Revenue
                </th>
              </tr>
            </thead>
            <tbody>
              {tableValue?.length > 0
                ? tableValue.map((msmeData) => {
                    return (
                      <tr
                        key={msmeData.id}
                        onClick={() => handleDetailsNavigate(msmeData)}
                        className="cursor-pointer hover:bg-gray-100"
                      >
                        <th className="flex items-center whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                          <img
                            src="/img/bank/yes.png"
                            className="hidden h-12 w-12 rounded-full border bg-white object-contain sm:inline-block"
                            alt="..."
                          ></img>{" "}
                          <span
                            className={
                              "ml-3 font-bold " +
                              +(color === "light"
                                ? "text-blueGray-600"
                                : "text-white")
                            }
                          >
                            {msmeData?.name}
                          </span>
                        </th>
                        <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                          {msmeData?.totalRevenue}
                        </td>
                        <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                          <i
                            className={`fas fa-circle mr-2 text-${getMsmeStatusColor(msmeData.onboardingStatus)}`}
                          ></i>{" "}
                          {msmeData.onboardingStatus}
                        </td>
                        <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                          <div className="flex">
                            {msmeData?.onboardingStatus ===
                            onboardingStatusTypes.COMPLETED
                              ? msmeData?.ondcRevenue
                              : "---"}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
