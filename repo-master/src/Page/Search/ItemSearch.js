import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ItemSearch({ location }) {
  return (
    <NavLink to={`/search/${location._id}`}>
      <div className="m-2 p-2 rounded-lg hover:bg-gray-100 transition duration-400">
        <div className="flex flex-warp">
          <div className="mx-2">
            <img
              src={location.image}
              className="w-12 h-12 object-cover rounded-lg"
            />
          </div>
          <div className="ml-2">
            <p className="text-lg font-thin pt-2">{location.province}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
