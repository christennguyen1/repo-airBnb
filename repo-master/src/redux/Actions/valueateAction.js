import { message } from "antd";
import { history } from "../../App";
import httpServ from "../../serviceWorker/http.service";
import {
  GET_VALUEATE_LIST,
  SET_VALUEATE_DETAIL,
} from "../Constants/valueateType";

export const getValueateListByRoomAction = (roomId) => {
  return (dispatch) => {
    httpServ
      .getValueateListByRoom(roomId)
      .then((res) => {
        dispatch({
          type: GET_VALUEATE_LIST,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const addValueateAction = (data, roomId, userId) => {
  return (dispatch) => {
    httpServ
      .addValueateByRoom(data, roomId, userId)
      .then((res) => {
        dispatch(getValueateListByRoomAction(roomId));
        message.success("Thêm đánh giá thành công!");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const deleteValueateAction = (valueateId, roomId) => {
  return (dispatch) => {
    httpServ
      .deleteValueateByRoom(valueateId)
      .then((res) => {
        message.success("Xoá đánh giá thành công!");
        dispatch(getValueateListByRoomAction(roomId));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getValueateDetailAction = (valueateId) => {
  return (dispatch) => {
    httpServ
      .getValueateDetail(valueateId)
      .then((res) => {
        dispatch({
          type: SET_VALUEATE_DETAIL,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const updateValueateAction = (data, valueateId, roomId) => {
  return (dispatch) => {
    httpServ
      .updateValueateDetail(data, valueateId)
      .then((res) => {
        console.log("res", res);
        // dispatch(getValueateListByRoomAction(roomId));
        message.success("Cập nhật đánh giá thành công!");
        history.push(`/admin/reviewsByRoom/${roomId}`);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
