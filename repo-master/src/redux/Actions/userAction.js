import {
  GET_USER_LIST,
  LOGIN,
  SET_USER_ADMIN_LIST,
  SET_USER_DETAILS_INFOR,
  SET_USER_DETAILS_TICKET_INFOR,
} from "../Constants/userType";
import { message } from "antd";
import { history } from "../../App";
import httpServ from "../../serviceWorker/http.service";
import localStorageServ from "../../serviceWorker/locaStorage.service";
import { SET_EDIT_TAM, SET_USER_INFOR } from "../Constants/userConstant";

export const loginUserAction = (data) => {
  return (dispatch) => {
    httpServ
      .loginUser(data)
      .then((res) => {
        message.success("Đăng nhập thành công!");
        dispatch({
          type: LOGIN,
          payload: res.data.user,
        });
        localStorageServ.userInfor.set(res.data.user);
        localStorageServ.token.set(res.data.token);
        setTimeout(() => {
          history.push("/");
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
        message.error("Tài khoản hoặc mật khẩu không đúng!");
        history.push("/login");
      });
  };
};

export const getUserListAction = (user = "") => {
  return (dispatch) => {
    httpServ
      .getUserList(user)
      .then((res) => {
        dispatch({
          type: GET_USER_LIST,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const addUserAdminAction = (data) => {
  return (dispatch) => {
    httpServ
      .addUserAdmin(data)
      .then((res) => {
        message.success("Thêm thành công");
        dispatch({
          type: SET_USER_ADMIN_LIST,
          payload: res.data,
        });
        setTimeout(() => {
          history.push("/admin/user");
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const deleteUserAction = (id) => {
  return (dispatch) => {
    httpServ
      .deleteUser(id)
      .then((res) => {
        message.success("Xóa thành công!");
        dispatch(getUserListAction());
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getUserInforAction = (id) => {
  return (dispatch) => {
    httpServ
      .getUserInfor(id)
      .then((res) => {
        dispatch({
          type: SET_USER_DETAILS_INFOR,
          payload: res.data,
        });
        dispatch({
          type: SET_EDIT_TAM,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getListTicketsByUserAction = (id) => {
  return (dispatch) => {
    httpServ
      .getListTicketsByUser(id)
      .then((res) => {
        dispatch({
          type: SET_USER_DETAILS_TICKET_INFOR,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const updateUserInforAction = (value, id) => {
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

export const updateAvatarUserAction = (avatar, id) => {
  return (dispatch) => {
    httpServ
      .updateAvatarUser(avatar)
      .then((res) => {
        dispatch({
          type: SET_USER_INFOR,
          payload: res.data,
        });
        history.push(`/profile/${id}`);
        message.success("Cập nhật ảnh đại diện thành công");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
