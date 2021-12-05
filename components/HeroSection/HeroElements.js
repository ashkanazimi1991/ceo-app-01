import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';


export const HeroContainer = styled.div`
    background-color: #f7f7f7;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: iransans;
    max-width: 90%;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    @media screen and (max-width: 1080px) {
        height: 600px;
        max-width: 100%;
    }    
    @media screen and (max-width: 768px) {
        height: 100%;
        max-width: 100%;
    }
    @media screen and (max-width: 480px) {
        /* height: 100%; */
        height: 200px;
        max-width: 100%;
    }
    @media screen and (max-width: 320px) {
        height: 150px;
        max-width: 100%;
    }
`;


export const HeroBg =styled.div`

    position: relative;
    /* animation: circle 1s ease-in-out ; */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 600px;
    /* padding: 90px; */
    overflow: hidden;
    /* @keyframes circle{
    from{
        margin-top:3px;
    }
    to{
        margin-top: -3px;
     }
    } */
    @media screen and (max-width: 780px) {
        height: 400px;
        padding: 0px;
    }
    
    @media screen and (max-width: 480px) {
        height: 100%;
        padding: 0px;
    }
    
`;


export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: contain;
    background: #000;
    margin: 0;

    
`;
export const HeroContent=styled.div`
    
    max-width:1200px;
    height: 80%;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1=styled.h1`
    color: #b30000;
    font-size: 93px;
    font-weight: 900;
    text-shadow: 4px 1px 10px rgba(0, 0, 0, 11);
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 38px;}
    @media screen and (max-width: 480px){
        font-size: 25px;
    }
`
export const HeroP=styled.p`
    margin-top: 5px;
    color:  #51C4D3;
    font-size: 40px;
    text-shadow: 1px 1px 1px gray;
    text-align: center;
    max-width: 600px;
    font-weight: 800;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`



// export const HeroBtnWrapper = styled.div`
//     margin-top:450px;
//     display: flex;
//     width: 100%;
//     flex-direction: column;
//     align-items: center;
//     @media screen and (max-width: 480px) {
//         margin-top: 300px;
//     }
// `;


// export const ArrowForward = styled(MdArrowForward)`
//     margin-left: 8px;
//     font-size: 20px;
//     color: #000;
// `;

// export const ArrowRight = styled(MdKeyboardArrowRight)`
//     margin-left: 8px;
//     font-size: 20px;
// `;



