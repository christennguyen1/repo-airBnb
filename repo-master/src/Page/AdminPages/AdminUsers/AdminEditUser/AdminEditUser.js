import React from "react";
import { Button, Input, Form, Select, DatePicker } from "antd";
import * as Yup from "yup";
import { updateUserInforAction } from "../../../../redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import moment from "moment";
import { history } from "../../../../App";

export default function AdminEditUser() {
  const dispatch = useDispatch();
  const { userInforDetails,userInfor } = useSelector((state) => state.userReducer);

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
    enableReinitialize: true,
    initialValues: {
      id: userInforDetails._id,
      name: userInforDetails.name,
      address: userInforDetails.address,
      email: userInforDetails.email,
      phone: userInforDetails.phone,
      gender: userInforDetails.gender,
      password: userInforDetails.password,
      birthday: userInforDetails.birthday,
      type: userInforDetails.type,
    },
    onSubmit: (values) => {
      dispatch(updateUserInforAction(values, values.id));
      setTimeout(() => {
        if(userInfor.type==="ADMIN"){
        history.push("/admin/user");
        }
        else {
          history.push(`/profile/${values.id}`);
        }
      }, 1000);
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
        .min(8, "* Minimum 8 characters!"),

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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item label="Full Name">
          <Input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter your full name"
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
        </Form.Item>

        <Form.Item label="Password">
          <Input.Password
            disabled
            name="password"
            value={formik.values.password}
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
            value={formik.values.address}
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
            value={formik.values.email}
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
            onChange={(value) => {
              formik.setFieldValue("gender", value);
            }}
            value={formik.values.gender}
          >
            <Option value={true}>Male</Option>
            <Option value={false}>Female</Option>
          </Select>
          {formik.errors.gender && formik.touched.gender && (
            <p className="text-red-600">{formik.errors.gender}</p>
          )}
        </Form.Item>
        <Form.Item label="Date of birth">
          <DatePicker
            value={moment(formik.values.birthday)}
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
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="Enter your phone number"
          />
          {formik.errors.phone && formik.touched.phone && (
            <p className="text-red-600">{formik.errors.phone}</p>
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit" size="large">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
