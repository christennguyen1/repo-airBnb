import React from "react";
import { NavLink } from "react-router-dom";

export default function InforCard({ data }) {
  return (
    <NavLink to={`/detail/${data._id}`} className="block w-full cursor-pointer">
      <div className="flex py-7 px-2 mt-3 border cursor-pointer hover:shadow-lg transform hover:translate-x-2 transtion duration-200 ease-out rounded-2xl">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <img
            src={data.image}
            layout="fill"
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between pr-4">
            <p>{data.locationId.name}</p>
            <div className="bg-gray-500 w-8 h-8 p-1 text-center rounded-lg">
              <i className="fa-solid fa-heart text-white cursor-pointer hover:text-red-400"></i>
            </div>
          </div>
          <h4 className="text-xl">{data.name}</h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm  text-gray-500 flex-grow">
            {data.description}
          </p>
          <div className="flex justify-between items-end pt-5">
            <p className="flex items-center">
              <i className="fa-solid fa-star h-5 text-red-400"></i>
              <p className="pt-2 pl-1">{data.locationId.valueate}</p>
            </p>
            <div className="flex items-center">
              <p className="text-sm lg:text-2xl font-semibold pb-2 pt-2">
                {data.price.toLocaleString()} VND/night
              </p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
