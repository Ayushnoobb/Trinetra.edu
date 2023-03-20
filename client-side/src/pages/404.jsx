import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  return (
    <>
      <div className="not-found d-flex flex-column">
        <div className="d-flex">
          <div className="">404</div>
          <div className="px-4">Not Found</div>
        </div>
        <div className="">
          Sorry page {location.pathname.split("/").at(-1)}  you're looking for is not available
        </div>
      </div>
    </>
  );
}

export default NotFound;
