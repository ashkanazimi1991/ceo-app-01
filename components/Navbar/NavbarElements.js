import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';




export const Nav = styled.nav`
    direction: rtl;
    height: 80px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14PX;
    font-weight: 500;
    position: sticky;
    top: 0px;
    z-index: 100000;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-color: #232f3e;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        font-size: 10px;
    }
    
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    background-color: #000;
    width: 100%;
    padding: 0 24px;

`;

export const NavLogo = styled.div`
    color: #fff;
    white-space: nowrap;
    cursor: pointer;
    font-size: 1.9rem;
    display: flex;
    align-items: center;
    margin-left: 5px;
    font-weight: 600;
    margin-top: 15px;
    font-family: iransans;
    text-decoration: none;
    @media screen And (max-width: 768px) {
        margin-right: 75%;  
        font-size: 20px;

    }
    @media screen and (max-width:480px) {
        margin-right: 65%;
        font-size: 16px;
    } 
    @media screen and (max-width:380px) {
        margin-right: 55%;
        font-size: 16px;
        
    } 
`;
export const Img=styled.img`
    height: 50px;
    width: 50px;
    align-items: center;
    
`;
export const MobileIcon = styled.div`
    display: none;
    

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
                
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    margin: 20px;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;


    @media screen and (max-width: 768px) {
      display : none;
    }
`;  



export const NavItem = styled.li`
    height: 80px;
    padding: 15px;

`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 2 1 rem;
    height: 100%;
    cursor: pointer;
    


    &.active {
        border-bottom: 3px solid #b30000;
        color: gray;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled.div`
    border-radius: 10px;
    background:  	rgba(179,0,0,1);
    white-space: nowrap;
    padding: 9px 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 12px;
    font-family: iransans;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #09d3d5;
        color: #000;
        font-weight: bolder;
    }

`;

