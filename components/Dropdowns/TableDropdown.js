import React, { useEffect, useRef } from "react";
import { getMsmeStatusColor } from "utility/utils";

const TableDropdown = ({
  title = "",
  value = "",
  setValue,
  values = [],
  icon,
}) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);

  const dropdownRef = useRef(null);

  const handleValueChange = (e) => {
    setValue(e.target.name);
    setDropdownPopoverShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownPopoverShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline w-fit" ref={dropdownRef}>
      <button
        className={`flex items-center gap-1 rounded-md bg-${getMsmeStatusColor(value)} px-5 py-2 text-sm text-white focus:ring-2 focus:ring-emerald-600 md:me-0`}
        type="button"
        onClick={() => {
          dropdownPopoverShow
            ? setDropdownPopoverShow(false)
            : setDropdownPopoverShow(true);
        }}
      >
        {icon ? <i className={icon}></i> : null}
        {value}
      </button>

      <div
        className={`${dropdownPopoverShow ? "absolute" : "hidden"} left-[0px] top-[40px] z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow`}
      >
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="sortDropdownButton"
        >
          {values.map((availableValue, idx) => {
            return (
              <li key={idx} name={availableValue} onClick={handleValueChange}>
                <a
                  name={availableValue}
                  className={`block px-4 py-2 hover:bg-gray-100 ${value === availableValue ? "bg-gray-200 hover:bg-gray-200" : ""}`}
                >
                  {availableValue}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TableDropdown;
