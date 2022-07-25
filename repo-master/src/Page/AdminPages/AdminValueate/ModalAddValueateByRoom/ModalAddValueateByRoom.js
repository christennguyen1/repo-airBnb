import React from "react";
import { Button, Form, Input, Modal, Radio } from "antd";

export const ModalAddValueateByRoom = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="content"
          label="Your reviews"
          rules={[
            {
              required: true,
              message: "Please input your reviews!",
            },
          ]}
        >
          <Input name="content" type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
