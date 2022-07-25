import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../../App";
import { SET_USER_INFOR } from "../../redux/Constants/userConstant";
import { LOGIN } from "../../redux/Constants/userType";
import localStorageServ from "../../serviceWorker/locaStorage.service";

export default function UserNav() {
  let { userInfor } = useSelector((state) => state.userReducer);

  let dispatch = useDispatch();
  const handleLogout = () => {
    localStorageServ.userInfor.remove();
    localStorageServ.token.remove();
    setTimeout(() => {
      history.push("/login");
    }, 1500);
    dispatch({
      type: LOGIN,
      payload: null,
    });
  };
  return userInfor ? (
    <div className="btn-group">
      <button
        type="button"
        className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md transition duration-150 focus:outline-none focus:bg-gray-600"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="border-r pr-2 pl-2">
          <i className="fa-solid fa-bars w-4" />
        </div>
        <div>
          {userInfor.avatar ? (
            <img
              src={userInfor.avatar}
              className="object-cover w-8 h-8 rounded-2xl"
            />
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="#707070"
              className="w-8 h-8"
            >
              <path d="M16 .7C7.563.7.7 7.563.7 16S7.563 31.3 16 31.3 31.3 24.437 31.3 16 24.437.7 16 .7zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 016.451-4.4A6.507 6.507 0 019.5 14c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 01-3.019 5.491 12.42 12.42 0 016.452 4.4C23.605 26.816 20.021 28.7 16 28.7z"></path>
            </svg>
          )}
        </div>
      </button>
      <div className="dropdown-menu dropdown-menu-right rounded-xl">
        <div className="border-b">
          {userInfor.type === "ADMIN" ? (
            <NavLink to="/admin/dashboard">
              <button
                className="dropdown-item focus:outline-none focus:bg-gray-300 focus:text-black font-bold"
                type="button"
              >
                DashBoard
              </button>
            </NavLink>
          ) : (
            <></>
          )}
          <NavLink to="/">
            <button
              className="dropdown-item pb-2 focus:outline-none focus:bg-gray-300 focus:text-black"
              type="button"
            >
              Notifications
            </button>
          </NavLink>
          <NavLink to={`/profile/${userInfor._id}`}>
            <button
              className="dropdown-item pb-2 focus:outline-none focus:bg-gray-300 focus:text-black"
              type="button"
            >
              Profile
            </button>
          </NavLink>
        </div>
        <div className="border-b">
          <button
            className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Host Your Home
          </button>
          <button
            className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Host Your Experience
          </button>
          <button
            className="dropdown-item pt-2 pb-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Account
          </button>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="dropdown-item text-red-500 focus:outline-none focus:bg-gray-300"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="btn-group">
      <button
        type="button"
        className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md transition duration-150 focus:outline-none focus:bg-white"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="border-r pr-2 pl-2">
          <i className="fa-solid fa-bars w-4" />
        </div>
        <div className="pl-1 pr-1">
          <i className="fa-solid fa-circle-user w-4" />
        </div>
      </button>
      <div className="dropdown-menu dropdown-menu-right rounded-xl">
        <div className="border-b">
          <NavLink to="/">
            <button
              className="dropdown-item focus:outline-none focus:bg-gray-300 focus:text-black"
              type="button"
            >
              Home
            </button>
          </NavLink>
          <NavLink to="/login">
            <button
              className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
              type="button"
            >
              Sign In
            </button>
          </NavLink>
          <NavLink to="/register">
            <button
              className="dropdown-item pt-2 pb-2 focus:outline-none focus:bg-gray-300 focus:text-black"
              type="button"
            >
              Sign Up
            </button>
          </NavLink>
        </div>
        <div>
          <button
            className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Host Your Home
          </button>
          <button
            className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Host Your Experience
          </button>
          <button
            className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Help
          </button>
        </div>
      </div>
    </div>
  );
}
