import React, { useEffect, useState } from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import { useRouter } from "next/router";
import authTypes from "contants/authTypes";
import { useAuth } from "context/UseAuth";
import {
  dashHeaderStats,
  onBoarderHeaderStatsData,
  pendingHeaderStatsData,
} from "contants/headerStatsData";

function Admin({ children }) {
  const { authenticationStatus } = useAuth();
  const router = useRouter();

  const [headerStatsValue, setHeaderStatsValue] = useState(dashHeaderStats);

  useEffect(() => {
    if (authenticationStatus === authTypes.LOGGEDOUT) {
      router.push("/auth/login");
    } else if (
      authenticationStatus === authTypes.LOGGEDIN &&
      !router.pathname.includes("/admin")
    ) {
      router.push("/admin/dashboard");
    }

    if (router.pathname.includes("onboarded")) {
      setHeaderStatsValue(onBoarderHeaderStatsData);
    } else if (router.pathname.includes("pending")) {
      setHeaderStatsValue(pendingHeaderStatsData);
    }
  }, [authenticationStatus, router]);

  return (
    <>
      <Sidebar />
      <div className="relative bg-blueGray-100 md:ml-64">
        <AdminNavbar />
        <div className="flex flex-col">
          <HeaderStats headerData={headerStatsValue} />
          <div className="-m-24 mx-auto w-full px-4 md:px-10">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Admin;
