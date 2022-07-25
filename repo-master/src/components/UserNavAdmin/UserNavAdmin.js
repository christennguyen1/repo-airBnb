import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { updateImgUserAction } from "../../redux/Actions/userAction";
import { LOGIN } from "../../redux/Constants/userType";
import { Dropdown, Menu } from "antd";
import localStorageServ from "../../serviceWorker/locaStorage.service";
import { SET_USER_INFOR } from "../../redux/Constants/userConstant";

export default function UserNav() {
  const history = useHistory();
  let { userInfor } = useSelector((state) => state.userReducer);
  let dispatch = useDispatch();
  const handleLogout = () => {
    localStorageServ.userInfor.remove();
    localStorageServ.token.remove();
    dispatch({
      type: SET_USER_INFOR,
      payload: null,
    });
    setTimeout(() => {
      history.push("/login");
    }, 1000);
  };

  const menu = (
    <Menu
      style={{
        width: 100,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Menu.Item
        key={1}
        className="hover:bg-gray-200 "
        style={{ width: "80%", borderRadius: 14 }}
      >
        <div
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </div>
      </Menu.Item>
      <Menu.Item
        key={2}
        style={{ width: "80%", borderRadius: 14 }}
        className="hover:bg-gray-200 "
      >
        <div
          onClick={() => {
            history.push(`/trips/${userInfor._id}`);
          }}
        >
          Profile
        </div>
      </Menu.Item>
      <Menu.Item
        key={3}
        style={{ width: "80%", borderRadius: 14 }}
        className="hover:bg-red-600 hover:text-white "
      >
        <div
          onClick={() => {
            if (window.confirm("Bạn có chắc muốn đăng xuất không?")) {
              handleLogout();
            }
          }}
        >
          LogOut
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="cursor-pointer">
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{
          pointAtCenter: true,
        }}
      >
        {userInfor?.avatar ? (
          <img
            style={{ width: 35, height: 35, borderRadius: "100%" }}
            src={userInfor?.avatar}
            alt={userInfor.name}
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
      </Dropdown>
    </div>
  );

  // userLogin ? (
  //   <div className="flex justify-center items-center space-x-3">
  //     <span>{userLogin.name}</span>
  //     <button
  //     // onClick={() => {
  //     //   dispatch(updateImgUserAction(userLogin));
  //     // }}
  //     >
  //       <img
  //         style={{ width: 50, height: 50, borderRadius: "100%" }}
  //         src={userLogin.avatar}
  //         alt="..."
  //       />
  //     </button>
  //     <Button
  //       onClick={() => {
  //         if (window.confirm("Bạn có chắc muốn đăng xuất không?")) {
  //           handleLogout();
  //         }
  //       }}
  //       className="bg-red-600 text-white rounded cursor-pointer"
  //     >
  //       Đăng xuất
  //     </Button>
  //   </div>
  // ) : (
  //   <div className="space-x-3">
  //     <NavLink to="/login">
  //       <Button className="bg-blue-600 text-white rounded cursor-pointer">
  //         Đăng nhập
  //       </Button>
  //     </NavLink>
  //     <NavLink to="/register">
  //       <Button className="bg-red-600 text-white rounded cursor-pointer">
  //         Đăng kí
  //       </Button>
  //     </NavLink>
  //   </div>
  // );
}
