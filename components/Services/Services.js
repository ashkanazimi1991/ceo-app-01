import React from "react";
import Link from "next/link";
import {  ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard,  ServicesIcon, ServicesH2, ServicesP,
} from "./ServicesElements";

const Services = () => {
  const services = [
    {
      link: "/iot/iotplatform",
      image: "images/greenhouse2.jpg",alt:"مدیر آنلاین",
      title: " پلتفرم اینترنت اشیا",
      descreption:
        "برنامه نویسی و تولید پلتفرم اختصاصی برای کنترل و مدیریت کسب و کارهای خدماتی , بازرگانی و پرورشی از قبیل گلخانه ها , مزارع پرورشی سر پوشیده , فارم های پرورش طیور , کارخانه و کارگاه های صنعتی , حمل و نقل های هوشمند و... اینترنت اشیا بخاطر داشتن طیف وسیعی از سنسورها و قابلیت کنترل سیستم های الکترونیکی تقریبا قادر به کنترل تمام پارمترها می باشد. ",
    },
    {
      link: "/iot/iotsetup",
      image: "images/dashbord01.jpg",alt:"onlineceo",
      title: " آنالیز تخصصی دیتا",
      descreption:
        "    با آنالیز دقیق داده های سنسورهای اینترنت اشیا امکان مدیریت و برنامه دهی دقیق برای کسب و کار میسر می شود همچنین با تعریف  پروتکل های اجرای مختلف کسب و کارتان رفته رفته هوشمند تر می شود و می تواند بصورت خودکار در شرایط مختلف پروتکل متناسب را انتخاب و اجرا کند. علاوه برا آن هوش مصنوعی میتواند حجم وسیعی از داده ها راآنالیز کند که از عهده منابع انسانی خارج است.",
    },
    {
      link: "/iot/roboticplatform",
      image: "images/arm011.jpg",alt:"مدیر آنلاین",
      title: " مدیریت بازو های رباتیک",
      descreption:
        "برنامه نویسی پلتفرم بازو های رباتیک با امکان کنترل و برنامه دهی آسان و تحت وب , برنامه نویسی اتوماسیون های رباتیک تیم ورک و ربات های چند منظوره و ایجاد تعامل بین ربات ها با تکنولوژِی  یادگیری ماشین و هوش مصنوعی. داشبورد های کنترل و مدیریت اختصاصی متناسب با کسب و کار سبب راحتی اپراتور و مدیریت میشود علاوه بر آن اتوماسیون انعطاف زیادی در تغییرات خط تولید بخود میگیرد. ",
    },
    {
      link: "/iot/roboticplatform",
      image: "images/robotic444.jpg",alt:"مدیر آنلاین",
      title: " مدیریت ربات های  هوشمند",
      descreption:
        "طراحی , اجرا و برنامه نویسی ربات های چند منظوره برای اهداف مختلف از قبیل صنعت ,کشاورزی, حمل و انتقال , امور خدماتی خودکار و ...با قابلیت کنترل تحت وب , شناخت محیط و انجام امور روتین.",
    },
    {
      link: "/robotic/robotichardware",
      image: "images/run01.jpg",alt:"مدیر آنلاین",
      title: " فروشگاه رباتیک",
      descreption:
        "فروشگاه تخصصی اتوماسیون های رباتیک , ربات های خود ران و کنترلی به همراه مشاوره رایگان و تخصصی برای مقیاس های صنعتی و تحقیقاتی با امکان پرداخت با کریپتو و درگاه های روتین",
    },
    {
      link: "/iot/iotstore",
      image: "images/iotstor400.jpg",alt:"مدیر آنلاین",
      title: " فروشگاه اینترنت اشیا",
      descreption:
        "فروش دستگاه های اینترنت اشیا و سخت افزار های مرتبط به همراه پشتیبانی و  مشاوره رایگان و منابع آموزشی",
    },
  ];
  return (
    <ServicesContainer id="Services">
      {/* <ServicesH1> شاخه های فعال </ServicesH1> */}
      <ServicesWrapper>
        {services.map((item, index) => (
          <ServicesCard key={index}>
             <Link href={`${item.link}`} passHref>
                <ServicesIcon src={item.image} />
              </Link>
              <Link href={`${item.link}`} passHref>
                <ServicesH2>{item.title}</ServicesH2>
              </Link>
              {/* <Link href={`${item.link}`} passHref> */}
                <ServicesP>{item.descreption}</ServicesP>
              {/* </Link> */}
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
