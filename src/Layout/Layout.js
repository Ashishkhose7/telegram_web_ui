import React from "react"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main-container">
      {/* <div className="accounts">
        accounts
      </div> */}
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
};

export default Layout;
