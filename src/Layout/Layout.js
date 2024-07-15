import React, { useEffect } from "react"
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname
    if(path == '/'){
        navigate('dashboard')
    } 
  }, [])

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
