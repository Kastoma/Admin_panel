// packages
import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
// components


const MainAdminPage = () => {
  return (
      <div style={{width: '100%'}}>
          <Header></Header>
        <div className="body-sidebar">
          <Link id='Sidebar-button' className="body-link" to="/categories">Categories</Link>
          <Link id='Sidebar-button' className="body-link" to="/users">Users</Link>
          <Link id='Sidebar-button' className="body-link" to="/products">Products</Link>
          <Link id='Sidebar-button' className="body-link" to="/orders">Orders</Link>
        </div>
    </div>
  );
};

export default MainAdminPage;
