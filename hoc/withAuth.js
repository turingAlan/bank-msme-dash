import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "hooks/UseAuth";
import authTypes from "contants/authTypes";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { authenticationStatus, loginUser, logoutUser, registerUser, userDetails } = useAuth();
    const router = useRouter();


    useEffect(() => {
      if (authenticationStatus === authTypes.LOGGEDOUT && !router.pathname.includes("/auth")) {
        router.push("/auth/login");
      } else if (authenticationStatus === authTypes.LOGGEDIN && router.pathname !== "/admin/dashboard") {
        router.push("/admin/dashboard");
      }
    }, [authenticationStatus, router]);

    if (authenticationStatus === authTypes.LOGGINGIN) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} authenticationStatus={authenticationStatus} loginUser={loginUser} logoutUser={logoutUser} registerUser={registerUser} userDetails={userDetails} />;
  };
};

export default withAuth;
