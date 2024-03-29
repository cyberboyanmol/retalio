import React from "react";
import { useMediaQuery } from "react-responsive";
import { HostSidebar, ProtectedRoute } from "../../components";
import { Navigate, Route, Routes } from "react-router-dom";
import HostDetails from "./Details";
import HostLocation from "./Location";
import Amenities from "./Amenities";
import Features from "./Features";
import DoAndDonts from "./DoAndDon'ts";
import HostRules from "./HostRules";
const BecomeAHost = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const routeLinks = [
    {
      element: <HostDetails />,
      path: "/details",
    },
    {
      element: <HostLocation />,
      path: "/location",
    },
    {
      element: <Amenities />,
      path: "/amenities",
    },
    {
      element: <HostDetails />,

      path: "/photos",
    },
    { element: <Features />, path: "/feature" },
    { element: <DoAndDonts />, path: "/do" },
    { element: <HostDetails />, path: "/pricing" },
    {
      element: <HostRules />,
      path: "/rules",
    },
    { element: <HostDetails />, path: "/timing" },
    {
      element: <HostDetails />,
      path: "/contact",
    },
    { element: <HostDetails />, path: "/gst" },
    {
      element: <HostDetails />,
      path: "/bank",
    },
    {
      element: <HostDetails />,
      path: "/review",
    },
    {
      element: <HostDetails />,
      path: "/termsandcondition",
    },
  ];
  return (
    <div className="mx-6 flex flex-col w-auto justify-center my-4  mb-11  h-full ">
      <div className="w-full flex items-start ">
        <div className="hidden       lg:flex w-1/5 shadow-md px-3 py-4     rounded-lg   ">
          <HostSidebar />
        </div>
        <div className="w-full h-full shadow-md px-3 py-4  lg:hidden">
          <HostSidebar />
        </div>
        <div className="hidden  w-4/5  lg:flex flex-grow">
          <Routes>
            {!isTabletOrMobile && (
              <Route
                path="/"
                element={<Navigate to="/becomeahost/details" />}
              />
            )}
            {routeLinks?.map((item, index) => (
              <Route
                key={index}
                path={`${item.path}`}
                element={<ProtectedRoute>{item.element}</ProtectedRoute>}
              />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default BecomeAHost;
