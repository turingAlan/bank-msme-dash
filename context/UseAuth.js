import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import authTypes from "contants/authTypes";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticationStatus, setAuthenticationStatus] = useState(authTypes.LOGGEDOUT);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setAuthenticationStatus(isLoggedIn ? authTypes.LOGGEDIN : authTypes.LOGGEDOUT);
    setUserDetails(JSON.parse(localStorage.getItem("userDetails") || "null"));
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", authenticationStatus === authTypes.LOGGEDIN);
  }, [authenticationStatus]);

  const performAfterDelay = useCallback((callback, delay = 1000) => {
    return new Promise((resolve, reject) => {
      setAuthenticationStatus(authTypes.LOGGINGIN);
      setTimeout(async () => {
        try {
          const result = await callback();
          resolve(result);
        } catch (error) {
          setAuthenticationStatus(authTypes.LOGGEDOUT);
          reject(error);
        }
      }, delay);
    });
  }, []);

  const checkAndGetExistingUserDetails = useCallback((userDetails, method) => {
    const res = localStorage.getItem("loggedInUsers");
    const loggedUsers = JSON.parse(res) || [];
    const loggedUser = loggedUsers.find((user) => user.email === userDetails.email);
    if (loggedUser) {
      if (method === "login") {
        return loggedUser;
      } else {
        throw new Error("User with the given email already exists. Try login or create a new account.");
      }
    } else {
      if (method === "register") {
        return true;
      } else {
        throw new Error("User with the given email doesn't exist. Try signup.");
      }
    }
  }, []);

  const setUserDetailsInStorage = useCallback((userDetails) => {
    const res = localStorage.getItem("loggedInUsers");
    const loggedUsers = JSON.parse(res) || [];
    const updatedUserList = [...loggedUsers, userDetails];
    localStorage.setItem("loggedInUsers", JSON.stringify(updatedUserList));
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setUserDetails(userDetails);
  }, []);

  const loginUser = useCallback(async (userDetails) => {
    try {
      const userData = await performAfterDelay(() => {
        const completeUserDetails = checkAndGetExistingUserDetails(userDetails, 'login');
        setUserDetailsInStorage(completeUserDetails);
        setAuthenticationStatus(authTypes.LOGGEDIN);
        return completeUserDetails;
      });
      return userData;
    } catch (e) {
      throw new Error(e);
    }
  }, [performAfterDelay, checkAndGetExistingUserDetails, setUserDetailsInStorage]);

  const registerUser = useCallback(async (userDetails) => {
    try {
      const userData = await performAfterDelay(() => {
        checkAndGetExistingUserDetails(userDetails, 'register');
        setUserDetailsInStorage(userDetails);
        setAuthenticationStatus(authTypes.LOGGEDIN);
        return userDetails;
      });
      return userData;
    } catch (e) {
      throw new Error(e);
    }
  }, [performAfterDelay, checkAndGetExistingUserDetails, setUserDetailsInStorage]);

  const logoutUser = useCallback(async () => {
    await performAfterDelay(() => {
      localStorage.removeItem("userDetails");
      setUserDetails(null);
      setAuthenticationStatus(authTypes.LOGGEDOUT);
    });
  }, [performAfterDelay]);

  const value = {
    authenticationStatus,
    userDetails,
    loginUser,
    registerUser,
    logoutUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
