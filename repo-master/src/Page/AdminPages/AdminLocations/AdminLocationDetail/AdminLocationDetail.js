import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { history } from "../../../../App";

export default function AdminLocationDetail() {
  const { locationDetail } = useSelector((state) => state.locationReducer);

  const { id } = useParams();
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
            src={locationDetail.image}
            alt="Ảnh của vị trí chưa được cập nhật..."
          />
        </div>
        <div className="col-span-5 flex items-center text-xl ">
          <div className="w-full">
            <h1 className="col-span-3 text-3xl text-red-500 font-bold">
              {locationDetail.name}
            </h1>
            <p>
              {locationDetail.province}, {locationDetail.country}
            </p>
            <div className="flex">
              <Rate
                className="mb-3 pr-2 border-r-2"
                allowHalf
                value={locationDetail.valueate / 2}
              />
              <div className="space-x-3 ml-5  ">
                <a href="https://vi-vn.facebook.com" target="_blank">
                  <FacebookOutlined className="text-gray-500 hover:text-red-500 transition" />
                </a>
                <a href="https://twitter.com/?lang=vi" target="_blank">
                  <TwitterOutlined className="text-gray-500 hover:text-red-500 transition" />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <YoutubeOutlined className="text-gray-500 hover:text-red-500 transition" />
                </a>
              </div>
            </div>

            <Button
              onClick={() => {
                history.push(`/admin/rooms/${id}`);
              }}
              size="large"
              className="mt-5 text-red-500 bg-white border-red-500 hover:bg-red-500 hover:text-white rounded"
            >
              Xem danh sách các phòng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
