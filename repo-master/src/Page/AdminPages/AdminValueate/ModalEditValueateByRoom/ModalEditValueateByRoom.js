import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Radio } from "antd";
import { useSelector } from "react-redux";

export const ModalEditValueateByRoom = ({ visible, onUpdate, onCancel }) => {
  const [form] = Form.useForm();

  const { valueateDetail } = useSelector((state) => state.valueateReducer);
  // console.log("valueDetail", valueateDetail.content);

  const [state, setState] = useState("");

  useEffect(() => {
    setState(valueateDetail.content);
  }, [valueateDetail]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      visible={visible}
      okText="Update"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onUpdate(state);
            // onFinish(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          content: "",
        }}
      >
        <Form.Item
          label="Your reviews"
          rules={[
            {
              required: true,
              message: "Please input your reviews!",
            },
          ]}
        >
          <Input
            type="textarea"
            name="content"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
