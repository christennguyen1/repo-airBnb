import { combineReducers } from "redux";
import { locationReducer } from "./locationReducer";
import { roomReducer } from "./roomReducer";
import { spinnerReducer } from "./spinnerReducer";
import { ticketReducer } from "./ticketReducer";

import { userReducer } from "./UserReducer";
import { valueateReducer } from "./valueateReducer";

export const rootReducer = combineReducers({
  userReducer,
  roomReducer,
  spinnerReducer,
  locationReducer,
  valueateReducer,
  ticketReducer,
});
