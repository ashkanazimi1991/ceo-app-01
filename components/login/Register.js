import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from "next/link"

//import styles
import styles from "./login.module.css"

//import modules
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


//import components
import { MainLink } from '../BaseUrl/BaseUrl';
import LoginLayout from './LoginLayout';


const Register = () => {

    const redirect = new useRouter();

    const numberValidate = /^(\+98|0)?9\d{9}$/;
    const [phone_Number, setPhone_Number] = useState({
        phone_number: ''
    })

    const numberHandler = (event) => {
        setPhone_Number({ ...phone_Number, phone_number: event.target.value });
    }

    const loginHandler = (event) => {
        event.preventDefault();
        if (numberValidate.test(phone_Number.phone_number)) {
            axios.post(`${MainLink}/user/register/`, {
                phone_number: phone_Number.phone_number,
                email: '',
            }).then(response => {
                if (response) {
                    localStorage.setItem('key', response.data.key);
                    redirect.push("/auth/login/")
                }
            }).catch(error => {
                toast.error("کاربر در سیستم قبلا ثبت شده است . وارد شوید");
            })
        } else {
            toast.error("شماره وارد شده صحیح نمیباشد");
        }
    }

    return (
        <LoginLayout>
            <form>
                <div className={styles.title}>
                    <h1> ثبت نام</h1>
                    <hr />
                    <h6>
                        لطفا شماره خود را در کادر پایین وارد کنید
                    </h6>
                </div>
                <div className="form-group">
                    <label className="label">شماره تلفن همراه</label>
                    <div className="input-group">
                        <input type="text" className={`form-control ${styles.phone_number}`} placeholder="شماره تلفن همراه" onChange={numberHandler} />
                    </div>
                </div>
                <div className="form-group">
                    <button onClick={loginHandler} className="btn btn-primary submit-btn btn-block">ادامه</button>
                </div>
                <div className="form-group">
                    <button className="btn btn-block g-login">
                        <img className="mr-3" src="/assets/images/file-icons/icon-google.svg" alt="" />ثبت نام با ایمیل</button>
                </div>
                <div className="text-block text-center my-3">
                    <span className="text-small font-weight-semibold">اکانت دارید ؟ </span>
                    <Link href="/auth/login/" className="text-black text-small">وارد شوید</Link>
                </div>
            </form>
        </LoginLayout>
    )
}

export default Register