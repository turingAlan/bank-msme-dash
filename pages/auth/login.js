import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Auth from "./layout.js";
import Image from "next/image.js";
import { toast } from "react-hot-toast";
import { useAuth } from "context/UseAuth.js";
import authTypes from "contants/authTypes.js";

export default function Login() {

  const { loginUser, authenticationStatus } = useAuth();

  const toastRef = useRef(null)

  const [authData,setAuthData] = useState({
    email:"",
    password:""
  })

  const userLogin = async()=>{
    toastRef.current = toast.promise(loginUser(authData),{
      loading:"Loading",
      success:(data)=>`Welcome ${data.name}`,
      error:(error)=>`${error}`
    })
  }

  const handleAuthDetails = (e)=>{
    setAuthData((prevData)=>{
      return({
        ...prevData,
        [e.target.name]:e.target.value
      })
    })
  }

  useEffect(()=>{
    return ()=>{
       if(toastRef.current!==null){
          toast.dismiss(toastRef.current)
       }
    }
  },[])

  return (
  <Auth>
    <>
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full content-center items-center justify-center">
          <div className="w-full px-4 lg:w-4/12">
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-blueGray-200 shadow-lg">
              <div className="mb-0 rounded-t px-6 py-6">
                <div className="mb-3 text-center"></div>
                <Image
                  src={"/img/bank/yes.png"}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
                <hr className="border-b-1 mt-6 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <form>
                  <div className="relative mb-3 w-full">
                    <label
                      className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleAuthDetails}
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative mb-3 w-full">
                    <label
                      className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleAuthDetails}
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex cursor-pointer items-center">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox ml-1 h-5 w-5 rounded border-0 text-blueGray-700 transition-all duration-150 ease-linear"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      className="mb-1 mr-1 w-full rounded bg-blueGray-800 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blueGray-600"
                      type="button"
                      onClick = {userLogin}
                      disabled = {authenticationStatus===authTypes.LOGGINGIN}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="relative mt-6 flex flex-wrap">
              <div className="w-1/2"></div>
              <div className="w-1/2 text-right">
                <Link legacyBehavior href="/auth/register">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  </Auth>
  );
}
