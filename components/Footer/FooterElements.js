import styled from "styled-components";


export const FooterContainer = styled.footer`
    direction: rtl;
    font-family: iransans;
    background-color: #131a22;
`;

export const FooterWrap = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
`;


export const FooterLinkContainer = styled.div`
    display: grid;
    justify-content: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;


export const FooterLinkWrapper = styled.div`
    display: flex;
   

    @media screen and (max-width: 820px) {
        flex-direction: row-reverse;
    }
    @media screen and (max-width: 628px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    font-size: 12px;
    margin: 16px;
    width: 160px;
    box-sizing: border-box;
    
    
    

    @media screen and (max-width: 7680px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
    padding:10px 60px;
    white-space: nowrap;
    text-align: center;
    color: #fff;
    
`;

export const FooterLink = styled.div`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 12px;
    opacity: .5;
    text-align: center;
    transition: all .3s ease-in-out;

    &:hover {
        transition: all 0.1s ease-in-out;
        opacity: 1;
    }

`;



export const SocialMedia = styled.section`
    max-width: 100%;
    width: 100%;
   
`;


export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto 0 auto;
    background-color: #000;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    padding: 20px;


    @media screen and (max-width: 820px) {
        flex-direction: column;
        padding: 10px;
    }
`;


export const SocialLogo = styled.div`
    color: #FFF;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bolder;
`;

export const WebsiteRights = styled.small`
    color: #FFF;
    margin-bottom: 16px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        color: #b30000;
    }
`;


export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    padding-right: 60px;
    @media screen and (max-width: 820px) {
        padding-right: 0px;
       
    }
   
`;

export const SocialIconLink = styled.a`
   color : #FFF;
   font-size: 24px;

   &:hover {
       color: #b30000;
   }



`;
