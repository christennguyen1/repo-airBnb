import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MyPofolio.css";
import axios from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../../../configUrl/configURL";
import { Upload, Button, Modal } from "antd";
import { updateAvatarUserAction } from "../../../../redux/Actions/userAction";

export default function MyPofolio() {
  let userInfor = useSelector((state) => state.userReducer.userInfor);

  const dispatch = useDispatch();

  const fileAvatar = useRef();
  const btnUpdateAvatar = useRef();

  const [selectedFile, setSelectedFile] = useState(null);

  const [imageUrl, setImageUrl] = useState("");

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    setSelectedFile(file);
    setIsModalVisible(true);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
    btnUpdateAvatar.current.click();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex justify-center flex-col mx-2">
      <div className="text-center relative py-5">
        {userInfor?.avatar ? (
          <img
            src={userInfor?.avatar}
            className="object-cover w-20 h-20 rounded-full mx-auto"
          />
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#707070"
            className="object-cover w-20 h-20 rounded-full mx-auto"
          >
            <path d="M16 .7C7.563.7.7 7.563.7 16S7.563 31.3 16 31.3 31.3 24.437 31.3 16 24.437.7 16 .7zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 016.451-4.4A6.507 6.507 0 019.5 14c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 01-3.019 5.491 12.42 12.42 0 016.452 4.4C23.605 26.816 20.021 28.7 16 28.7z"></path>
          </svg>
        )}
        <div>
          <input
            type="file"
            accept="image/x-png, image/gif, image/jpeg"
            style={{ display: "none" }}
            ref={fileAvatar}
            onChange={handleChangeFile}
          />
          <p
            onClick={() => {
              fileAvatar.current.click();
            }}
            className="cursor-pointer underline font-semibold mt-2"
          >
            Update photo
          </p>
          {selectedFile ? (
            <div>
              <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={700}
                okType={"danger"}
              >
                <img
                  style={{
                    width: 600,
                    height: 400,
                    objectFit: "cover",
                    borderRadius: 14,
                  }}
                  src={imageUrl}
                  alt="..."
                />
              </Modal>
              <Button
                ref={btnUpdateAvatar}
                style={{ display: "none" }}
                onClick={() => {
                  const formdata = new FormData();
                  formdata.append("avatar", selectedFile, selectedFile?.name);
                  setSelectedFile(null);
                  dispatch(updateAvatarUserAction(formdata, userInfor?._id));
                }}
              >
                Update
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        <div className="border-b mb-4">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className="sc-1lmdwpx-6 fdGIua mx-auto"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
              />
            </svg>
          </div>
          <div className=" mb-6">
            <h1>Identity verification</h1>
            <p>
              Show others you're really you with the identity verification
              badge.
            </p>
            <div className="border pt-4 mx-8 rounded-lg cursor-pointer pofolio_button">
              <button>
                <p className="font-semibold text-lg">Get the badge</p>
              </button>
            </div>
          </div>
        </div>
        <div>
          <p>{userInfor?.name} confirmed</p>
          <div className="flex flex-warp">
            <i className="fa-solid fa-check mt-1"></i>
            <p className="ml-1">Email address</p>
          </div>
          <div className="flex flex-warp">
            <i className="fa-solid fa-check mt-1"></i>
            <p className="ml-1">Phone number</p>
          </div>
        </div>
      </div>
    </div>
  );
}
