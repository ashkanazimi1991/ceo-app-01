
import React,{useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroH1, HeroP,HeroContent} from './HeroElements';
import React360Viewer from '../React360Viewer';


const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = ()=> {setHover(!hover)};
            return (
        <HeroContainer>
              <HeroContent>
                  <HeroH1>To See More</HeroH1>
                  <HeroP>left Routines to Robots </HeroP>
              </HeroContent>
            <HeroBg>
        
              <React360Viewer
              amount={37}
              i={1}
              imagePath="/images/robot"
              fileName="h{index}.jpg"
              autoplay={0}
              loop={1}
              />
       
            </HeroBg>
            
        </HeroContainer>
    );
};

export default HeroSection;
