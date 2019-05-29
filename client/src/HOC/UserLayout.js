import React from "react";
import { Link } from "react-router-dom";
import "./userlayout.css";

const links = [
  {
    name: "My Account",
    linkTo: "/user/dashboard"
  },
  {
    name: "User Information",
    linkTo: "/user/profile"
  },
  {
    name: "My Cart",
    linkTo: "/user/cart"
  }
];

const admin = [
  {
    name: "Site Info",
    linkTo: "/admin/site_info"
  },
  {
    name: "Add Product",
    linkTo: "/admin/addproduct"
  },
  {
    name: "Edit Product",
    linkTo: "/admin/editproduct"
  },
  {
    name: "Manage Categories",
    linkTo: "/admin/categories"
  }
];

function UserLayout(props) {
  const generateLinks = links =>
    links.map((item, i) => (
      <div>
        <Link to={item.linkTo} key={i}>
          {item.name}
        </Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="user_container">
        <div className="user_left_nav">
          <h2>My Account</h2>
          <div className="links">{generateLinks(links)}</div>
           {
                 props.user.isAdmin ? (
                    <div>
                      <h2>Admin</h2>
                      <div className="links">{generateLinks(admin)}</div>
                    </div>
                  ) : null
           }
        </div>
        <div className="user_right">{props.children}</div>
      </div>
    </div>
  );
}

export default UserLayout;
