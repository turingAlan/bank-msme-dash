import { useAuth } from "context/UseAuth";
import React, { useEffect, useRef } from "react";

const UserDropdown = () => {
  const { logoutUser } = useAuth();

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown if clicked outside of it
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
    <div className="relative" ref={dropdownRef}>
      <button
        id="dropdownUserAvatarButton"
        data-dropdown-toggle="dropdownAvatar"
        className="flex rounded-full bg-white text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:me-0"
        type="button"
        onClick={() => {
          dropdownPopoverShow
            ? setDropdownPopoverShow(false)
            : setDropdownPopoverShow(true);
        }}
      >
        <img
          className="h-8 w-8 rounded-full object-contain"
          src="/img/yes-bank-800x800.png"
          alt="user photo"
        />
      </button>

      <div
        id="dropdownAvatar"
        className={`${dropdownPopoverShow ? "absolute" : "hidden"} right-[0px] top-[40px] z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Yes Bank</div>
          <div className="truncate font-medium">yesbank@sellersetu.in</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownUserAvatarButton"
        >
          <li>
            <a
              href="/admin/dashboard"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2" onClick={logoutUser}>
          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
