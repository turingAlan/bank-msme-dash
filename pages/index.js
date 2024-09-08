"use client";

import authTypes from "contants/authTypes";
import { useAuth } from "context/UseAuth";
/* eslint-disable react/jsx-no-target-blank */
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Index() {
  const router = useRouter();

  const { authenticationStatus } = useAuth();

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

  return <></>;
}

export default Index;
