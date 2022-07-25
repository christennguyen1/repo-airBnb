import React from 'react'

export default function Locations() {
  return (
    <div>Locations</div>
  )
}
<div className="btn-group w-full">
<button className=" btn-lg focus:outline-none w-full flex flex-wrap" type="button" data-toggle="dropdown" aria-haspopup="true">
  <div>
    <h1 className="pt-2" style={{ fontSize: "12px" }}>GUESTS</h1>
    <p className="text-gray-400" style={{ fontSize: "14px" }}>{noOfGuests} guests</p>
  </div>
</button>
<div className="dropdown-menu w-full">
  <div className="flex justify-between w-full border-b pb-1 pr-1">
    <div>
      <h1 className="text-based font-semibold mt-1 ml-1">Adults(Age 13+)</h1>
    </div>
    <div className="flex flex-wrap">
      <button className="w-9 h-9 rounded-full border " onClick={tangGuests}><p className="text-xl">+</p></button>
      <input
        value={noOfGuests}
        onChange={(e) => setNoOfGuests(e.target.value)}
        min={0}
        className=" pl-2 w-6 text-lg outline-none"/>
         <button className="w-9 h-9 rounded-full border" onClick={giamGuests}><p className="text-xl">-</p></button>
    </div>
  </div>
</div>
</div>