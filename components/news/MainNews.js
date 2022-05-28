import { Col, Row ,Card , Skeleton , Divider , Avatar} from 'antd'
import { UserOutlined } from '@ant-design/icons';
import React,{useState , useEffect} from 'react'
import {  descreption } from '../function/splitText';
import Link from 'next/link';
const { Meta } = Card;
import * as shamsi from 'shamsi-date-converter';



export const MainNews = ({newsList}) => {
    const [loading , setLoading] = useState(true);

    useEffect(() =>{
        setTimeout(() =>{
          setLoading(false)
        },1000)
      },[]);

  return (
    <Row style={{width: '100%'}} justify='space-evenly'>
       {
           newsList.map(item => 
            <Col xl={6} lg={8} md={12} sm={24}>
                <Card
                    hoverable
                    style={{ width: 300 , margin: '20px auto' , minHeight: '510px'}}
                >

                    {loading ? <Skeleton.Image style={{width: '100%!important'}}  /> : ''}
                    <Skeleton loading={loading} active >
                    <img className='productsImage' src={item.title_image} alt="image" />
                    <Divider>{item.title}</Divider>
                        <Meta
                        style={{direction: 'rtl'}}
                        description={`${descreption(item.body)} ${'...'}`}
                        />
                        <section style={{marginTop: '10%' , paddingLeft: '20px'}}>
                           <section style={{display: 'flex' , justifyContent: 'flex-start' , alignItems: 'center'}}>
                            <Avatar size="small" icon={<UserOutlined />} />
                            <p style={{margin: '0px' , paddingLeft: '10px' , color: '#ff0000'}}>{item.author.first_name} {item.author.last_name}</p>
                           </section>
                           <p style={{marginTop: '10px' , color: '#7f7f7f'}}>{shamsi.gregorianToJalali(item.created_at.split("-")).join("-")}</p>
                        </section>
                        <section dir='rtl' style={{paddingLeft: '20px'}}>
                            <Link href={`/news/${item.id}`}>ادامه مطلب</Link>
                        </section>
                    </Skeleton>
                </Card>
            </Col>
            )
       }
    </Row>
  )
}
