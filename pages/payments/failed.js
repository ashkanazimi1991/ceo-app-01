import React from 'react'
import Failed from '../../components/payments/Failed'
import Head from 'next/head'


const failed = () => {
  return (
    <div>
        <Head>
        <title>پرداخت ناموفق | وتنا</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Failed />
    </div>
  )
}

export async function getServerSideProps(context) {
  let resault = null;
  const { tc } = context.query;

  if (tc) {
    resault = true;
  } else {
    resault = false;
  }


  if (resault) {
    return {
      props: {}
    }
  }
  else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    }
  }
}

export default failed