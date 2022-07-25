import { message } from "antd";
import { history } from "../../App";
import httpServ from "../../serviceWorker/http.service";
import {
  ADD_LOCATION,
  GET_LOCATION_DETAIL,
  GET_LOCATION_LIST,
} from "../Constants/locationType";

export const getLocationListAction = (location = "") => {
  return (dispatch) => {
    httpServ
      .getLocationList(location)
      .then((res) => {
        dispatch({
          type: GET_LOCATION_LIST,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const addLocationAction = (data) => {
  return (dispatch) => {
    httpServ
      .addLocation(data)
      .then((res) => {
        message.success("Thêm thành công");
        dispatch({
          type: ADD_LOCATION,
          payload: res.data,
        });
        setTimeout(() => {
          history.push("/admin/location");
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getLocationDetailAction = (id) => {
  return (dispatch) => {
    httpServ
      .getLocationDetail(id)
      .then((res) => {
        dispatch({
          type: GET_LOCATION_DETAIL,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const updateLocationAction = (data, id) => {
  return (dispatch) => {
    httpServ
      .updateLocationDetail(data, id)
      .then((res) => {
        message.success("Cập nhật thành công");
        setTimeout(() => {
          history.push("/admin/location");
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const deleteLocationAction = (id) => {
  return (dispatch) => {
    httpServ
      .deleteLocation(id)
      .then((res) => {
        httpServ
          .getLocationList()
          .then((res) => {
            message.success("Xóa thành công!");
            dispatch({
              type: GET_LOCATION_LIST,
              payload: res.data,
            });
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

export const updateImgLocationAction = (locationImg, id) => {
  return (dispatch) => {
    httpServ
      .updateImgLocation(locationImg, id)
      .then((res) => {
        message.success("Cập nhật ảnh thành công!");
        httpServ
          .getLocationList()
          .then((res) => {
            dispatch({
              type: GET_LOCATION_LIST,
              payload: res.data,
            });
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
