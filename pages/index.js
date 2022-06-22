import Drawer from '../components/Drawer/Drawer'
import Navbar from '../components/Navbar/Navbar'
import {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar'
import InfoSection from './../components/InfoSection/InfoSection';
import { homeObjectFour, homeObjectOne, homeObjectThree, homeObjectTwo,homeObjectsix, homeObjectFive } from '../components/InfoSection/Data';
// import Services from '../components/Services/Services';
import Service2 from '../components/Services2/Service2';
import Footer from '../components/Footer/Footer';
import SliderOne from "../components/cardslider/sliderone";
import World from '../components/worldMap/world';
// import Banner from '../components/Banner/Banner';
// import Header from '../components/Header/Header'
import Head from 'next/head'
import News from '../components/news/News';
import axios from 'axios';
import { MainLink } from '../components/BaseUrl/BaseUrl';
import Promo from '../components/Promo/Promo';
import ChartSection from '../components/chart/ChartSection'
import ChartSection2 from '../components/chart/ChartSection2'




export default function Home({news}) {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen( !isOpen);
    };

  return (
    <div>
      <Head>
        <title>Home - ONLINE CEO</title>
        <meta name="description" content="مدیریت آنلاین" />
        <meta name="theme-color" content="#142028"/>
        <link rel="icon" href="/images/1.png" />
        <link rel='manifest' href='/manifest.json' />
      </Head>

     <Navbar toggle={toggle}/>
     {/* <Header/> */}
   
        <Promo/>
      {/* <Banner/> */}
      <Drawer/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* <Own/> */}
            
      {/* <div style> */}
        <SliderOne   
          img1='/images/js.png' img2='/images/python.png' img3='/images/c++.png' img4='/images/go.png' img5='/images/swift.png' img6='/images/ruby.png'
          title1='Java Script' title2='Python' title3='C++' title4='Go' title5='Swift' title6='Ruby'
          />
      {/* </div> */}
      <InfoSection {...homeObjectOne} />
      <ChartSection2/>
      <InfoSection {...homeObjectTwo} />
      <Service2/>
        <InfoSection {...homeObjectFive} />

      <div style={{width: "100%", height: "100%" , backgroundColor: '#142028',overflow: 'hidden'}}>
        <SliderOne  style={{width: "100%"}} 
          img1='/images/android.png' img2='/images/apple.png' img3='/images/windos.png' img4='/images/webpage.png' img5='/images/RaspberryPi.png' img6='/images/arduino.png'
          title1='Android ' title2='I O S' title3='Windows' title4='Web ' title5='RaspberryPi' title6='Arduino'
        />
      </div>


      
      <InfoSection {...homeObjectThree} />
      {/* <Services />  */}
      <ChartSection />
      <InfoSection {...homeObjectFour} />
      <InfoSection {...homeObjectsix} />
      <News news={news} />
      <World/>
      <Footer/>
      
    </div>
  )
}










//get data from database
export async function getServerSideProps(context){
  const news = await axios.get(`${MainLink}/last_news/`);
  
  
  const Newsresponse = news.data
  
  return{
    props:{news: Newsresponse}
    }
}
 
