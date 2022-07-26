import { message } from "antd";
import axios from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../configUrl/configURL";
import httpServ from "../../serviceWorker/http.service";
import { SET_DANH_SACH_ROOM } from "../Constants/userConstant";
import { history } from "../../App";
import localStorageServ from "../../serviceWorker/locaStorage.service";

export const getRoomAction = () => {
  return (dispatch) => {
    axios({
      url: DOMAIN + "/api/rooms",
      method: "GET",
      headers: {
        tokenByClass: TOKEN_CYBERSOFT,
      },
    })
      .then((res) => {
        dispatch({
          type: SET_DANH_SACH_ROOM,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateUserInfor = (value, id) => {
  return (dispatch) => {
    httpServ
      .updateUserInfor(value, id)
      .then((res) => {
        message.success("Cập nhật thành công");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};


export const getDangKi = (values) => {
  return (dispatch) => {
    httpServ
    .dangKi(values)
    .then((res) => {
      message.success("Đăng kí thành công");
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    })
    .catch((err) => {
      message.error(err.message);
      console.log("err", err);
    });
};
}