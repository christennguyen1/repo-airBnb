import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import NavDifferent from "../../components/NavDifferent/NavDifferent";
import { getRoomListAction } from "../../redux/Actions/roomAction";
import FooterNav from "../Footer/Footer";
import InforCard from "../InforCard/InforCard";
import MapAp from "../Map/Map";
import "./search.css";

export default function SearchLo() {
  const dispatch = useDispatch();

  const { roomList } = useSelector((state) => state.roomReducer);

  let { locationId } = useParams();

  useEffect(() => {
    dispatch(getRoomListAction(locationId));
  }, []);

  console.log("RoomList", roomList);
  const renderRoom = (roomList) => {
    return roomList.map((room, index) => {
      if (room.locationId != null) {
        return <InforCard data={room} key={index} />;
      }
    });
  };
  return (
    <div>
      <NavDifferent />
      <main className="flex mb-3">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">{renderRoom(roomList)}</div>
        </section>
        <section className="search_map">
          <div className="sticky top-20 w-full search_icon_map">
            <MapAp />
          </div>
        </section>
      </main>
      <FooterNav />
    </div>
  );
}
