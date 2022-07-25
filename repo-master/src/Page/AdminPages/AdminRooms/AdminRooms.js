import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Tooltip, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FileSearchOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Column from "antd/lib/table/Column";
import { useHistory, useParams } from "react-router-dom";
import {
  deleteRoomAction,
  getRoomDetailAction,
  getRoomListAction,
  updateImgRoomAction,
} from "../../../redux/Actions/roomAction";

const { Search } = Input;

export default function AdminRooms() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { locationId } = useParams();

  const fileInput = useRef();
  const btnUpdateImg = useRef();

  const [selectedFile, setSelectedFile] = useState(null);

  const [imageUrl, setImageUrl] = useState("");

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getRoomListAction(locationId));
  }, []);

  let { roomList } = useSelector((state) => state.roomReducer);

  let roomListData = roomList.filter((room) => {
    return room.locationId;
  });

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  const handleChangeFile = (e) => {
    //Lay file ra tu e
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
    btnUpdateImg.current.click();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="flex mb-5">
        <div className="flex items-end ml-5">
          <h1 className="mr-2">Danh sách phòng ở: </h1>
          <h1 className="text-red-500 text-3xl font-bold m-0">
            {roomList[0]?.locationId?.name}
          </h1>
          <span className="text-red-400 text-sm font-semibold ml-2 mb-1">
            {roomList[0]?.locationId?.province},
            {roomList[0]?.locationId?.country}
          </span>
        </div>
        <Button
          onClick={() => {
            history.push(`/admin/rooms/addnew/${locationId}`);
          }}
          size="large"
          className="ml-5 text-red-500 bg-white border-red-500 hover:bg-red-500 hover:text-white rounded"
        >
          Thêm phòng mới
        </Button>
      </div>
      <Table
        dataSource={roomListData}
        onChange={onChange}
        rowKey={"_id"}
        pagination={{
          onChange(current) {
            setPage(current);
          },
        }}
      >
        <Column
          title="STT"
          key="stt"
          align="center"
          className="font-semibold"
          render={(value, item, index) => {
            return (page - 1) * 10 + index + 1;
          }}
        />
        <Column
          title="Reviews"
          dataIndex="_id"
          key="reviews"
          align="center"
          className="font-semibold"
          render={(id) => {
            return (
              <>
                <Tooltip color={"red"} title="Xem danh sách các đánh giá">
                  <button
                    onClick={() => {
                      history.push(`/admin/reviewsByRoom/${id}`);
                    }}
                    className="text-yellow-600 text-2xl mr-4 cursor-pointer"
                  >
                    <LikeOutlined />
                  </button>
                </Tooltip>
              </>
            );
          }}
        />
        <Column
          title="Name"
          align="center"
          className="font-semibold"
          dataIndex="name"
          key="name"
          width={300}
        />
        <Column
          title="Image"
          dataIndex="image"
          align="center"
          className="font-semibold"
          key="image"
          render={(img) => {
            return (
              <Tooltip color={"red"} title={"Click để cập nhật ảnh của phòng"}>
                <div
                  onClick={() => {
                    fileInput.current.click();
                  }}
                  className="flex justify-around items-center cursor-pointer"
                >
                  {img ? (
                    <img
                      style={{
                        width: 200,
                        height: 150,
                        objectFit: "cover",
                        borderRadius: 10,
                      }}
                      src={img}
                      alt={img.name}
                    />
                  ) : (
                    <img
                      style={{
                        width: 200,
                        height: 150,
                        objectFit: "cover",
                        borderRadius: 10,
                        border: "2px solid black",
                      }}
                      src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                      alt="Ảnh của phòng chưa được cập nhật"
                    />
                  )}
                </div>
              </Tooltip>
            );
          }}
        />
        <Column
          dataIndex="_id"
          key="image"
          align="center"
          render={(id) => {
            return (
              <div>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={handleChangeFile}
                  ref={fileInput}
                />
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
                      ref={btnUpdateImg}
                      style={{ display: "none" }}
                      onClick={() => {
                        const formdata = new FormData();
                        formdata.append(
                          "room",
                          selectedFile,
                          selectedFile?.name
                        );
                        setSelectedFile(null);
                        dispatch(updateImgRoomAction(formdata, id));
                      }}
                    >
                      Update
                    </Button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          }}
        />
        <Column
          title="Location"
          dataIndex={["locationId", "province"]}
          key="location"
          align="center"
          className="font-semibold"
        />
        <Column
          title="Guest Max"
          align="center"
          className="font-semibold"
          dataIndex="guests"
          key="guests"
        />
        <Column
          title="Price (VND)"
          align="center"
          className="font-semibold"
          dataIndex="price"
          key="price"
          render={(price) => {
            return price.toLocaleString();
          }}
        />

        <Column
          title="Action"
          dataIndex="_id"
          key="action"
          align="center"
          className="font-semibold"
          render={(id) => {
            return (
              <>
                <Tooltip color={"red"} title="Xem chi tiết phòng">
                  <button
                    onClick={() => {
                      dispatch(getRoomDetailAction(id));
                      history.push(`/admin/rooms/detail/${id}`);
                    }}
                    className="text-green-600 text-2xl mr-4 cursor-pointer"
                  >
                    <FileSearchOutlined />
                  </button>
                </Tooltip>
                <Tooltip color={"red"} title="Sửa thông tin phòng">
                  <button
                    onClick={() => {
                      dispatch(getRoomDetailAction(id, locationId));
                      history.push(`/admin/rooms/edit/${locationId}`);
                    }}
                    className="text-blue-600 text-2xl mr-4 cursor-pointer"
                  >
                    <EditOutlined />
                  </button>
                </Tooltip>
                <Tooltip color={"red"} title="Xóa phòng">
                  <button
                    onClick={() => {
                      window.confirm("Bạn có chắc muốn xóa phòng này không?") &&
                        dispatch(deleteRoomAction(id, locationId));
                    }}
                    className="text-red-600 text-2xl cursor-pointer"
                  >
                    <DeleteOutlined />
                  </button>
                </Tooltip>
              </>
            );
          }}
        />
      </Table>
    </div>
  );
}
