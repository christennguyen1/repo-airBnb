import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import localStorageServ from '../../serviceWorker/locaStorage.service';


export default function ItemSearch({val}) {
    return (
        <NavLink to={`/search/${val._id}`} >
        <div className="m-2 p-2 rounded-lg hover:bg-gray-100 transition duration-400">
            <div className="flex flex-warp">
                <div className="mx-2">
                    <img src={val.image} className="w-12 h-12 object-cover rounded-lg" />
                </div>
                <div className="ml-2">
                    <p className="text-lg font-thin pt-2">{val.province}</p>
                </div>
            </div>
        </div>
        </NavLink>
    )
}
