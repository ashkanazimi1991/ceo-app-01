import React from 'react';
import { Card, Col, Divider, Row } from 'antd';
import Link from 'next/link'
const { Meta } = Card;
import { descreption } from '../function/splitText';

const News = ({news}) => (
  <Row dir="rtl" style={{ margin: '2% auto' , maxWidth: '80%' }} >
    {news.map((item, index) => (
      <Col dir="rtl"  xl={8} md={12} sm={24}>
        <Card
          key={item.id}
          hoverable
          style={{ width: 240 , minHeight: '420px' , borderRadius: '8px' , margin: '0 auto' }}
          cover={<img alt="example" src={item.title_image} style={{width: '100%' , height: 'auto' , overflow: 'hidden'}} />}
        >
          <Meta title={<Divider>{item.title}</Divider>} description={`${descreption(item.body)} ${'...'} `} />
          <Link href={`/news/${item.id}`}><p dir='rtl' style={{textAlign: 'right' , marginTop: '20px' , color: '#3498DB'}}>ادامه مطلب</p></Link>
        </Card>
      </Col>
    ))}
  </Row>
);

export default News;