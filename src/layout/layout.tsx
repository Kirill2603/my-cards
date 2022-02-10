import React from "react";
import {Header} from "./header";
import {Login} from "./auth/login";
import { Routes, Route, Outlet } from "react-router-dom";
import {Registration} from "./auth/registration";
import {Forgot} from "./auth/forgot";
import {Cards} from "./cards/cards";
import {Profile} from "./auth/profile";

export const Layout = () => {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="register" element={<Registration />} />
              <Route path="forgot" element={<Forgot />} />\
              <Route path="cards" element={<Cards />} />
              <Route path="profile" element={<Profile />} />
          </Routes>
          <Outlet />
      </>
  )
}