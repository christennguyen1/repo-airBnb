import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

export default function AdminUserProfile() {
  const [showMore, setShowMore] = useState(false);

  const { userInforDetails, userInforDetailsTickets } = useSelector(
    (state) => state.userReducer
  );

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
  return (
    <div>
      <div className="grid grid-cols-12 border-b-2 pb-5 ">
        <div className="col-span-4 flex justify-center items-center">
          {userInforDetails.avatar ? (
            <img
              style={{
                width: 300,
                height: 300,
                borderRadius: "100%",
                objectFit: "cover",
              }}
              src={userInforDetails.avatar}
              alt="..."
            />
          ) : (
            <img
              style={{
                width: 300,
                height: 300,
                borderRadius: "100%",
                objectFit: "cover",
              }}
              src="https://www.sandcanyoncc.com/wp-content/uploads/elementor/thumbs/no-profile-picture-icon-15-omqilctwnnaw5c9dnu5i4bvw9ui5vymmtjrwsaz3q0.png"
              alt="..."
            />
          )}
        </div>
        <div className="col-span-8 flex items-center text-xl ">
          <div className="w-full">
            <div className="grid grid-cols-4">
              <h1 className="col-span-1">Họ và tên:</h1>
              <p className="col-span-3">{userInforDetails.name}</p>
            </div>
            <div className="grid grid-cols-4">
              <h1 className="col-span-1">Email:</h1>
              <p className="col-span-3">{userInforDetails.email}</p>
            </div>
            <div className="grid grid-cols-4">
              <h1 className="col-span-1">Số điện thoại:</h1>
              <p className="col-span-3">{userInforDetails.phone}</p>
            </div>
            <div className="grid grid-cols-4">
              <h1 className="col-span-1">Địa chỉ:</h1>
              <p className="col-span-3">{userInforDetails.address}</p>
            </div>
            <div className="grid grid-cols-4">
              <h1 className="col-span-1">Loại tài khoản:</h1>
              <p className="col-span-3">{userInforDetails.type}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {userInforDetailsTicketsSliced.map((room, index) => {
          return (
            <div key={index} className="border-b-2 p-5">
              <div className="grid grid-cols-4">
                <div className="col-span-1">
                  <img
                    style={{
                      width: 250,
                      height: 180,
                      borderRadius: 18,
                      objectFit: "cover",
                    }}
                    src={room.roomId?.image}
                    alt="..."
                  />
                </div>
                <div className="col-span-3 flex flex-col justify-center">
                  <div className="font-semibold">
                    <h1 className="text-2xl">{room.roomId.name}</h1>
                    <div className="flex">
                      <p className="mr-10">Guests: {room.roomId.guests}</p>
                      <p>Price: {room.roomId.price.toLocaleString()} vnd</p>
                    </div>
                    <div>
                      <p>{room.roomId.description.slice(0, 200) + "..."}</p>
                    </div>
                    <div>
                      <p>
                        {moment(room.checkIn).format("DD/MM/YYYY")} -
                        {moment(room.checkOut).format("DD/MM/YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
  );
}
