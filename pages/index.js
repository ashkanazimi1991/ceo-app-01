import Drawer from '../components/Drawer/Drawer'
import Navbar from '../components/Navbar/Navbar'
import {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar'
// import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from './../components/InfoSection/InfoSection';
import { homeObjectFour, homeObjectOne, homeObjectThree, homeObjectTwo,homeObjectsix, homeObjectFive } from '../components/InfoSection/Data';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import SliderOne from '../components/cardslider/sliderone';
import World from '../components/worldMap/world';
import Own from '../components/ownSlider/own'
import Head from 'next/head'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen( !isOpen);
    };

  return (
    <div>
      <Head>
        <meta name="description" content="web service, web app, robotics, ai, iot" />
        <link rel="icon" href="/images/1.png" />
        <link rel='manifest' href='/manifest.json' />
      </Head>

      <Drawer/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Own img1="images/apps013.jpg" img2="images/office01.jpg" img3="images/office02.jpg" img4="images/office03.jpg" img5="images/office04.jpg" img6="images/ai05.gif" />
      <div style={{width: "100%", height: "100%" , backgroundColor: '#fff',overflow: 'hidden'}}>
      </div>
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      {/* <SliderOne style={{width: "100%"}} 
       img1='/images/swift.jpg' img2='/images/python.jpg' img3='/images/kotlin.jpg' img4='/images/ruby.jpg' img5='/images/js.jpg' img6='/images/c.jpg' 
       title1='سویفت' title2='پایتون' title3='کاتلین' title4='روبی' title5='جاوا اسکریپت' title6='سی پلاس'
      /> */}
      <InfoSection {...homeObjectFive} />
      <InfoSection {...homeObjectThree} />
      <Services /> 
      <InfoSection {...homeObjectFour} />
      <InfoSection {...homeObjectsix} />
      <World/>
      <Footer/>
      
    </div>
  )
}
