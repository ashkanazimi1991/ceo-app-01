import React, {useState, useEffect} from 'react'
import {FaBars, FaWindows} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn,Img  } from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll } from 'react-scroll';
import  Link  from 'next/link';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrolNav] = useState(false);

    const changeNav = () => {
        if (FaWindows.scrolly >= 80) {
            setScrolNav(true)
        } else {
            setScrolNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
      <>
      <IconContext.Provider value={{ color: 'red'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                {/* <NavBtn>
                    <Link href='/login'>{<NavBtnLink > ثبت نام / ورود </NavBtnLink>}</Link>
                </NavBtn> */}
                
                
                <MobileIcon onClick={toggle} >
                    <FaBars style={{color:`#fff`}} />
                </MobileIcon>
                <NavMenu>
                
                
                <NavItem>
                        <NavLinks to='home' smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active' >صفحه اصلی</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='services' smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active'> خدمات وب</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='auto'
                           smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active'>اتوماسیون رباتیک</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='iot'
                        smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active'>اینترنت اشیا</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='ai'
                        smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active'>هوش مصنوعی</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='crypto'
                        smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active'>رمز ارز</NavLinks>
                    </NavItem>
                    
                </NavMenu>
                <Link href="/" >{<NavLogo  onClick={toggleHome} >  ONLINE CEO <Img src="./images/1.png" alt="oficial"/> </NavLogo>}</Link>
                
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    );
};

export default Navbar;
