import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isloginPage, setIsLoginPage] = useState(true);

  const isSignIn = () => {
    setIsLoginPage(!isloginPage);
  };
  return (
    <>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg"
          alt="Netflix Logo"
          className="w-full absolute"
        />
        <form className=" absolute bg-black text-white w-3/12 my-40 p-12 right-0 left-0 mx-auto opacity-[80%]">
          <h1 className="text-3xl font-bold p-5 ">
            {" "}
            {isloginPage ? "Sign In" : "Sign Up"}
          </h1>
          {!isloginPage && (
            <input
              type="text"
              placeholder="FullName"
              className=" p-4 my-4 w-full rounded-lg bg-slate-700"
            />
          )}
          <input
            type="text"
            placeholder="Username"
            className=" p-4 my-4 w-full rounded-lg bg-slate-700"
          />
          <input
            type="password"
            placeholder="Password"
            className=" p-4 my-4 w-full rounded-lg bg-slate-700"
          />
          <button className="p-4 my-4 w-full bg-red-700 rounded-lg">
            {isloginPage ? "Sign In" : "Sign Up"}
          </button>
          {isloginPage ? (
            <span>
              Don't have an account?{" "}
              <a onClick={isSignIn} href="#" className="text-blue-500">
                Sign Up
              </a>
            </span>
          ) : (
            <span>
              Already account?{" "}
              <a onClick={isSignIn} href="#" className="text-blue-500">
                Sign In
              </a>
            </span>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
