import React from 'react';
import { Card, Col, Divider, Row } from 'antd';
import Link from 'next/link'
const { Meta } = Card;
import { descreption } from '../function/splitText';
import styles from "./news.module.css"

const News = ({news}) => (
  <Row className={styles.row}   >
    {news.map((item, index) => (
      <Col dir="rtl"  xl={8} md={12} sm={24}>
        <Card className={styles.card}
          key={item.id}hoverable
          cover={<img className={styles.img} alt="مدیریت آنلاین" src={item.title_image}  />}
        >
          <Meta title={<Divider>{item.title}</Divider>} description={`${descreption(item.body)} ${'...'} `} className={styles.title} />
          <Link href={`/news/${item.id}`}><p className={styles.p}>ادامه مطلب</p></Link>
        </Card>
      </Col>
    ))}
  </Row>
);

export default News;

// style={{ padding: '2% '  ,backgroundColor:'#045256' }}
// style={{ width: 290 , minHeight: '420px' , borderRadius: '10px' , margin: 'auto', marginTop:'20px', marginBottom:'20px' }}
// style={{width: '100%' , height: 'auto' , overflow: 'hidden'}}
// dir='rtl' style={{textAlign: 'right' , marginTop: '20px' , color: '#3498DB'}}