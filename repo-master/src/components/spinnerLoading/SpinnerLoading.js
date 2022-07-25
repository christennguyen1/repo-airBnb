import React, { useState } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import { useSelector } from 'react-redux';



export default function SpinnerLoading() {
  const override  = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [color, setColor] = useState("#F31158");
    let isLoading=useSelector((state)=>state.spinnerReducer.isLoading)
  return isLoading ? (
    <div className="fixed w-screen h-screen bg-white flex justify-center items-center z-50">
          <PuffLoader color={color} loading={isLoading} cssOverride={override} size={60} />
    </div>
  ):(<></>);
}
