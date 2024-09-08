import React from "react";

// components

export default function CardUserInterested() {
  return (
    <>
      <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
        <div className="mb-0 rounded-t border-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-1 flex-grow px-4">
              <h3 className="text-nowrap text-base font-semibold text-blueGray-700">
                Request Received
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="w-full border-collapse items-center bg-transparent">
            <thead>
              <tr>
                <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-blueGray-100 bg-blueGray-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-blueGray-500">
                  Domain
                </th>
                <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-blueGray-100 bg-blueGray-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-blueGray-500">
                  Request
                </th>
                <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-blueGray-100 bg-blueGray-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-blueGray-500">
                  Onboarded
                </th>
                <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-blueGray-100 bg-blueGray-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-blueGray-500">
                  Conversion rate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                  Grocery
                </th>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  4,569
                </td>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  340
                </td>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  <i className="fas fa-arrow-down mr-4 text-red-500"></i>
                  7.44%
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                  Fashion
                </th>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  3,985
                </td>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  319
                </td>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  <i className="fas fa-arrow-down mr-4 text-orange-500"></i>
                  8.01%
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                  Electronics
                </th>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  3,513
                </td>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  294
                </td>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  <i className="fas fa-arrow-up mr-4 text-emerald-500"></i>
                  8.37%
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                  Health & Wellness
                </th>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  2,050
                </td>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  147
                </td>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  <i className="fas fa-arrow-down mr-4 text-red-500"></i>
                  7.17%
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                  BPC
                </th>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  1,795
                </td>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  190
                </td>
                <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                  <i className="fas fa-arrow-up mr-4 text-emerald-500"></i>
                  10.59%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
