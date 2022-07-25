import React from "react";
import { Button, Input, Form, Select, DatePicker } from "antd";
import * as Yup from "yup";
import { addUserAdminAction } from "../../../../redux/Actions/userAction";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import moment from "moment";

export default function AdminAddUsers() {
  const dispatch = useDispatch();

  //Form
  const { Option } = Select;
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
      address: "",
      email: "",
      phone: "",
      gender: "",
      password: "",
      birthday: "",
      type: "ADMIN",
    },
    onSubmit: (values) => {
      dispatch(addUserAdminAction(values));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("* Required!")
        .min(2, "* Minimum 2 characters!"),

      address: Yup.string().required("* Required!"),
      email: Yup.string()
        .required("* Required!")
        .email("Invalid email format!"),
      phone: Yup.string()
        .required("* Required!")
        .min(10, "* Invalid phone number!")
        .matches(/^[0-9]+$/, "* Invalid phone number !"),
      gender: Yup.string().required("* Required!"),
      password: Yup.string()
        .required("* Required!")
        .min(6, "* Minimum 6 characters!"),

      birthday: Yup.string().required("* Required!"),
    }),
  });
  const handleChangeDatePicker = (value) => {
    let birthday = moment(value);
    formik.setFieldValue("birthday", birthday);
  };

  return (
    <div className="container mx-auto" style={{ width: 800 }}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onSubmitCapture={formik.handleSubmit}
        form={form}
        // initialValues={{
        //   remember: true,
        // }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item label="Full Name">
          <Input
            name="name"
            onChange={formik.handleChange}
            placeholder="Enter your full name"
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
        </Form.Item>

        <Form.Item label="Password">
          <Input.Password
            name="password"
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-600">{formik.errors.password}</p>
          )}
        </Form.Item>

        <Form.Item label="Address">
          <Input
            name="address"
            onChange={formik.handleChange}
            placeholder="Enter your address"
          />
          {formik.errors.address && formik.touched.address && (
            <p className="text-red-600">{formik.errors.address}</p>
          )}
        </Form.Item>

        <Form.Item label="Email">
          <Input
            name="email"
            onChange={formik.handleChange}
            placeholder="Enter your email"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-600">{formik.errors.email}</p>
          )}
        </Form.Item>

        <Form.Item label="Gender">
          <Select
            placeholder="Select your gender"
            name="gender"
            onChange={(e) => {
              if (e === "male") {
                formik.setFieldValue("gender", true);
              } else formik.setFieldValue("gender", false);
            }}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
          {formik.errors.gender && formik.touched.gender && (
            <p className="text-red-600">{formik.errors.gender}</p>
          )}
        </Form.Item>
        <Form.Item label="Date of birth">
          <DatePicker
            style={{ width: "100%" }}
            name="dob"
            placeholder="Choose your birthday"
            format="DD-MM-YYYY"
            onChange={handleChangeDatePicker}
          />
          {formik.errors.birthday && formik.touched.birthday && (
            <p className="text-red-600">{formik.errors.birthday}</p>
          )}
        </Form.Item>
        <Form.Item label="Phone number">
          <Input
            name="phone"
            onChange={formik.handleChange}
            placeholder="Enter your phone number"
          />
          {formik.errors.phone && formik.touched.phone && (
            <p className="text-red-600">{formik.errors.phone}</p>
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit" size="large">
            Thêm Admin
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
