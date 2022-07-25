import React from "react";
import { Button, Input, Form, Select, InputNumber, Switch } from "antd";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import TextArea from "antd/lib/input/TextArea";
import { updateRoomDetailAction } from "../../../../redux/Actions/roomAction";
import { useParams } from "react-router-dom";

export default function AdminEditRoom() {
  const dispatch = useDispatch();
  const { locationId } = useParams();

  const { roomDetail } = useSelector((state) => state.roomReducer);
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
      id: roomDetail._id,
      name: roomDetail.name,
      guests: roomDetail.guests,
      bedRoom: roomDetail.bedRoom,
      bath: roomDetail.bath,
      description: roomDetail.description,
      price: roomDetail.price,
      elevator: roomDetail.elevator,
      hotTub: roomDetail.hotTub,
      pool: roomDetail.pool,
      indoorFireplace: roomDetail.indoorFireplace,
      dryer: roomDetail.dryer,
      gym: roomDetail.gym,
      kitchen: roomDetail.kitchen,
      wifi: roomDetail.wifi,
      heating: roomDetail.heating,
      cableTV: roomDetail.cableTV,
      locationId: locationId,
    },
    onSubmit: (values) => {
      dispatch(updateRoomDetailAction(values, values.id, locationId));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("* Required!")
        .min(2, "* Minimum 2 characters!"),

      guests: Yup.string().required("* Required!"),
      bedRoom: Yup.string().required("* Required!"),
      bath: Yup.string().required("* Required!"),
      description: Yup.string().required("* Required!"),
      price: Yup.string().required("* Required!"),
    }),
  });

  const handleChangeSwitch = (name) => {
    return (e) => {
      formik.setFieldValue(name, e);
    };
  };
  return (
    <div className="container mx-auto" style={{ width: 800 }}>
      <Form
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        layout="vertical"
        onSubmitCapture={formik.handleSubmit}
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item label="Name">
          <Input
            value={formik.values.name}
            name="name"
            placeholder="Enter the name"
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
        </Form.Item>
        {/* <Form.Item label="Location-Id">
          <Input
            //  disabled
            name="locationId"
            value={JSON.stringify(formik.values.locationId)}
          />
          {formik.errors.locationId && formik.touched.locationId && (
            <p className="text-red-600">{formik.errors.locationId}</p>
          )}
        </Form.Item> */}
        <Form.Item label="Guests">
          <InputNumber
            value={formik.values.guests}
            min={1}
            name="guests"
            onChange={(e) => {
              formik.setFieldValue("guests", e);
            }}
          />
          {formik.errors.guests && formik.touched.guests && (
            <p className="text-red-600">{formik.errors.guests}</p>
          )}
        </Form.Item>
        <Form.Item label="Bed Room">
          <InputNumber
            value={formik.values.bedRoom}
            min={1}
            name="bedRoom"
            onChange={(e) => {
              formik.setFieldValue("bedRoom", e);
            }}
          />
          {formik.errors.bedRoom && formik.touched.bedRoom && (
            <p className="text-red-600">{formik.errors.bedRoom}</p>
          )}
        </Form.Item>
        <Form.Item label="Bath">
          <InputNumber
            value={formik.values.bath}
            min={1}
            name="bath"
            onChange={(e) => {
              formik.setFieldValue("bath", e);
            }}
          />
          {formik.errors.bath && formik.touched.bath && (
            <p className="text-red-600">{formik.errors.bath}</p>
          )}
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            value={formik.values.description}
            allowClear
            onChange={(e) => {
              formik.setFieldValue("description", e.target.value);
            }}
            rows={3}
          />
        </Form.Item>
        <Form.Item label="Price (VND)">
          <InputNumber
            value={formik.values.price}
            name="price"
            onChange={(e) => {
              formik.setFieldValue("price", e);
            }}
          />
          {formik.errors.price && formik.touched.price && (
            <p className="text-red-600">{formik.errors.price}</p>
          )}
        </Form.Item>
        <h1 className="text-lg mb-3">Convenients:</h1>
        <div className="grid grid-cols-5">
          <Form.Item label="Elevator" valuePropName="checked">
            <Switch
              checked={formik.values.elevator}
              onChange={handleChangeSwitch("elevator")}
            />
          </Form.Item>
          <Form.Item label="Hot Tub" valuePropName="checked">
            <Switch
              checked={formik.values.hotTub}
              onChange={handleChangeSwitch("hotTub")}
            />
          </Form.Item>
          <Form.Item label="Pool" valuePropName="checked">
            <Switch
              checked={formik.values.pool}
              onChange={handleChangeSwitch("pool")}
            />
          </Form.Item>
          <Form.Item label="Indoor Fireplace" valuePropName="checked">
            <Switch
              checked={formik.values.indoorFireplace}
              onChange={handleChangeSwitch("indoorFireplace")}
            />
          </Form.Item>
          <Form.Item label="Dryer" valuePropName="checked">
            <Switch
              checked={formik.values.dryer}
              onChange={handleChangeSwitch("dryer")}
            />
          </Form.Item>
          <Form.Item label="Gym" valuePropName="checked">
            <Switch
              checked={formik.values.gym}
              onChange={handleChangeSwitch("gym")}
            />
          </Form.Item>
          <Form.Item label="Kitchen" valuePropName="checked">
            <Switch
              checked={formik.values.kitchen}
              onChange={handleChangeSwitch("kitchen")}
            />
          </Form.Item>
          <Form.Item label="Wifi" valuePropName="checked">
            <Switch
              checked={formik.values.wifi}
              onChange={handleChangeSwitch("wifi")}
            />
          </Form.Item>
          <Form.Item label="Heating" valuePropName="checked">
            <Switch
              checked={formik.values.heating}
              onChange={handleChangeSwitch("heating")}
            />
          </Form.Item>
          <Form.Item label="Cable TV" valuePropName="checked">
            <Switch
              checked={formik.values.cableTV}
              onChange={handleChangeSwitch("cableTV")}
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button block type="primary" htmlType="submit" size="large">
            Cập nhật thông tin phòng
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
