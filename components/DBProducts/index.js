import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { getCookies, setCookies, removeCookies } from "cookies-next";

import { AuthContext } from "../context/AuthContextProvider";
import { TokenContext } from "../context/TokenContextProvider";

import { descreption } from "../function/splitText";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../components/redux/Cart/CartActions";

//import antd
import { Card, Row, Col, Skeleton, Divider } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  ShoppingOutlined,
  MenuOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { MainLink } from "../BaseUrl/BaseUrl";
const { Meta } = Card;

const index = ({ slug }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const token = getCookies("token").token;
  const auth = useContext(AuthContext);

  useEffect(async () => {
    if (token) {
      await axios
        .get(encodeURI(`${MainLink}/products/${slug}/`), {
          headers: {
            Authorization: "Token " + token,
          },
        })
        .then((response) => {
          if (response) {
            setData(response.data);
          }
        })
        .catch((error) => {
          axios
            .get(encodeURI(`${MainLink}/products/${slug}/`))
            .then((response) => setData(response.data));
        });
    } else {
      axios
        .get(encodeURI(`${MainLink}/products/${slug}/`))
        .then((response) => setData(response.data));
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [auth]);

  const likeHandler = async (id) => {
      await axios
        .get(`${MainLink}/marks/ra/${id}/`, {
          headers: {
            Authorization: "Token " + token,
          },
        })
        .then((response) =>
          toast.success("محصول مورد نظر به لیست علاقه مندی افزوده شد")
        ).catch(error => {
          toast.error("برای افزودن به لیست علاقه مندی ابتدا باید وارد شوید");
        })
    }
  return (
    <Row
      style={{ width: "100%", margin: "5% 0px", direction: "rtl" }}
      justify="space-evenly"
    >
      {data.map((item) => (
        <Col
          key={item.id}
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
          <Card
            hoverable
            style={{ width: 300, margin: "20px auto" }}
            actions={[
              <Link href={`/products/${item.id}`}>
                <MenuOutlined key="menu" />
              </Link>,
              <ShoppingOutlined
                onClick={() => {
                  dispatch(addItem(item));
                  toast.success("محصول مورد نظر به سبد خرید افزوده شد");
                }}
                key="shopping"
              />,
              <HeartOutlined
                onClick={() => likeHandler(item.id)}
                key="heart"
                style={{ color: item.is_fav ? "red" : null }}
              />,
            ]}
          >
            {loading ? (
              <Skeleton.Image style={{ width: "100%!important" }} />
            ) : (
              ""
            )}
            <Skeleton loading={loading} active>
              <img className="productsImage" src={item.thumbnail} alt="image" />
              <Divider>{item.name}</Divider>
              <Meta description={descreption(item.body)} />
            </Skeleton>
          </Card>
        </Col>
      ))}
      <ToastContainer />
    </Row>
  );
};

export default index;
