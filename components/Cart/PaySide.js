import React, { useEffect, useState } from 'react'
import payStyle from "./paySide.module.css";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainLink } from '../BaseUrl/BaseUrl';



const PaySide = () => {
  const router = useRouter();
  const [checkResponse, setCheckResponse] = useState([])
  const refreshData = () => {
    router.replace(router.asPath);
  }
  let state = useSelector(state => state.cartState)
  const [userBag, setUserBag] = useState(null)
  const productsId = []
  state.selectedItems.forEach(element => {
    productsId.push(element.id)
  });

  useEffect(async () => {
    await axios.get(`${MainLink}/buying_w_wallet/`, {
      headers: {
        'Authorization': 'Token ' + localStorage.getItem('token'),
      }
    }).then(response => setUserBag(response.data));
  }, [])

  const paymentHandler = (price) => {
    fetch(`http://45.159.113.83:801/goto_gateway/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({ total_price: price })
    }).then(res => {
      window.location.replace(res.url);
    });
  }


  const bagPaymentHandler = (price) => {
    if (userBag > state.selectedItems.reduce((total, products) => total + (products.price_after_discount > 0 ? products.price_after_discount : products.price) * products.quantity, 0) && state.selectedItems.length > 0) {
      axios.post(`${MainLink}/order/create/`, {
        products: productsId,
        total_price: state.selectedItems.reduce((total, products) => total + (products.price_after_discount > 0 ? products.price_after_discount : products.price) * products.quantity, 0),
        payment_status: 'p'
      }, {
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token'),
        }
      }).then(response => {
        if (response) {
          state.selectedItems.forEach(element => {
            axios.post(`${MainLink}/orders/item/create/`, {
              product_price: element.price,
              quantity: element.quantity,
              order_id: response.data,
              product: element.id
            }, {
              headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
              }
            }).then(response => {
              if (response) {
                localStorage.removeItem('persist:root')
                axios.post(`${MainLink}/update_wallet/`, {
                  total_price: (userBag - state.selectedItems.reduce((total, products) => total + (products.price_after_discount > 0 ? products.price_after_discount : products.price) * products.quantity, 0))
                }, {
                  headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                  }
                }).then(response => {
                  if (response) {
                    localStorage.removeItem('persist:root')
                    toast.success("خرید با موفقیت صورت گرفت")
                    setTimeout(() => {
                      router.push("/")
                    }, 3000);
                  }
                })
              }
            }).catch((error) => {
              if (error.response) {
                console.log(error.response.data); // => the response payload 
              }
            });
          });
        }
      }).catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload 
        }
      });
    } else {
      toast.error("موجودی ناکافی است لطفا کیف پول خود را شارژ یا خرید اینترنتی کنید")
    }
  }


  return (
    <div className={payStyle.container}>
      <div className={payStyle.main} style={{ padding: '10px' }}>
        <div className={payStyle.subTotal}>
          <h1>تعداد</h1>
          <h1>{state.selectedItems.reduce((total, products) => total + products.quantity, 0)}</h1>
        </div>
        <div className={payStyle.subTotal}>
          <h1>جمع کل</h1>
          <h1> {state.selectedItems.reduce((total, products) => total + (products.price_after_discount > 0 ? products.price_after_discount : products.price) * products.quantity, 0)}</h1>
        </div>
        <div className={payStyle.btnsBox}>
          <div className={payStyle.subTotalPay}>
            <button onClick={() => paymentHandler(state.selectedItems.reduce((total, products) => total + (products.price_after_discount > 0 ? products.price_after_discount : products.price) * products.quantity, 0))}><h1 style={{ color: '#fff', padding: '5px 0px', margin: '0' }}>پرداخت</h1></button>
          </div>
          <div className={payStyle.subTotalPay}>
            <button onClick={() => bagPaymentHandler(state.selectedItems.reduce((total, products) => total + (products.price_after_discount > 0 ? products.price_after_discount : products.price) * products.quantity, 0))}><h1 style={{ color: '#fff', padding: '5px 0px', margin: '0' }}>پرداخت با کیف پول</h1></button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PaySide;