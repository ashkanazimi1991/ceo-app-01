import React,{useEffect, useState} from 'react';
import axios from 'axios'
import Head from 'next/head'
import styles from "../Wallet/Wallet.module.css"
import Navbar from '../Navbar/index'
import SideBar from '../SideBar/Index'
import * as cookie from 'cookie'
import {MainLink, MainLinkSingel} from "../../components/BaseUrl/BaseUrl";



//get data from database
export const getServerSideProps = async (context) => {

  let parsedCookies = context.req.headers.cookie ? cookie.parse(context.req.headers.cookie) : false ;
  let token = parsedCookies ? parsedCookies.token : null ;

  if (token) {
    // const parsedCookies = cookie.parse(context.req.headers.cookie);
    const data = await axios.get(`${MainLink}/wallet/`, {
      headers:{
        'Authorization': 'Token '+ parsedCookies.token, 
    },
  })
    const response = data.data

    return{
      props:{data: response}
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    }
  }
}


function Wallet ({data}){
    const [input , setInput] = useState();

    const Input_Handler = (event) =>{
      setInput(event.target.value)
    }

    const payHandler = () =>{
      fetch(`${MainLinkSingel}/goto_gateway-wallet/`, {
        method: 'POST', 
        headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Token '+ localStorage.getItem('token'), 
            }, 
        body: JSON.stringify({total_price: input})
        }).then(res => {
          window.location.replace(res.url);
      });
    }
    return(
      <div className={styles.container}>
        <Head>
          <title>کیف پول</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <section className={styles.Flex}>
          <section className={styles.main}>
              <section className={styles.Wallet_Container}>
                <section className={styles.Charge_Wallet}>
                 <section className={styles.Charge_Wallet_Box}>
                    <div className={styles.Charge_Wallet_Box_Header}>
                      <p> <i class="fas fa-sack-dollar"></i> شارژ کیف پول </p>
                    </div>
                    <hr />
                    <div className={styles.Charge_Wallet_Box_Text}>
                      <p>مبلغ شارژ خود را در بخش پایین وارد کنید</p>
                    </div>
                    <div className={styles.Charge_Wallet_Box_Input}>
                      <input onChange={Input_Handler} type="number" placeholder="مبلغ را وارد کنید" />
                    </div>
                    <div className={styles.Charge_Wallet_Box_Toast}>
                      <p>مبلغ قابل پرداخت</p>
                      <button>{input} ریال</button>
                    </div>
                    <div className={styles.Charge_Wallet_Box_Buttton}>
                      <button onClick={payHandler}>پرداخت</button>
                    </div>
                 </section>
                </section>
                <section className={styles.Wallet_Status}>
                <div className={styles.Money}>
                    <div className={styles.forPadding}>
                    <i className="fas fa-3x fa-coins"></i>
                    <p className={styles.numbers}>{data}</p>
                    </div>
                    <div className={styles.bottomBox}>
                      <p style={{color: '#F0AD4E'}}>کیف پول (ریال)</p>
                    </div>
                  </div>
                </section>
              </section>
          </section>
          <section className={styles.SideBar}>
            <SideBar />
          </section>
        </section>
      </div>
    )
}

export default Wallet