import React, { useEffect } from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import { useRouter } from "next/router";
import authTypes from "contants/authTypes";
import { useAuth } from "context/UseAuth";

export default function Auth({ children }) {
  const { authenticationStatus } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (
      authenticationStatus === authTypes.LOGGEDOUT &&
      !router.pathname.includes("/auth")
    ) {
      router.push("/auth/login");
    } else if (
      authenticationStatus === authTypes.LOGGEDIN &&
      router.pathname !== "/admin/dashboard"
    ) {
      router.push("/admin/dashboard");
    }
  }, [authenticationStatus, router]);

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative h-full min-h-screen w-full py-20 sm:py-40">
          <div
            className="absolute top-0 h-full w-full bg-blueGray-800 bg-full bg-no-repeat"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
        </section>
      </main>
    </>
  );
}
