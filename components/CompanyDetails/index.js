import React from "react";

const CompanyDetailsCard = ({
  companyName,
  logoUrl,
  revenue,
  foundedOn,
  category,
}) => {
  return (
    <div className="z-50 mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md sm:ml-0 sm:mr-auto">
      <div className="flex items-center space-x-4 p-4">
        <img
          src={logoUrl || "/api/placeholder/64/64"}
          alt={`${companyName} logo`}
          className="h-16 w-16 rounded-full object-contain"
        />
        <h2 className="text-2xl font-bold text-gray-800">{companyName}</h2>
      </div>
      <div className="border-t border-gray-200 p-4">
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <span className="mr-3 text-xl">💰</span>
            <span>Revenue: ${revenue.toLocaleString()}</span>
          </li>
          <li className="flex items-center text-gray-700">
            <span className="mr-3 text-xl">📅</span>
            <span>Founded: {foundedOn}</span>
          </li>
          <li className="flex items-center text-gray-700">
            <span className="mr-3 text-xl">🏷️</span>
            <span>Category: {category}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyDetailsCard;
