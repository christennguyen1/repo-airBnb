import React from "react";
import { useSelector } from "react-redux";

import ItemRoom from "../ItemRoom/ItemRoom";

export default function ListRoom() {
  let { dsRoom } = useSelector((state) => state.roomReducer);

  return (
    <div className="container mx-auto pt-16">
      <h1 className="font-lg text-4xl mb-10">Explore Nearby</h1>
      <div style={{ flexWrap: "wrap" }} className="flex flex-wrap">
        {dsRoom.map((item, index) => {
          if (item.locationId != null && index < 20) {
            return <ItemRoom data={item} key={item._id} />;
          }
        })}
      </div>
    </div>
  );
}
