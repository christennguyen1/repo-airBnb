import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../configUrl/configURL";
import httpServ from "../../serviceWorker/http.service";
import UserNav from "../../components/NavHeader/UserNav";
import FooterNav from "../Footer/Footer";
import "./register.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { getDangKi } from "../../redux/Actions/userActions";

export default function Register() {
  let history = useHistory();
  let dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: "",
      address: "",
    },
    onSubmit: (values) => {
      dispatch(getDangKi(values));
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit(event);
      }}
      className="min-h-screen flex items-stretch text-white "
    >
      <div
        className="lg:flex w-1/2 object-cover hidden bg-gray-500 bg-no-repeat bg-cover items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
        }}
      >
        <div className="absolute bg-black opacity-20 inset-0 z-0" />
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
      >
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
        </div>
        <div className="w-full py-3 z-20">
          <h1 className="text-white text-5xl font-bold">Đăng kí</h1>
          <div action className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto mb-10">
            <div className="pb-1 pt-2">
              <input
                type="text"
                onChange={formik.handleChange}
                name="name"
                id="name"
                placeholder="Họ và tên"
                className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black"
              />
            </div>
            <div className="pb-2 pt-2">
              <input
                type="email"
                onChange={formik.handleChange}
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black"
              />
            </div>
            <div className="pb-2 pt-2">
              <input
                onChange={formik.handleChange}
                className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black"
                type="password"
                name="password"
                id="password"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="pb-2 pt-2">
              <input
                onChange={formik.handleChange}
                className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black"
                type="text"
                name="phone"
                id="phone"
                placeholder="Số điện thoại"
              />
            </div>
            <div className="pb-2 pt-2 text-white">
              <input
                onChange={formik.handleChange}
                className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black"
                type="date"
                name="birthday"
                id="birthday"
                placeholder="Ngày sinh nhật"
              />
            </div>
            <div className="pb-2 pt-2">
              <select
                onChange={formik.handleChange}
                name="gender"
                className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black"
              >
                <option value="select">Giới tính</option>
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
              </select>
            </div>
            <div className="pb-2 pt-2">
              <input
                onChange={formik.handleChange}
                className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black"
                type="text"
                name="address"
                id="address"
                placeholder="Địa chỉ"
              />
            </div>
            <div className="px-4 pt-5">
              <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                Đăng kí
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
