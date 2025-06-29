import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import api from "../utils/axios";
import { removeUser } from "../utils/userSlice";
import { logout } from "../utils/logoutSlice";

const NavBar = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout= async () => {
    try {
     console.log("logout")
     const res =  await api.post("auth/logout");
     dispatch(removeUser());
     dispatch(logout());
     navigate("/login")
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">🧑‍💻 Dev Tinder</Link>
      </div>
      {user && <div className="flex gap-2">
        <div className="flex items-center">Welcome {user.firstName}</div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mx-5"
          >
            <div className="w-10 rounded-full">
              <img
                alt="user photo"
                src={user.photoUrl}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/connections">Connections</Link>
            </li>
             <li>
              <Link to="/requests">Requests</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  );
};

export default NavBar;
