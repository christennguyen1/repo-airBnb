import { SET_TICKET_LIST } from "../Constants/ticketType";

const initialState = {
  ticketList: [],
};

export const ticketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TICKET_LIST: {
      state.ticketList = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
