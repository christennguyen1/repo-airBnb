import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Column from "antd/lib/table/Column";
import { useParams } from "react-router-dom";
import {
  addValueateAction,
  deleteValueateAction,
  getValueateDetail,
  getValueateDetailAction,
  getValueateListByRoomAction,
  updateValueateAction,
} from "../../../redux/Actions/valueateAction";
import moment from "moment";
import { ModalAddValueateByRoom } from "./ModalAddValueateByRoom/ModalAddValueateByRoom";
import { ModalEditValueateByRoom } from "./ModalEditValueateByRoom/ModalEditValueateByRoom";

const { Search } = Input;

export default function AdminValueate() {
  const dispatch = useDispatch();

  const { roomId } = useParams();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getValueateListByRoomAction(roomId));
  }, []);

  const { valueateList, valueateDetail } = useSelector(
    (state) => state.valueateReducer
  );
  // console.log("valueateList", valueateList);

  let valueateListData = valueateList.filter((valueate) => {
    return valueate.roomId;
  });

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  const [visible, setVisible] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);

  const onCreate = (values) => {
    console.log("valuesAdd", values);
    setVisible(false);
    dispatch(addValueateAction(values, roomId));
  };

  const onUpdate = (values) => {
    console.log("valuesUp", values);
    setVisibleEdit(false);
    dispatch(updateValueateAction(values, valueateDetail._id, roomId));
  };

  return (
    <div>
      <div className="flex mb-5">
        <div className="flex items-end ml-5">
          <h1 className="mr-2">Danh sách đánh giá ở: </h1>
          <h1 className="text-red-500 text-3xl font-bold m-0">
            {valueateList[0]?.roomId?.name}
          </h1>
        </div>
        <Button
          onClick={() => {
            setVisible(true);
          }}
          size="large"
          className="ml-5 text-red-500 bg-white border-red-500 hover:bg-red-500 hover:text-white rounded"
        >
          Thêm đánh giá mới
        </Button>
        <ModalAddValueateByRoom
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
        <ModalEditValueateByRoom
          visible={visibleEdit}
          onUpdate={onUpdate}
          onCancel={() => {
            setVisibleEdit(false);
          }}
        />
      </div>
      <Table
        dataSource={valueateListData}
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
          title="Content"
          align="center"
          className="font-semibold"
          dataIndex="content"
          key="content"
          width={500}
        />

        <Column
          title="Create At"
          dataIndex="created_at"
          key="created_at"
          align="center"
          className="font-semibold"
          render={(date) => {
            return moment(date).format("DD/MM/YYYY");
          }}
        />
        <Column
          title="Update At"
          align="center"
          className="font-semibold"
          dataIndex="updatedAt"
          key="updatedAt"
          render={(date) => {
            return moment(date).format("DD/MM/YYYY");
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
                <Tooltip title="Sửa thông tin đánh giá">
                  <button
                    onClick={() => {
                      dispatch(getValueateDetailAction(id));
                      setVisibleEdit(true);
                    }}
                    className="text-blue-600 text-2xl mr-4 cursor-pointer"
                  >
                    <EditOutlined />
                  </button>
                </Tooltip>
                <Tooltip title="Xóa đánh giá">
                  <button
                    onClick={() => {
                      window.confirm(
                        "Bạn có chắc muốn xóa đánh giá này không?"
                      ) && dispatch(deleteValueateAction(id, roomId));
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
