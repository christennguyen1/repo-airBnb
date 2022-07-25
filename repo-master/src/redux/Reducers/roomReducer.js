import {
  SET_DANH_SACH_LOCATION,
  SET_DANH_SACH_ROOM,
} from "../Constants/userConstant";

import {
  ADD_ROOM,
  GET_ROOM_DETAIL,
  GET_ROOM_LIST,
} from "../Constants/roomType";
import { RoomDetailModel } from "../../_core/models/roomDetailModel";
let initialState = {
  dsRoom: [],
  roomList: [],
  roomDetail: new RoomDetailModel(),
};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_ROOM: {
      state.dsRoom = action.payload;
      return { ...state };
    }
    case GET_ROOM_LIST: {
      state.roomList = action.payload;
      return { ...state };
    }

    case GET_ROOM_DETAIL: {
      state.roomDetail = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
