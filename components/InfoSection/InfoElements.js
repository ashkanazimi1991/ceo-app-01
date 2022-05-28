import styled from 'styled-components';

export const InfoContainer = styled.div`
    direction: rtl;
    z-index: 1;
    font-family: iransans;
    max-width: 100%;
    
    @media screen and (max-width: 768px) {
        padding:2px;
        
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 1;
    height: 100vh;
    width: 95%;
    // max-width: 100%;
    justify-content: center;

    @media screen and (max-width: 1048px) {
        height: 100vh;
    }    
    @media screen and (max-width: 768px) {
        height: 100vh;
        /* padding-top: 20px;    */
    }
    @media screen and (max-width: 480px) {
        height: 100vh;
    }  
    
`;

export const InfoRow =styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: right;
    
    padding: 10px;
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
    text-align: Left;
    padding-top: 0px;
    font-size: 35px;
    line-height: 55px;
    text-shadow: 1.1px 1px 1px rgba(0, 0, 0, 1);
    font-weight: bolder;
    border-bottom-style: solid;
    border-color: lightblue;
    
    @media screen and (max-width: 768px) {
        
        font-size: 30px;
    } 
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const Heading = styled.h1`
    padding-top: 1px;
    white-space: normal;
    font-size: 20px;
    line-height: 25px;
    text-shadow: 1.1px 1px 1px rgba(0, 0, 0, 0.5);
    text-align: center;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#000' : '#51C4D3')};

    @media screen and (max-width: 768px) {
        font-size: 22px;
        text-align: center;
        line-height: 5px;
        
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
    /* text-indent:30%; */
    font-size: 14px;
    font-weight: 500;
    padding-right: 20px;
    /* padding-left: 20px; */
    line-height: 40px;
    color: ${({darkText}) => (darkText ? '#000' : '#fff')};
    padding-bottom: 20px;
    padding-top: 20px;
    direction: rtl;
    text-align: justify;

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
    height: 95%;
    width: 100%;
    @media screen and (max-width: 768px) {
        margin-right: 0px;
    }

`;

export const Img=styled.img`
    width: 98%;
    border-radius: 10px;
    transition: all 0.6s ease-out;
    filter: drop-shadow(-10px 10px 10px #000);

    /* &:hover {
        transform: scale(1.09);
        cursor: pointer;   
    } */
`;


export const img=styled.img`
    width: 100%;
    
    
`;