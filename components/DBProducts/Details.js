import { Col, Divider, List, Row, Space, Typography } from "antd";
const { Title, Text } = Typography;
import React, { useState, useEffect } from "react";
import styles from "./details.module.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../components/redux/Cart/CartActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookies, setCookies, removeCookies } from "cookies-next";
import { MainLink } from "../BaseUrl/BaseUrl";
import axios from "axios";

export default function Details({ detailsData }) {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const [dataDetails, setDataDetails] = useState([]);
  const [login, setLogin] = useState(false);
  const [number, setNumber] = useState();
  const token = getCookies("token").token;

  useEffect(async () => {
    if (token) {
      await axios
        .get(encodeURI(`${MainLink}/products/rd/${detailsData}/`), {
          headers: {
            Authorization: "Token " + token,
          },
        })
        .then((response) => {
          if (response) {
            setDataDetails(response.data), setLogin(true);
          }
        })
        .catch((error) => {
          axios
            .get(encodeURI(`${MainLink}/products/rd/${detailsData}/`))
            .then((response) => setDataDetails(response.data));
        });
    } else {
      axios
        .get(encodeURI(`${MainLink}/products/rd/${detailsData}/`))
        .then((response) => setDataDetails(response.data));
    }
  }, [number]);

  const [imageSrc, setImageSrc] = useState(dataDetails.image);
  const [selectedItem, setSelectedItem] = useState();
  const imageHandler = (event) => {
    setSelectedItem(event.target.name);
    setImageSrc(event.target.src);
  };
  const videoHandler = (name, src) => {
    setSelectedItem(name);
    setImageSrc(src);
  };
  const likeHandler = async (id) => {
    if (login) {
      if (dataDetails.is_fav) {
        await axios
          .get(`${MainLink}/marks/ra/${id}/`, {
            headers: {
              Authorization: "Token " + token,
            },
          })
          .then((response) =>
            toast.success("محصول از لیست مورد علاقه خارج شد"),
            setNumber(Math.random())
          );
      } else {
        await axios
          .get(`${MainLink}/marks/ra/${id}/`, {
            headers: {
              Authorization: "Token " + token,
            },
          })
          .then((response) =>
            toast.success("محصول مورد نظر به لیست علاقه مندی افزوده شد"),
            setNumber(Math.random())
          );
      }
    } else {
      toast.error("برای افزودن به لیست علاقه مندی ابتدا باید وارد شوید");
    }
  };
  const data = [
    <p style={{ cursor: "pointer", textAlign: "left", width: "100%" }}>
      <i
        className="fas fa-heart"
        onClick={() => likeHandler(dataDetails.id)}
        style={{ color: dataDetails.is_fav ? "red" : "black" }}
      ></i>
    </p>,
    <p>
      <i className="fas fa-user"></i> فروشنده :{" "}
      {dataDetails.manufacturer_company}
    </p>,
    <p>
      <i className="fas fa-badge-percent"></i> گارانتی اصالت و سلامت فیزیکی کالا
    </p>,
    <a href={dataDetails.pdf_file}>
      <i className="fas fa-file-alt"></i> دانلود فایل pdf
    </a>,
    <p>
      <i className="fas fa-calculator-alt"></i> تعداد موجود در انبار :{" "}
      {dataDetails.repository_quantity}
    </p>,
    <p>
      <i className="fas fa-dollar-sign"></i> قیمت محصول : {dataDetails.price}
    </p>,
    <button
      style={{
        backgroundColor: "#E74C3C",
        width: "80%",
        margin: "0 auto",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        textAlign: "center",
        padding: ".5rem 0px",
        cursor: "pointer",
      }}
      onClick={() => {
        dispatch(addItem(dataDetails));
        toast.success("محصول مورد نظر به سبد خرید افزوده شد");
      }}
    >
      خرید
    </button>,
  ];
  return (
    <Row className={styles.container}>
      <Title
        style={{ fontWeight: "400", width: "100%", textAlign: "right" }}
        level={3}
      >
        {dataDetails.name}
      </Title>
      <Row dir="rtl">
        <Divider orientation="right"></Divider>
        <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
          <Row justify="center">
            {selectedItem == "video" ? (
              <video style={{ width: "70%", height: "auto" }} controls>
                <source
                  src={imageSrc ? imageSrc : dataDetails.product_video}
                  type="video/mp4"
                />
              </video>
            ) : (
              <img
                style={{ width: "70%", height: "auto" }}
                src={imageSrc ? imageSrc : dataDetails.image}
              />
            )}
          </Row>
          <Row style={{ padding: "15px 0px" }} justify="space-evenly">
            <Col
              style={
                dataDetails.image2 === imageSrc
                  ? { display: "none" }
                  : { display: "block", margin: "0 auto" }
              }
              xs={{ span: 6, offset: 2 }}
              sm={{ span: 6, offset: 2 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 6, offset: 2 }}
            >
              <img
                name="image"
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
                src={dataDetails.image2}
                onClick={imageHandler}
              />
            </Col>
            <Col
              style={
                dataDetails.image3 === imageSrc
                  ? { display: "none" }
                  : { display: "block", margin: "0 auto" }
              }
              xs={{ span: 6, offset: 2 }}
              sm={{ span: 6, offset: 2 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 6, offset: 2 }}
            >
              <img
                name="image"
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
                src={dataDetails.image3}
                onClick={imageHandler}
              />
            </Col>
            <Col
              style={
                dataDetails.image === imageSrc
                  ? { display: "none" }
                  : { display: "block", margin: "0 auto" }
              }
              xs={{ span: 6, offset: 2 }}
              sm={{ span: 6, offset: 2 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 6, offset: 2 }}
            >
              <img
                name="image"
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
                src={dataDetails.image}
                onClick={imageHandler}
              />
            </Col>
            <Col
              style={
                dataDetails.product_video === imageSrc &&
                dataDetails.product_video != null
                  ? { display: "none" }
                  : { display: "block", margin: "0 auto" }
              }
              xs={{ span: 6, offset: 2 }}
              sm={{ span: 6, offset: 2 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 6, offset: 2 }}
            >
              <video
                name="video"
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
                onClick={() => videoHandler("video", dataDetails.product_video)}
              >
                <source src={dataDetails.product_video} type="video/mp4" />
              </video>
            </Col>
          </Row>
        </Col>
        <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 10 }} dir="rtl">
          <Text
            style={{ margin: "5%", textAlign: "right!important" }}
            type="secondary"
          >
            توضیحات محصول
          </Text>
          <p
            disabled
            style={{
              width: "100%",
              minHeight: "400px",
              border: "none",
              borderRadius: "8px",
              overflowY: "auto",
              padding: "20px",
              textAlign: "right",
              direction: "rtl",
              margin: "10px auto",
            }}
          >
            {dataDetails.body}
          </p>
        </Col>
        <Col
          dir="rtl"
          style={{ margin: "45px auto" }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 6 }}
        >
          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Col>
      </Row>
      <ToastContainer />
    </Row>
  );
}
