import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const layout = () => {
  return (
    <>
      <ToastContainer autoClose={5000} pauseOnHover theme="colored" />
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default layout;
