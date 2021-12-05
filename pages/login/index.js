import Link from 'next/link'
const Login = () => {
  return (
    <div className="login-wrapper">
      <video autoPlay loop muted src={'./videos/eye.mp4'} type="video/mp4"></video>
      <div className="center">
        <Link href="/"><img src='./images/1.png' alt="idealmakoo"/></Link>
        <h1>ورود / ثبت نام</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text"  required/>
            <span></span>
            <label>شماره موبایل خود را وارد کنید</label>
          </div>
          
            <input type="submit" value="ثبت و عبور"/>
            <div className="signup_link">
            <h4>با ورود و ثبت نام در  پلتفرم , قوانین و حریم خصوصی آن را می‌پذیرید </h4>
            </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login
