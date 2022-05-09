import { Row , Col ,Card , Input} from 'antd'
import React,{useState} from 'react'


import {PlusCircleOutlined , MinusOutlined , FieldNumberOutlined } from '@ant-design/icons';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, increase, decrease , increaseInput } from '../../components/redux/Cart/CartActions';

const { Meta } = Card;

//styles
import styles from "./cart.module.css"



export default function index() {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

  return (
    <div className='cartContainer'>
        <Row style={{width: '100%'}}>
            {state.selectedItems.map(item => 
                <Col key={item.id} span={24} style={{maxWidth: '95%' , margin: '20px auto'}}>
                <Card
                    className={styles.cartCard}
                    dir='rtl' 
                    style={{display: 'flex' , width: '100%' , padding: '20px'}}
                    hoverable
                    cover={<img alt={item.name} src={item.image} style={{width: '100%' , height: '150px' , marginRight: '15px'}} />}
                    >
                        
                    <section className={styles.cardDescription} style={{width: '100%' , display: 'flex' , justifyContent: "space-between" , alignItems: 'center'}}>
                        <Meta className={styles.descriptionText} title={item.name} description={item.body} style={{marginRight: '20px'}} />
                        <section className={styles.inputNumber} style={{display: 'flex' , justifyContent: "space-between" , alignItems: 'center'}}>
                            <PlusCircleOutlined twoToneColor="#52c41a" />
                            <input className={styles.quantityInput} value={item.quantity > item.repository_quantity ? item.repository_quantity :  item.quantity } placeholder="تعداد ..."  type="number" max={item.repository_quantity} onChange={(event) => event.target.value > item.repository_quantity ? dispatch(increaseInput(item.repository_quantity , item)) : dispatch(increaseInput(event.target.value , item))} />
                            <MinusOutlined twoToneColor="#eb2f96" />
                        </section>
                    </section>
                </Card>
                </Col>
            )}
        </Row>
    </div>
  )
}
