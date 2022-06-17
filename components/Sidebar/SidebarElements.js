import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';


export const SidebarContainer = styled.aside`
    position: fixed;
    font-family: ' fonts/iransans.ttf';
    z-index: 1;
    width: 100%;
    height: 100%;
    /* margin-right: 150px; */
    /* background: #ddf7f8; */
    display: grid;
    align-items: center;
    bottom: 0;
    /* left: 0; */
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    bottom:  ${({isOpen}) => (isOpen ? '0' : '-100%' )}; 
    
`;

export const CloseIcon = styled(FaTimes)`   
    background: transparent;
    
    
`;

export const Icon = styled.div`
    position: absolute;
    bottom: 1px;

    left: 1.rem;
    font-size: 2rem;
    color: #ddf7f8;
    /* border-radius: 50px; */
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #e47911;
`;

export const SidebarMenu = styled.ul`
padding-top: 30%;
    font-size: 10px;
    display: grid;
    grid-template-columns:1fr;
    /* grid-template-rows: repeat(8px, 80px); */
    text-align: center;
    font-family: iransans;
    
    /* background-color: #fff; */
    
    
    
    /* @media screen and (max-width: 480px) {
        grid-template-rows: repeat(45px, 40px);
    } */
    
    `;

export const SidebarLink = styled(LinkS)`
    font-family: iransans;
     /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
     box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    display: flex;
    padding: 10px;
    /* padding-left: 50px; */
    align-items: center;
    /* max-width: 250px; */
    justify-content: center;
    font-size: 1rem;
    border-radius: 5px;
    /* border-width: 1px; */
    /* border-style: inset; */
    border: 0.1px solid;
    border-color: lightblue;
    font-weight: 700;
    text-decoration: none;
    background-color: #fff;
    margin: 10px;
    /* padding: 16px 84px; */
    list-style: none;
    transition: 0s .2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;


    &:hover {
        color: #0fff;
        transition: 0.2s ease-in-out;
    }

`;

export const SideBtnWrap = styled.div`
    display: flex;
    font-family: iransans;
    justify-content: center;
`;

export const SidebarRoute = styled.div`
    border-radius: 10px;
    background: #045256;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    white-space: nowrap;
    padding: 16px 84px;
    color: #fff;
    /* margin-top: 40px; */
    /* bottom: 10px; */
    font-weight: bolder;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition:  all 0.2s ease-in-out;
    text-decoration: none;
    text-shadow: 2px 2px #000;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0fff;
        color: #000;
    }

`;