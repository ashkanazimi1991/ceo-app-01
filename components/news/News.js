import React from "react";
import Link from "next/link";
import {  ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard,  ServicesIcon, ServicesH2, ServicesP,
} from "./ServicesElements";

const News = ({news}) => {
  return (
    <ServicesContainer id="Services">
      {/* <ServicesH1> شاخه های فعال </ServicesH1> */}
      <ServicesWrapper>
        {news.map((item, index) => (
          <ServicesCard key={index}>
             <Link href={'#'} passHref>
                <ServicesIcon src={item.title_image} />
              </Link>
              <Link href={`#`} passHref>
                <ServicesH2>{item.title}</ServicesH2>
              </Link>
              {/* <Link href={`${item.link}`} passHref> */}
                <ServicesP>{item.body}</ServicesP>
              {/* </Link> */}
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default News;
