import React, { useEffect } from "react";
import { Button, Input, Tag, Tooltip } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  getListTicketsByUserAction,
  getUserInforAction,
  getUserListAction,
} from "../../../redux/Actions/userAction";
import Column from "antd/lib/table/Column";
import { useHistory } from "react-router-dom";

const { Search } = Input;

export default function AdminUsers() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [page, setPage] = React.useState(1);

  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  let { userList } = useSelector((state) => state.userReducer);

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="">
      <Button
        onClick={() => {
          history.push("/admin/user/addnew");
        }}
        size="large"
        className="mb-5 ml-5 text-red-500 bg-white border-red-500 hover:bg-red-500 hover:text-white rounded "
      >
        Thêm Quản trị viên
      </Button>

      <Table
        dataSource={userList}
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
          render={(value, item, index) => (page - 1) * 10 + index + 1}
          align="center"
          className="font-semibold"
        />
        <Column
          title="Họ và tên"
          dataIndex="name"
          key="name"
          align="center"
          className="font-semibold"
        />
        <Column
          title="Email"
          dataIndex="email"
          key="email"
          align="center"
          className="font-semibold"
        />
        <Column
          title="Avatar"
          dataIndex="avatar"
          key="avatar"
          render={(img) => {
            return img ? (
              <img
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
                src={img}
                alt="..."
              />
            ) : (
              <img
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
                src="https://www.sandcanyoncc.com/wp-content/uploads/elementor/thumbs/no-profile-picture-icon-15-omqilctwnnaw5c9dnu5i4bvw9ui5vymmtjrwsaz3q0.png"
                alt="..."
              />
            );
          }}
        />
        <Column
          title="Loại tài khoản"
          dataIndex="type"
          key="type"
          align="center"
          className="font-semibold"
          render={(type) => {
            return type === "ADMIN" ? (
              <Tag color={"geekblue"}>Admin</Tag>
            ) : (
              <Tag color={"green"}>User</Tag>
            );
          }}
        />
        <Column
          title="Thao tác"
          dataIndex="_id"
          key="action"
          align="center"
          className="font-semibold"
          render={(id, index) => {
            return (
              <>
                <Tooltip title="Xem chi tiết">
                  <button
                    onClick={() => {
                      dispatch(getUserInforAction(id));
                      dispatch(getListTicketsByUserAction(id));
                      history.push("/admin/user/profile");
                    }}
                    className="text-green-600 text-2xl mr-4 cursor-pointer"
                  >
                    <FileSearchOutlined />
                  </button>
                </Tooltip>
                <Tooltip title="Sửa">
                  <button
                    onClick={() => {
                      dispatch(getUserInforAction(id));
                      history.push("/admin/user/edit");
                    }}
                    className="text-blue-600 text-2xl mr-4 cursor-pointer"
                  >
                    <EditOutlined />
                  </button>
                </Tooltip>
                <Tooltip title="Xóa">
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Bạn có chắc muốn xóa người dùng này không?"
                        )
                      ) {
                        dispatch(deleteUserAction(id));
                      }
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
