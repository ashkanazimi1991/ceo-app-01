import Drawer from '../components/Drawer/Drawer'
import Navbar from '../components/Navbar/Navbar'
import {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar'
import InfoSection from './../components/InfoSection/InfoSection';
import { homeObjectFour, homeObjectOne, homeObjectThree, homeObjectTwo,homeObjectsix, homeObjectFive } from '../components/InfoSection/Data';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import SliderOne from "../components/cardslider/sliderone";
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
      
      <div style={{width: "100%", height: "100%" , backgroundColor: '#000',overflow: 'hidden'}}>
        <SliderOne  style={{width: "100%"}} 
          img1='/images/js.png' img2='/images/python.png' img3='/images/c++.png' img4='/images/go.png' img5='/images/swift.png' img6='/images/ruby.png'
          title1='Java Script' title2='Python' title3='C++' title4='Go' title5='Swift' title6='Ruby'
        />
      </div>
      <InfoSection {...homeObjectTwo} />

      <InfoSection {...homeObjectOne} />
      <div style={{width: "100%", height: "100%" , backgroundColor: '#142028',overflow: 'hidden'}}>
        <SliderOne  style={{width: "100%"}} 
          img1='/images/android.png' img2='/images/apple.png' img3='/images/windos.png' img4='/images/webpage.png' img5='/images/RaspberryPi.png' img6='/images/arduino.png'
          title1='Android ' title2='I O S' title3='Windows' title4='Web ' title5='RaspberryPi' title6='Arduino'
        />
      </div>


      
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
