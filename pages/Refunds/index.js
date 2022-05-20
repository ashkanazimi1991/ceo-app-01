import axios from 'axios'
import Head from 'next/head'
import styles from "../Refunds/Details.module.css"
import Navbar from '../Navbar/index'
import SideBar from '../SideBar/Index'
import * as cookie from 'cookie'
import {BaseUrl, MainLink} from "../../components/baseUrl/BaseUrl";
import React,{useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const Refunds = () => {

  const router = useRouter();


  const [data , setData] = useState({
    order_id: '',
    message: '',
  })

  const inputsHandler = (event) =>{
    setData({...data, [event.target.name] : event.target.value})
  }

  const clickHandler = () =>{
    axios.post(`${MainLink}/refund/c/`,{
      order_id: data.order_id,
      message: data.message,
    },{
      headers: {
        'Authorization': 'Token '+ localStorage.getItem('token'), 
      },
    }).then(response => {if(response){
      toast.success("درخواست با موفقیت ثبت شد");
    }})
    .catch(error => {
      console.log(error);
    })
}


  return (
    <div className={styles.container}>
       <Head>
        <title>جزئیات سفارش</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <section className={styles.Flex}>
          <section className={styles.main}>
            <section className={styles.Details_Order_Box}>
              <section className={styles.Orders_Text}>
                <h3> <i class="fas fa-undo"></i>  ثبت مرجوعی </h3>
              </section>
              <hr />
              <section className={styles.Orders_Table}>
                <section className={styles.inputs}>
                  <input name='order_id' value={data.order_id} type='text' placeholder="شناسه سفارش" onChange={inputsHandler} />
                  <textarea name='message' value={data.message} rows='10' placeholder='پیغام' onChange={inputsHandler}>

                  </textarea>
                  <div className={styles.btn}>
                    <button onClick={clickHandler}>ثبت درخواست</button>
                  </div>
                </section>
              </section>
            </section>
          </section>
          <section className={styles.SideBar}>
            <SideBar />
          </section>
          </section>
      <ToastContainer />
    </div>
  );
}

export default Refunds;