import httpServ from "../../serviceWorker/http.service";
import { SET_TICKET_LIST } from "../Constants/ticketType";

export const getTicketListAction = () => {
  return (dispatch) => {
    httpServ
      .getListTickets()
      .then((res) => {
        dispatch({
          type: SET_TICKET_LIST,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
