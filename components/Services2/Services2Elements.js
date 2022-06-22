import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: -5px;
  /* margin: 20px; */
  flex-direction: column;
  align-items: center;
  /* padding-right: 10px; */
  font-family: iransans;
  background: linear-gradient(0deg, #000,  #142028);
  background-color: #142028;
   padding-bottom: 40px;
  /* padding-top: 20px; */
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }
  /* @media screen and (max-width: 1000px) {
    // height: 1600px;
    height: 100%;
  } */
  /* @media screen and (max-width: 768px) {
    height: 100%;
  } */


`;

export const ServicesWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns:  1fr 1fr 1fr;
  align-items: center;
  grid-gap: 60px;
  /* padding: 0 10px; */
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }
  
  @media screen and (max-width: 1000px) {
    grid-template-columns:  1fr 1fr 1fr;
    /* padding: 0 60px;  */
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns:  1fr 1fr;
     /* padding: 0 20px; */
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    /* margin-right: 30px; */
     /* padding: 0 20px; */
  }
`;

export const ServicesCard = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 450px;
  border-radius: 5px;
  border: 0.1px solid;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-color: lightblue;
  transition: all 0.2s ease-in-out;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
  }
  /* @media screen and (max-width: 468px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin: 30px;
  } */
`;

export const ServicesIcon = styled.img`
  height: 100px;
  align-items: center;
  /* background: #fff; */
  justify-content: center;
  object-fit:contain;
  width: 100%;
  padding-top: 20px;
  /* padding:2px; */
  border-radius: 10px;
  filter: drop-shadow(3px 5px 8px  rgba(0, 0, 0, 0.55) );
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
  rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
  
  margin-bottom: 10px;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 1.2rem;
  width: 250px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  margin-bottom: 30px;
  text-shadow: 2px 2px 5px #000;
  padding-top: 10px;
  border-bottom-style: solid;
    border-color: lightblue;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 14px;
  font-weight: 500;
  text-shadow: 2px 2px 5px #000;
  text-align: right;
  padding-top: 15px;
  /* white-space: nowrap; */
  text-align: center;
  color: #fff;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ServicesP = styled.p`
  font-size: 14px;
  font-weight: bold;
  /* font-weight: 700; */
  color: #DFDFDE;
  text-align: center;
  line-height: 30px;
  white-space: nowrap;
  padding: 10px;
  padding-bottom:15px;
  text-shadow: 2px 2px 5px #000;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;
