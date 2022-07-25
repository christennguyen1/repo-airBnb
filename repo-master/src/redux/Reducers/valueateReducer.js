import { ValueateDetailModel } from "../../_core/models/valueateDetailModel";
import {
  GET_VALUEATE_LIST,
  SET_VALUEATE_DETAIL,
} from "../Constants/valueateType";

const initialState = {
  valueateList: [],
  valueateDetail: new ValueateDetailModel(),
};

export const valueateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VALUEATE_LIST: {
      state.valueateList = payload;
      return { ...state };
    }
    case SET_VALUEATE_DETAIL: {
      state.valueateDetail = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
