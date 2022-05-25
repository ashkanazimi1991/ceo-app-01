import React from 'react'
import Head from 'next/head'
import * as cookie from 'cookie'


//import components
import Layout from '../../components/Adviser/Layout'
import { MainLink } from '../../components/BaseUrl/BaseUrl'
import Cart from "../../components/Cart/index"

//import modules
import axios from 'axios'


const index = () => {
  return (
    <Layout>
        <Head>
            <title>سبد خرید</title>
        </Head>
        <Cart />
    </Layout>
  )
}

export async function getServerSideProps(context) {

  let parsedCookies = context.req.headers.cookie ? cookie.parse(context.req.headers.cookie) : false;
  let token = parsedCookies ? parsedCookies.token : null;

  if (token) {
    return {
      props: {}
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

export default index