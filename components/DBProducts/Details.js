import { Col, Divider, List, Row, Space, Typography } from 'antd'
const { Title, Text } = Typography;
import React, { useState } from 'react'
import styles from "./details.module.css"


//redux
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, increase, decrease } from '../../components/redux/Cart/CartActions';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Details({ productsList }) {
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();


    const [imageSrc, setImageSrc] = useState(productsList.image);
    const [selectedItem, setSelectedItem] = useState();
    console.log(productsList);
    const imageHandler = (event) => {
        setSelectedItem(event.target.name)
        setImageSrc(event.target.src)
    }
    const videoHandler = (name , src) => {
        setSelectedItem(name)
        setImageSrc(src)
    }
    const data = [
        <p style={{ cursor: 'pointer', textAlign: 'left', width: '100%' }}><i className="fas fa-heart" style={{ color: productsList.is_fav ? 'red' : 'black' }}></i></p>,
        <p><i className="fas fa-user"></i> فروشنده : {productsList.manufacturer_company}</p>,
        <p><i className="fas fa-badge-percent"></i> گارانتی اصالت و سلامت فیزیکی کالا</p>,
        <a href={productsList.pdf_file} ><i className="fas fa-badge-percent"></i>دانلود فایل pdf</a>,
        <p><i className="fas fa-calculator-alt"></i> تعداد موجود در انبار : {productsList.repository_quantity}</p>,
        <p><i className="fas fa-dollar-sign"></i> قیمت محصول : {productsList.price}</p>,
        <buttom style={{backgroundColor: '#E74C3C' , width: '80%' , margin: '0 auto' , color: '#fff' , borderRadius: '8px' , textAlign: 'center' , padding: '.5rem 0px' , cursor: 'pointer'}} onClick={() => {dispatch(addItem(productsList)) ; toast.success("محصول مورد نظر به سبد خرید افزوده شد") }}>خرید</buttom>
    ];
    return (
        <Row className={styles.container}>
            <Title style={{ fontWeight: '400', width: '100%', textAlign: 'right' }} level={3}  >{productsList.name}</Title>
            <Row dir='rtl'>
                <Divider orientation="right"></Divider>
                <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} >
                    <Row justify='center'>
                        {selectedItem == 'video'?
                            <video style={{ width: '70%', height: 'auto' }} controls>
                                <source src={imageSrc ? imageSrc : productsList.product_video} type="video/mp4" />
                            </video>
                            :
                            <img style={{ width: '70%', height: 'auto' }} src={imageSrc ? imageSrc : productsList.image} />
                        }
                    </Row>
                    <Row style={{ padding: '15px 0px' }} justify='space-evenly'>
                        <Col style={productsList.image2 === imageSrc ? { display: 'none' } : { display: 'block'  , margin: '0 auto'}} xs={{ span: 6, offset: 2 }} sm={{ span: 6, offset: 2 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }}>
                            <img name="image" style={{ width: '100%', height: 'auto', cursor: 'pointer' }} src={productsList.image2} onClick={imageHandler} />
                        </Col>
                        <Col style={productsList.image3 === imageSrc ? { display: 'none' } : { display: 'block' , margin: '0 auto' }} xs={{ span: 6, offset: 2 }} sm={{ span: 6, offset: 2 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }}>
                            <img name="image" style={{ width: '100%', height: 'auto', cursor: 'pointer' }} src={productsList.image3} onClick={imageHandler} />
                        </Col>
                        <Col style={productsList.image === imageSrc ? { display: 'none' } : { display: 'block' , margin: '0 auto' }} xs={{ span: 6, offset: 2 }} sm={{ span: 6, offset: 2 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }}>
                            <img name="image" style={{ width: '100%', height: 'auto', cursor: 'pointer' }} src={productsList.image} onClick={imageHandler} />
                        </Col>
                        <Col style={productsList.product_video === imageSrc && productsList.product_video != null ? { display: 'none' } : { display: 'block' , margin: '0 auto' }} xs={{ span: 6, offset: 2 }} sm={{ span: 6, offset: 2 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }}>
                            <video name="video" style={{ width: '100%', height: 'auto', cursor: 'pointer' }} onClick={() => videoHandler('video' , productsList.product_video)}>
                                <source src={productsList.product_video} type="video/mp4" />
                            </video>
                        </Col>
                    </Row>
                </Col>
                <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 10 }} dir='rtl'>
                    <Text style={{ margin: '5%', textAlign: 'right!important' }} type="secondary">توضیحات محصول</Text>
                    <p disabled style={{ width: '100%', minHeight: '400px', border: 'none', borderRadius: '8px', overflowY: 'auto', padding: '20px', textAlign: 'right', direction: 'rtl', margin: '10px auto' }}>
                        {productsList.body}
                    </p>
                </Col>
                <Col dir='rtl' style={{ margin: '45px auto' }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }}>
                    <List
                        size="small"
                        bordered
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Col>
            </Row>
            <ToastContainer />
        </Row>
    )
}
