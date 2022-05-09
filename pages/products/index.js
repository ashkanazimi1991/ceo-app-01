import React from 'react'
import Head from 'next/head'
import * as cookie from 'cookie'


//import components
import DBProducts from "../../components/DBProducts/index"
import Layout from '../../components/Adviser/Layout'
import { MainLink } from '../../components/BaseUrl/BaseUrl'

//import modules
import axios from 'axios'


const index = ({productsList}) => {
  return (
    <Layout>
        <Head>
            <title>لیست محصولات</title>
        </Head>
        <DBProducts productsList={productsList} />
    </Layout>
  )
}

export async function getServerSideProps(context){
    const {slug} = context.query;
    if (context.req.headers.cookie) {
      const parsedCookies = cookie.parse(context.req.headers.cookie);
      const productsList = await axios.get(encodeURI(`${MainLink}/products/${slug}/`),
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
    const productsList = await axios.get(encodeURI(`${MainLink}/products/${slug}/`));
    
    const productsResponse = productsList.data;
    return{
      props:{productsList: productsResponse }
    }
  }
}

export default index