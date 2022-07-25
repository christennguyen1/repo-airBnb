import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useHistory } from "react-router-dom";
import UserNav from "./UserNav";
import localStorageServ from "../../serviceWorker/locaStorage.service";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../configUrl/configURL";
import axios from "axios";
import ItemSearch from "../../Page/Search/ItemSearch";
import { useDispatch, useSelector } from "react-redux";
import { getLocationListAction } from "../../redux/Actions/locationAction";

export default function NavHeader() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [scrollNav, setScrollNav] = useState(false);
  let history = useHistory();

  const dispatch = useDispatch();

  function handleClick() {
    localStorageServ.keySearch.set(searchInput);
  }

  const handleClickData = (data) => {
    setSearchInput(data);
  };

  const handleClickTrangChu = () => {
    history.push("/");
  };

  const handleSelect = (ranges) => {
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const { locationList } = useSelector((state) => state.locationReducer);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    dispatch(getLocationListAction());
  }, []);
  //   scrollNav || searchInput ?

  return (
    <header className="fixed w-full top-0 left-0 right-0 bg-white transition duration-500  z-50 grid grid-cols-3 shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center w-32 cursor-pointer my-auto">
        <button
          className="outline-none border-none"
          onClick={handleClickTrangChu}
        >
          <img
            src="https://links.papareact.com/qd3"
            layout="fill"
            className="object-contain object-left"
          />
        </button>
      </div>

      {/* mid */}
      <div className="flex space-between items-center md:border-2 rounded-full py-2 md:shadow-sm relative z-0">
        <div className="w-full">
          <input
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            className="w-full flex-grow pl-5 bg-transparent outline-none placeholder-gray-400 text-gray-600"
            type="text"
            placeholder="start your search"
          />
        </div>
        <div>
          <button
            onClick={handleClick}
            className="flex-grow focus:outline-none text-red-500"
          >
            <i className="fa-solid fa-magnifying-glass md:inline-flex text-white bg-red-400 cursor-pointer rounded-full p-2 md:mx-2" />
          </button>
        </div>

        <div className="absolute z-0 top-12 bg-white rounded-xl right-0 w-full cursor-pointer">
          {searchInput != "" ? (
            locationList
              .filter((location) => {
                return (
                  location.province
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                  location.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                );
              })
              .slice(0, 5)
              .map((location, key) => {
                return <ItemSearch key={key} location={location} />;
              })
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* right */}
      <div className="flex items-center align-middle space-x-4 justify-end text-gray-500">
        <div className="hover:bg-gray-100 transition duration-150 rounded-full cursor-pointer">
          <button className="focus:outline-none hidden md:inline text-black p-2">
            Become a host
          </button>
        </div>
        <div className="hover:bg-gray-100 transition duration-150 rounded-full cursor-pointer">
          <button className="p-2 focus:outline-none">
            {" "}
            <i className="fa-solid bg-white rounded-full fa-globe w-4" />
          </button>
        </div>
        <UserNav />
      </div>
    </header>
    //   ) : (
    //     <header className="fixed bg-transparent items-center w-full top-0 transition duration-500 h-32  z-50 grid grid-cols-3  p-5 md:px-10">
    //       {/* left */}
    //       <div className="relative flex items-center w-32 cursor-pointer my-auto">
    //         <button
    //           className="outline-none border-none"
    //           onClick={handleClickTrangChu}
    //         >
    //           <img
    //             src="https://links.papareact.com/qd3"
    //             layout="fill"
    //             className="object-contain object-left"
    //           />
    //         </button>
    //       </div>

    //       {/* mid */}
    //       <div className="flex items-center h-12 md:border-2 rounded-full py-2 md:shadow-sm">
    //         <input
    //           value={searchInput}
    //           onChange={(e) => setSearchInput(e.target.value)}
    //           className="flex-grow pl-5 bg-transparent outline-none placeholder-white text-gray-600"
    //           type="text"
    //           placeholder="start your search"
    //         />
    //         <i className="fa-solid fa-magnifying-glass hidden md:inline-flex text-white bg-red-400 cursor-pointer rounded-full p-2 md:mx-2" />
    //       </div>

    //       {/* right */}
    //       <div className="flex items-center align-middle space-x-4 justify-end text-gray-500">
    //         <div className="hover:bg-gray-600 transition duration-150 rounded-full cursor-pointer">
    //           <button className="focus:outline-none hidden md:inline text-white font-medium p-2">
    //             Become a host
    //           </button>
    //         </div>
    //         <div className="hover:bg-gray-600 transition duration-150 rounded-full cursor-pointer">
    //           <button className="p-2 focus:outline-none">
    //             {" "}
    //             <i className="fa-solid  rounded-full fa-globe w-10 text-white" />
    //           </button>
    //         </div>
    //         <UserNav />
    //       </div>
    //       {searchInput && (
    //         <div className="flex flex-col col-span-3 mx-auto">
    //           <DateRangePicker
    //             ranges={[selectionRange]}
    //             minDate={new Date()}
    //             rangeColors={["#FD5B61"]}
    //             onChange={handleSelect}
    //           />
    //           <div className="flex items-center border-b mb-4">
    //             <h2 className="text-2xl flex-grow font-semibold">
    //               Number of Guests
    //             </h2>

    //             <i className="fa-solid fa-user-group"></i>
    //             <input
    //               value={noOfGuests}
    //               onChange={(e) => setNoOfGuests(e.target.value)}
    //               min={1}
    //               type="number"
    //               className="w-12 pl-2 text-lg outline-none text-red-400"
    //             />
    //           </div>
    //           <div className="flex">
    //             <button
    //               onClick={resetInput}
    //               className="flex-grow focus:outline-none text-gray-500"
    //             >
    //               Cancel
    //             </button>
    //             {/* <NavLink to="/search"> */}
    //             <button
    //               onClick={handleClick}
    //               className="flex-grow focus:outline-none text-red-500"
    //             >
    //               Search
    //             </button>
    //             {/* </NavLink> */}
    //           </div>
    //         </div>
    //       )}
    //     </header>
  );
}
