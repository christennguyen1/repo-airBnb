import axios from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../configUrl/configURL";
import { SET_DANH_SACH_ROOM } from "../Constants/userConstant";

export const getRoomAction = (tenPhim = "") => {
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
