import React from 'react'
import Head from 'next/head'


//import components
import { MainNews } from '../../components/news/MainNews'
import Layout from '../../components/Adviser/Layout'
import { MainLink } from '../../components/BaseUrl/BaseUrl'

//import modules
import axios from 'axios'

const index = ({newsList}) => {
  return (
    <Layout>
        <Head>
            <title>اخبار</title>
        </Head>
        <MainNews newsList={newsList} />
    </Layout>
  )
}

export async function getServerSideProps(context){
    const newsList = await axios.get(encodeURI(`${MainLink}/news/w_p/`));

    const newsResponse = newsList.data;



    return{
    props:{newsList: newsResponse }
    }
}
export default index