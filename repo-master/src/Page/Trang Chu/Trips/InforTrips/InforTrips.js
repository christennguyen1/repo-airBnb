import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function InforTrips({ phong }) {
  console.log("PHONG", phong);
  return (
      <div className="xl:flex py-7 px-5 mt-3 border cursor-pointer hover:shadow-lg transform hover:translate-x-2 transtion duration-200 ease-out rounded-2xl">
        <div className="relative mb-2  h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <img src={phong.roomId.image} layout="fill" className="object-cover rounded-2xl" />
        </div>
        <div className="flex flex-col flex-grow pl-1">
          <div className="flex justify-between pr-4">
            <p className="text-xl font-semibold">{phong.roomId.name}</p>
          </div>
          <h4 className="text-xl">{phong.name}</h4>
          <p className="pt-2 text-sm  text-gray-600 flex-grow">{phong.roomId.description}
          </p>
           </div>
        </div>
  )
}
