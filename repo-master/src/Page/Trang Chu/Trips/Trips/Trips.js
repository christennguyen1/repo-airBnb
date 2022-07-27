import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import UserNav from "../../../../components/NavHeader/UserNav";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../../../configUrl/configURL";
import "./Trips.css";

import FooterNav from "../../../Footer/Footer";
import InforTrips from "../InforTrips/InforTrips";
import MyPofolio from "../MyPofolio/MyPofolio";
import httpServ from "../../../../serviceWorker/http.service";
import NavDifferent from "../../../../components/NavDifferent/NavDifferent";
import { getListTicketsByUserAction, getUserInforAction } from "../../../../redux/Actions/userAction";
import { history } from "../../../../App";

export default function Trips() {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { userInfor, userInforDetailsTickets, userInforDetails } = useSelector(
    (state) => state.userReducer
  );

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    dispatch(getListTicketsByUserAction(id));
    dispatch(getUserInforAction(id));
    // history.push(`/profile/${id}`);
  }, []);

 

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  let userInforDetailsTicketsSliced;
  showMore
    ? (userInforDetailsTicketsSliced = userInforDetailsTickets.slice(
      0,
      userInforDetailsTickets.length
    ))
    : (userInforDetailsTicketsSliced = userInforDetailsTickets.slice(0, 2));

  const renderTable = (phong) => {
    return phong.map((phongItem, index) => {
      if (phongItem.roomId != null && index < 4) {
        return <InforTrips phong={phongItem} key={index} />;
      }
    });
  };
  return (
    <div>
      <NavDifferent />
      <div className="mx-20 my-16">
        <div className="manager_pofolio">
          <div className="border rounded-lg block xl:sticky top-28 mr-10 my_pofolio">
            <MyPofolio />
          </div>
          <div className="my_trips">
            <h1 className="text-3xl">Hi I'm {userInforDetails?.name}</h1>
            <button
              onClick={() => {
                dispatch(getUserInforAction(userInfor._id));
                setTimeout(() => {
                     history.push(`/edituser/${userInfor._id}`);
                   }, 500);
              }}>
              <h3 className="underline cursor-pointer text-lg">Edit profile</h3>
            </button>
            <div className="flex flex-warp mt-8">
              <i className="fa-solid fa-star text-xl mr-1"></i>
              <h3 className="text-2xl">0 review</h3>
            </div>
            <div className="w-full">
              {renderTable(userInforDetailsTicketsSliced)}
            </div>
            <div className="flex justify-center mt-5">
              {userInforDetailsTickets.length != 0 ? (
                userInforDetailsTickets.length >= 2 ? (
                  <button
                    className="p-2 rounded font-semibold bg-white hover:text-white hover:bg-red-500"
                    style={{ border: "2px #ff385c solid", color: "#ff385c" }}
                    onClick={handleShowMore}
                  >
                    {showMore ? "Ẩn bớt" : "Xem thêm"}
                  </button>
                ) : (
                  <></>
                )
              ) : (
                <p>Lịch sử đặt vé còn trống!</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterNav />
      </div>
    </div>
  );
}
