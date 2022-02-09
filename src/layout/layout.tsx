import React from "react";
import {Header} from "./header";
import {Login} from "./auth/login";
import {Registration} from "./auth/registration";
import {Forgot} from "./auth/forgot";

export const Layout = () => {
  return (
      <>
          <Header />
          <Forgot />
          <Login/>
          <Registration />
      </>
  )
}