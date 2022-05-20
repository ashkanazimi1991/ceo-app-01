import Head from "next/head";
import Menubar from "./menubar/Menubar";
import Footer from "./Footer/footer";
import Drawer from "../Drawer/Drawer";

const Layout = ({ children }) => (
  <div className="root">
     <Head>
        <meta name="description" content="نرم افزار" />
        <link rel="icon" href="/images/1.png" />
        <link rel='manifest' href='/manifest.json' />
      </Head>
    <header>
      <Menubar />
    </header>
    <Drawer />
    {children}
    <footer>
      <Footer />
    </footer>
    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        header {
          min-width: 320px;
          display: flex;
          justify-content: space-around;
          width: 100%;
          font-size: 10px;
          
        }
        footer {
          min-width: 320px;
          width: 100%;
          padding: 1px 0;
        }
      `}
    </style>
    <style global jsx>{`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      body {
        overflow-x: hidden;
        background-color: #fff;
      }
    `}</style>
  </div>
);
export default Layout;
