import React from "react";
import Head from "next/head";
import * as cookie from "cookie";
import { getCookie } from "cookies-next";

//import components
import DBProducts from "../../components/DBProducts/index";
import Layout from "../../components/Adviser/Layout";
import { MainLink } from "../../components/BaseUrl/BaseUrl";

//import modules
import axios from "axios";

const index = ({ slug }) => {
  return (
    <Layout>
      <Head>
        <title>لیست محصولات</title>
      </Head>
      <DBProducts slug={slug} />
    </Layout>
  );
};

export async function getServerSideProps({ req, res, query }) {
  const { slug } = query;

  return {
    props: { slug: slug },
  };
}

export default index;
