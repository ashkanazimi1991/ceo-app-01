import { Col, Divider, List, Row, Space , Typography } from 'antd'
const { Title , Text } = Typography;
import React,{useState} from 'react'

export default function Details({productsList}) {
    const [imageSrc , setImageSrc] = useState('');
    console.log(productsList);
    const imageHandler = (event) =>{
        setImageSrc(event.target.src)
    }
    const data = [
        <p style={{cursor: 'pointer' , textAlign:'left' , width: '100%'}}><i className="fas fa-heart" style={{color: productsList.is_fav ? 'red' : 'black'}}></i></p>,
        <p><i className="fas fa-user"></i> فروشنده : {productsList.manufacturer_company}</p>,
        <p><i className="fas fa-badge-percent"></i> گارانتی اصالت و سلامت فیزیکی کالا</p>,
        <p><i className="fas fa-calculator-alt"></i> تعداد موجود در انبار : {productsList.repository_quantity}</p>,
        <p><i className="fas fa-dollar-sign"></i> قیمت محصول : {productsList.price}</p>
      ];
  return (
    <Row style={{width: '90%' , boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' , margin: '5% 0px' , padding: '2%'}}>
         <Title style={{fontWeight: '400' , width: '100%' , textAlign: 'right'}} level={3}  >{productsList.name}</Title>
    <Row dir='rtl'>
        <Divider orientation="right"></Divider>
        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 8}} >
           <Row justify='center'>
            <img style={{width: '70%' , height: 'auto'}} src={imageSrc ? imageSrc : productsList.image} />
           </Row>
           <Row style={{padding: '15px 0px'}} justify='space-evenly'>
            <Col xs={{span: 6 , offset: 2}} sm={{span: 6 , offset: 2}} md={{span: 6 , offset: 2}} lg={{span: 6 , offset: 2}}>
                <img style={{width: '100%' , height: 'auto' , cursor: 'pointer'}} src={productsList.image2} onClick={imageHandler} />
            </Col>
            <Col xs={{span: 6 , offset: 2}} sm={{span: 6 , offset: 2}} md={{span: 6 , offset: 2}} lg={{span: 6 , offset: 2}}>
                <img style={{width: '100%' , height: 'auto' , cursor: 'pointer'}} src={productsList.image3} onClick={imageHandler} />
            </Col>
            <Col xs={{span: 6 , offset: 2}} sm={{span: 6 , offset: 2}} md={{span: 6 , offset: 2}} lg={{span: 6 , offset: 2}}>
                <img style={{width: '100%' , height: 'auto' , cursor: 'pointer'}} src={productsList.image} onClick={imageHandler} />
            </Col>
           </Row>
        </Col>
        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 10}}  dir='rtl'>
            <Text style={{margin: '5%' , textAlign: 'right!important'}} type="secondary">توضیحات محصول</Text>
            <p disabled style={{width: '90%' , minHeight: '400px' , border: 'none' , borderRadius: '8px' , overflowY: 'auto' , padding: '20px' ,textAlign: 'right' , direction: 'rtl' , boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', margin: '20px auto' }}>
                {productsList.body}
            </p>
        </Col>
        <Col dir='rtl' style={{margin: '45px auto'}} sm={{span: 24}} md={{span: 24}} lg={{span: 6}}>
        <List 
        size="small"
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
        />
        </Col>
    </Row>
    </Row>
  )
}
