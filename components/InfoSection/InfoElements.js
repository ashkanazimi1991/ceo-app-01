import styled from 'styled-components';

export const InfoContainer = styled.div`
    direction: rtl;
    z-index: 1;
    font-family: iransans;
    max-width: 100%;
    
    @media screen and (max-width: 768px) {
        padding:20px;
        
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 100%;
    justify-content: center;

    @media screen and (max-width: 1048px) {
        height: 600px;
    }    
    @media screen and (max-width: 768px) {
        height: 900px;
        /* padding-top: 20px;    */
    }
    @media screen and (max-width: 480px) {
        height: 700px;
    }  
    
`;

export const InfoRow =styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    
    padding: 20px;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 780px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        margin-right: 15px;
    }
`;


export const Column1 = styled.div`
    grid-area: col1;
    max-width: 100%;
    
`;

export const Column2 = styled.div`
    grid-area: col2;
    max-width: 100%;
    
`;

export const TextWrapper = styled.div`
    max-width: max-content;
    padding-top: 0;
    text-align: center;
    white-space: nowrap;
    padding-bottom: 60px;
    
`;

export const TopLine = styled.p`
    color:  #51C4D3 ;
    white-space: nowrap;
    text-align: center;
    padding-top: 25px;
    font-size: 35px;
    line-height: 70px;
    /* text-shadow: 1.1px 1px 1px rgba(0, 0, 0, 1); */
    font-weight: bolder;

    @media screen and (max-width: 768px) {
        font-size: 28px;
    } 
    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`;

export const Heading = styled.h1`
    padding-top: 15px;
    white-space: normal;
    font-size: 28px;
    line-height: 25x;
    text-shadow: 1.1px 1px 1px rgba(0, 0, 0, 0.5);
    text-align: center;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#000' : '#b30000')};

    @media screen and (max-width: 768px) {
        font-size: 22px;
        text-align: center;
        line-height: 25px;
        
    }

    @media screen and (max-width:480px) {
        font-size: 18px;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

export const Subtitle = styled.p`
    max-width: 550px;
    text-align: center;
    margin: 20px;
    white-space: normal;
    font-size: 14px;
    font-weight: 500;
    line-height: 40px;
    color: ${({darkText}) => (darkText ? '#000' : '#fff')};
    padding-bottom: 20px;
    padding-top: 20px;

    @media screen and (max-width: 480px) {
        margin: 0px;

        font-size: 12px;
        max-width: 100%;
        white-space: normal;
    }
`;
export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
   
`;


export const ImgWrap = styled.div`  
    max-width: 94%;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 768px) {
        margin-right: 0px;
    }

`;

export const Img=styled.img`
    width: 98%;
    border-radius: 10px;
    transition: all 0.6s ease-out;
    /* filter: drop-shadow(00px 10px 20px rgba(0, 0, 0, 0.425)); */

    /* &:hover {
        transform: scale(1.09);
        cursor: pointer;   
    } */
`;


export const img=styled.img`
    width: 100%;
    
    
`;