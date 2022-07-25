import { message } from "antd";
import { history } from "../../App";
import httpServ from "../../serviceWorker/http.service";
import {
  ADD_ROOM,
  GET_ROOM_DETAIL,
  GET_ROOM_LIST,
} from "../Constants/roomType";

export const getRoomListAction = (locationId = "") => {
  return (dispatch) => {
    httpServ
      .getRoomList(locationId)
      .then((res) => {
        dispatch({
          type: GET_ROOM_LIST,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const addRoomAction = (data, locationId) => {
  return (dispatch) => {
    httpServ
      .addRoom(data)
      .then((res) => {
        message.success("Thêm thành công!");
        dispatch(getRoomListAction(locationId));
        history.push(`/admin/rooms/${locationId}`);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getRoomDetailAction = (id, locationId) => {
  return (dispatch) => {
    httpServ
      .getRoomDetail(id)
      .then((res) => {
        dispatch({
          type: GET_ROOM_DETAIL,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const updateRoomDetailAction = (data, id, locationId) => {
  return (dispatch) => {
    httpServ
      .updateRoomDetail(data, id)
      .then((res) => {
        message.success("Cập nhật thành công!");
        history.push(`/admin/rooms/${locationId}`);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const deleteRoomAction = (id, locationId) => {
  return (dispatch) => {
    httpServ
      .deleteRoom(id)
      .then((res) => {
        httpServ
          .getRoomList(locationId)
          .then((res) => {
            message.success("Xóa thành công!");
            dispatch({
              type: GET_ROOM_LIST,
              payload: res.data,
            });
            history.push(`/admin/rooms/${locationId}`);
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const updateImgRoomAction = (roomImg, id) => {
  return (dispatch) => {
    httpServ
      .updateImgRoom(roomImg, id)
      .then((res) => {
        message.success("Cập nhật ảnh thành công!");
        history.go();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
