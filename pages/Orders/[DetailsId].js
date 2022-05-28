import axios from 'axios'
import Head from 'next/head'
import styles from "../Orders/Details.module.css"
import Navbar from '../Navbar/index'
import SideBar from '../SideBar/Index'
import * as cookie from 'cookie'
import { MainLink } from '../../components/baseUrl/BaseUrl'


// export const getStaticPaths = async () => {
//   const data = await axios.get(`http://45.159.113.83/api/v1/user/orders/`, {
//       headers:{
//         'Authorization': 'Token '+ '96f20d6d2a398fae5c42a67f1ff34241ae7a459c', 
//     },
//     })
//     const response = data.data.results
//     const paths = response.map(item => {
//       return {
//         params: {DetailsId: item.order_id.toString() }
//       }
//     })

//     return{
//       paths,
//       fallback: false
//     }
// }



//get data from database
export const getServerSideProps = async (context) => {
  const parsedCookies = cookie.parse(context.req.headers.cookie);
  const order_Id = context.params.DetailsId;
  const data = await axios.get(`${MainLink}/order/${order_Id}/`, {
      headers:{
        'Authorization': 'Token '+ parsedCookies.token, 
    },
    })
    const response = data.data

    return{
      props:{data: response}
    }
}

const DetailsId = ({ data}) => {
  return (
    <div className={styles.container}>
      {console.log(data)}
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
                <h3> <i className="fas fa-shopping-basket"></i> جزئیات سفارش </h3>
                <p>تاریخ: {data.created}</p>
                <p>ایدی سفارش: {data.order_id}</p>
              </section>
              <hr />
              <section className={styles.Order_Transferee}>
                <div className={styles.Order_Transferee_Flex}>
                  <p>تحویل گیرنده : {data.data_1.owner.full_name}</p>
                  <p> شماره تماس : {data.data_1.owner.phone_number}</p>
                </div>
                <p> آدرس : {data.data_1.owner.address}</p>
              </section>
              <hr />
              <section className={styles.Orders_Table}>
                <div className={styles.Order_Tracking}>
                  <p>جمع قیمت کالاهای مرسوله: {data.amount} ریال</p>
                  <p>هزینه ارسال: رایگان</p>
                </div>
                <hr />
                {data.data_2.map(item =>
                <div key={item.id}>
                  <section  className={styles.order_Item}>
                  <div className={styles.order_Item_Image}>
                    <img style={{width: 140 , height: 140}} src={item.product.image} loading="lazy" />
                  </div>
                  <div className={styles.order_Item_Details}>
                  <div className={styles.order_Item_Title}>
                    <h4>{item.product.name}</h4>
                  </div>
                    <div className="product-des" dangerouslySetInnerHTML={{ __html: item.product.descreption }}></div>
                    <p>{item.product.manufacturer_company}</p>
                    <div className={styles.order_Item_Count_Price}>
                    <p>تعداد {item.quantity}</p>
                    <p style={{textAlign: 'left'}}> {item.product.price} ریال</p>
                  </div>
                  </div>
                </section>
                <hr />
                </div>
                )}
                
              </section>
            </section>
          </section>
          <section className={styles.SideBar}>
            <SideBar />
          </section>
          </section>

    </div>
  );
}

export default DetailsId;