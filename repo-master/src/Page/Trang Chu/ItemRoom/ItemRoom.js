import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";

const { Meta } = Card;
export default function ItemRoom({ data }) {
  // console.log("phong",data._id);
  return (
    <div className="w-1/3 p-3 hover:shadow-xl">
      <NavLink
        to={`/detail/${data._id}`}
        className="block w-full shadow cursor-pointer"
      >
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={
            <img
              className=" w-full h-32 object-cover "
              alt="example"
              src={data.locationId.image}
            />
          }
        >
          <Meta
            title={
              <p className="text-xs text-center text-red-600">
                {data.locationId.province.length > 20
                  ? data.locationId.province.slice(0, 24) + "..."
                  : data.locationId.province}
              </p>
            }
            description="www.instagram.com"
          />
        </Card>
      </NavLink>
    </div>
  );
}
