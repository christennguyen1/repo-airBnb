import React from "react";
import { Button, Input, Form, Select, InputNumber } from "antd";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { addLocationAction } from "../../../../redux/Actions/locationAction";

export default function AdminAddLocation() {
  const dispatch = useDispatch();

  //Form
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //formik
  const formik = useFormik({
    initialValues: {
      name: "",
      province: "",
      country: "",
      valueate: "",
    },
    onSubmit: (values) => {
      dispatch(addLocationAction(values));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("* Required!")
        .min(2, "* Minimum 2 characters!"),

      province: Yup.string().required("* Required!"),
      country: Yup.string().required("* Required!"),
      valueate: Yup.string().required("* Required!"),
    }),
  });

  return (
    <div className="container mx-auto" style={{ width: 800 }}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onSubmitCapture={formik.handleSubmit}
        form={form}
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item label="Name">
          <Input
            name="name"
            placeholder="Enter the name"
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
        </Form.Item>

        <Form.Item label="Province">
          <Input
            name="province"
            placeholder="Enter the province"
            onChange={formik.handleChange}
          />
          {formik.errors.province && formik.touched.province && (
            <p className="text-red-600">{formik.errors.province}</p>
          )}
        </Form.Item>
        <Form.Item label="Country">
          <Input
            name="country"
            placeholder="Enter the country"
            onChange={formik.handleChange}
          />
          {formik.errors.country && formik.touched.country && (
            <p className="text-red-600">{formik.errors.country}</p>
          )}
        </Form.Item>

        <Form.Item label="Valueate">
          <InputNumber
            min={0}
            max={10}
            style={{ width: "100%" }}
            name="valueate"
            placeholder="Enter the valueate"
            onChange={(e) => {
              formik.setFieldValue("valueate", e);
            }}
          />
          {formik.errors.valueate && formik.touched.valueate && (
            <p className="text-red-600">{formik.errors.valueate}</p>
          )}
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" size="large">
            Thêm vị trí
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
