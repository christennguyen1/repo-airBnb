import { Button, Descriptions } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { history } from "../../../../App";
import { Rate } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export default function AdminRoomDetail() {
  const { roomDetail } = useSelector((state) => state.roomReducer);
  console.log({ roomDetail });

  const { id } = useParams();

  let rateNumber = 0;
  if (roomDetail.locationId) {
    rateNumber = roomDetail.locationId.valueate;
  } else {
    rateNumber = 10;
  }
  return (
    <div className="p-10">
      <div className="grid grid-cols-12  ">
        <div className="col-span-7 flex justify-center items-center">
          <img
            style={{
              width: 600,
              height: 350,
              objectFit: "cover",
              borderRadius: 12,
            }}
            src={roomDetail.image}
            alt="Ảnh chưa được cập nhật..."
          />
        </div>
        <div className="col-span-5 flex items-center text-xl ">
          <div className="w-full">
            <h1 className="col-span-3 text-4xl text-red-500 font-bold m-0">
              {roomDetail.name}
            </h1>
            <div className="flex">
              <span className="text-black text-sm font-semibold ">
                {roomDetail.locationId?.name} -
              </span>
              <span className="text-black text-sm font-semibold ml-1">
                {roomDetail.locationId.province},{roomDetail.locationId.country}
              </span>
            </div>
            <div className="flex">
              <Rate
                className="mb-3 pr-2 border-r-2"
                allowHalf
                value={rateNumber / 2}
              />
              <div className="space-x-3 ml-5  ">
                <a href="https://vi-vn.facebook.com" target="_blank">
                  <FacebookOutlined className="text-gray-500 hover:text-red-500 transition " />
                </a>
                <a href="https://twitter.com/?lang=vi" target="_blank">
                  <TwitterOutlined className="text-gray-500 hover:text-red-500 transition " />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <YoutubeOutlined className="text-gray-500 hover:text-red-500 transition " />
                </a>
              </div>
            </div>
            <div className="space-x-5 text-sm font-medium">
              <span>Bath: {roomDetail.bath}</span>
              <span>BedRoom: {roomDetail.bedRoom}</span>
              <span>Guests: {roomDetail.guests}</span>
              <span>Price: {roomDetail.price.toLocaleString()} vnd</span>
            </div>

            <div className="convenient flex flex-wrap text-sm font-medium mt-2 ">
              <div className="mr-3">
                {roomDetail.elevator ? (
                  <div>
                    <span>Elevator</span>{" "}
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M153 35v58h206V35H153zm60.3 13h32l-16 32-16-32zm74.7 0l16 32h-32l16-32zm-183 89v350h142V137H105zm160 0v350h142V137H265zm173 141v84h52v-84h-52zm26 26a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z"></path>
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="mr-3">
                {roomDetail.cableTV ? (
                  <div>
                    <span>CableTV</span>{" "}
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1h-1v4c0 .55.45 1 1 1h1v7c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-2.21-1.79-4-4-4S5 4.79 5 7v7H4c-.55 0-1 .45-1 1v4h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1v-4c0-.55-.45-1-1-1H7V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 2.21 1.79 4 4 4s4-1.79 4-4v-7h1c.55 0 1-.45 1-1V5h-1z"></path>
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="mr-3">
                {roomDetail.dryer ? (
                  <div>
                    <span>Dryer</span>{" "}
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M20.75 16a1.25 1.25 0 000-2.5H12v-1h6.75c.69 0 1.25-.56 1.25-1.25 0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54 0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 000-2.5H12v-1h7.75a1.25 1.25 0 000-2.5H12v-1h8.75zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9zm5.65-16.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L15 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L19 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z"></path>
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="mr-3">
                {roomDetail.gym ? (
                  <div>
                    <span>Gym</span>{" "}
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5v14h3v-6h6v6h3V5h-3v6H9V5zM3 15a1 1 0 0 0 1 1h1V8H4a1 1 0 0 0-1 1v2H2v2h1v2zm18-6a1 1 0 0 0-1-1h-1v8h1a1 1 0 0 0 1-1v-2h1v-2h-1V9z"></path>
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="mr-3">
                {roomDetail.hotTub ? (
                  <div>
                    <span>Hot Tub</span>{" "}
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M414.21 177.65c1.02 8.21 7.75 14.35 15.75 14.35h16.12c9.51 0 17.08-8.57 16-18.35-4.34-39.11-22.4-74.53-50.13-97.16-17.37-14.17-28.82-36.75-31.98-62.15C378.96 6.14 372.22 0 364.23 0h-16.12c-9.51 0-17.09 8.57-16 18.35 4.34 39.11 22.4 74.53 50.13 97.16 17.36 14.17 28.82 36.75 31.97 62.14zm-108 0c1.02 8.21 7.75 14.35 15.75 14.35h16.12c9.51 0 17.08-8.57 16-18.35-4.34-39.11-22.4-74.53-50.13-97.16-17.37-14.17-28.82-36.75-31.98-62.15C270.96 6.14 264.22 0 256.23 0h-16.12c-9.51 0-17.09 8.57-16 18.35 4.34 39.11 22.4 74.53 50.13 97.16 17.36 14.17 28.82 36.75 31.97 62.14zM480 256H256l-110.93-83.2a63.99 63.99 0 0 0-38.4-12.8H64c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V288c0-17.67-14.33-32-32-32zM128 440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zM64 128c35.35 0 64-28.65 64-64S99.35 0 64 0 0 28.65 0 64s28.65 64 64 64z"></path>
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="mr-3">
                {roomDetail.indoorFireplace ? (
                  <div>
                    <span>Indoor Fireplace</span>{" "}
                    <span>
                      {" "}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M281.53 23.438c48.44 71.504-18.447 145.556-63.655 58.968 27.295 144.502-65.22 166.347-74.75 74.75-73.554 65.057-59.358 147.17-20.438 210.75l45.844-26.344c-12.004-18.318-17.995-42.502-15.31-66.218 25.688 39.43 106.855 10.088 97.124-59.938 10.695 32.074 37.802 28.97 65.78-20.5C278.07 297.622 337.95 364.248 378.032 333.5c1.47 11.97-2.95 25.657-10.592 38.063l46.968 12.53c55.122-47.503 79.71-135.97-3.812-175.53 39.08 60.478-13.1 105.064-60.72 41.468-38.546-72.133 82.366-113.394-68.343-226.593zM173.876 48.124c-64.128 32.333-14.642 60.51-14.03 92.344 44.122-38.935-3.722-53.508 14.03-92.345zm74.47 269.094L75 416.874c2.71 18.39 8.98 34.417 18.813 48.5l92-44.063-78.688 59.875c3.39 3.38 7.033 6.62 10.938 9.75L192.78 448c-.023-.738-.06-1.475-.06-2.22 0-37.22 30.495-67.56 67.81-67.56 10.53 0 20.527 2.413 29.44 6.717-2.323-13.414-7.28-27.104-14.72-39.28l-94.938 40.124 82.47-56.467c-4.34-4.55-9.166-8.64-14.438-12.094zm58.874 57.624c1.61 7.148 2.6 14.315 2.967 21.312l.22 3.938c11.13 12.042 17.937 28.09 17.937 45.687 0 7.795-1.356 15.276-3.813 22.25l91.345 24.376c4.642-6.327 8.588-12.768 11.844-19.375l-63.158-24.686 70.125 6.844c.866-2.948 1.61-5.923 2.22-8.938l-97.063-34.22L439 427.5c.156-5.772-.103-11.67-.813-17.72L307.22 374.845zm-46.69 22.062c-27.26 0-49.124 21.8-49.124 48.875 0 27.078 21.864 48.876 49.125 48.876 27.263 0 49.126-21.798 49.126-48.875 0-27.075-21.863-48.874-49.125-48.874zm-4.936 11.78c43.778.002 58.435 71.595 0 71.595 26.622-23.113 29.81-46.888 0-71.592zm.187 9.845c-21.616 17.916-19.304 35.177 0 51.94-42.375 0-31.745-51.94 0-51.94z"></path>
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="mr-3">
                {roomDetail.kitchen ? (
                  <div>
                    <span>Kitchen</span>{" "}
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5z"></path>
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="mr-3">
                {roomDetail.pool ? (
                  <div>
                    <span>Pool</span>{" "}
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z"></path>
                        <circle cx="16.5" cy="5.5" r="2.5"></circle>
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="mr-3">
                {roomDetail.wifi ? (
                  <div>
                    <span>Wifi</span>{" "}
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M311.4 32.82C279.9 53.58 259 89.29 259 129.8c0 39.9 20.3 75.2 51.1 96.1l8.1-16.2c-25-17.8-41.2-46.9-41.2-79.9 0-33.59 16.8-63.17 42.5-80.82l-8.1-16.16zm127.2 0l-8.1 16.16C456.2 66.63 473 96.21 473 129.8c0 33-16.2 62.1-41.2 79.9l8.1 16.2c30.8-20.9 51.1-56.2 51.1-96.1 0-40.51-20.9-76.22-52.4-96.98zm-110 34.35C309.4 81.41 297 104.2 297 129.8c0 25 11.9 47.3 30.3 61.6l8.2-16.4c-12.6-11-20.5-27.1-20.5-45.2 0-18.7 8.5-35.3 21.8-46.29l-8.2-16.34zm92.8 0l-8.2 16.34C426.5 94.5 435 111.1 435 129.8c0 18.1-7.9 34.2-20.5 45.2l8.2 16.4c18.4-14.3 30.3-36.6 30.3-61.6 0-25.6-12.4-48.39-31.6-62.63zm-75.3 35.03c-6.9 7.2-11.2 16.9-11.2 27.6 0 10.1 3.8 19.3 10 26.4l9.4-18.7c-.9-2.4-1.4-5-1.4-7.7 0-3.5.8-6.7 2.2-9.6l-9-18zm57.8 0l-9 18c1.4 2.9 2.2 6.1 2.2 9.6 0 2.7-.5 5.3-1.4 7.7l9.4 18.7c6.2-7.1 10-16.3 10-26.4 0-10.7-4.3-20.4-11.2-27.6zM366 144v183h18V144h-18zM25 345v110h462V345H25zm55 39a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm48 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm48 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zM73 473v16h46v-16H73zm320 0v16h46v-16h-46z"></path>
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="description mt-5">
              <p className="text-sm font-normal">
                {roomDetail.description.length > 150
                  ? roomDetail.description.slice(0, 150) + " ..."
                  : roomDetail.description}
              </p>
            </div>
            <Button
              onClick={() => {
                history.push(`/admin/reviewsByRoom/${id}`);
              }}
              size="large"
              className="mt-5 text-red-500 bg-white border-red-500 hover:bg-red-500 hover:text-white rounded"
            >
              Xem tất cả các đánh giá
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
