import React from 'react'
import Head from 'next/head'

import * as cookie from 'cookie'


//import components
import Details from "../../components/DBProducts/Details"
import Layout from '../../components/Adviser/Layout'
import { MainLink } from '../../components/baseUrl/BaseUrl'

//import modules
import axios from 'axios'


const details = ({productsList}) => {
  return (
    <Layout>
        <Head>
            <title>لیست محصولات</title>
        </Head>
        <Details productsList={productsList} />
    </Layout>
  )
}

export async function getServerSideProps(context){
    const {details} = context.query;
    if (context.req.headers.cookie) {
      const parsedCookies = cookie.parse(context.req.headers.cookie);
      const productsList = await axios.get(encodeURI(`${MainLink}/products/rd/${details}/`),
      {
          headers:{
            'Authorization': 'Token '+  parsedCookies.token, 
          }
      });
    
      const productsResponse = productsList.data;
      return{
        props:{productsList: productsResponse }
      }
    }else{
      const productsList = await axios.get(encodeURI(`${MainLink}/products/rd/${details}/`));
    
      const productsResponse = productsList.data;
      return{
        props:{productsList: productsResponse }
      }
  }
}

export default details