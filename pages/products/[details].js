import React from "react";
import Head from "next/head";

import * as cookie from "cookie";

//import components
import Details from "../../components/DBProducts/Details";
import Layout from "../../components/Adviser/Layout";
import { MainLink } from "../../components/BaseUrl/BaseUrl";

//import modules
import axios from "axios";

const details = ({ detailsData }) => {
  return (
    <Layout>
      <Head>
        <title>لیست محصولات</title>
      </Head>
      <Details detailsData={detailsData} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { details } = context.query;

  return {
    props: { detailsData: details },
  };
}

export default details;
