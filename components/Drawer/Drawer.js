import { BiLogOutCircle, BiBody } from "react-icons/bi";
import React,{ useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
import { MainLink } from "../BaseUrl/BaseUrl";
import axios from "axios";


export const menuItems = [
  {
    name: "اخبار",
    to: "/news/",
    number: 1,
    subMenus: [
      { name: "اخبار", to: "/news/",  number: 1 },
    ],
  },
  {
    name: "WEB Service",
    to: "/webservice/index",
    number: 1,
    subMenus: [
      { name: "وب اپلیکیشن و وب سایت", to: "/webservice/website",  number: 1 },
      { name: "پلتفرم و نرم افزار", to: "/webservice/software" ,  number: 1},
      { name: " امنیت و پشتیبانی", to: "/webservice/security",  number: 1 },
      { name: "خدمات بهینه سازی و سئو", to: "/webservice/seo" ,  number: 1},
    ],
  },
  {
    name: "I O T",
    to: "/",
    number: 1,
    subMenus: [
      { name: "پلتفرم های مدیریت تحت وب ", to: "/iot/iotplatform" ,  number: 1 },
      { name: "هوشمندسازی کسب و کار", to: "/iot/iotsetup" ,  number: 1 },
      // { name: " فروشگاه اینترنت اشیا", to: "/iot/iotstore" },
    ],
  },
  {
    name: "Robotic Automaiton",
    to: "/",
    number: 1,
    subMenus: [
      { name: " پلتفرم های رباتیک", to: "/robotic/roboticplatform" ,  number: 1 },
      // { name: "فروشگاه رباتیک", to: "/robotic/robotichardware" },
      { name: "راهکارهای رباتیک", to: "/robotic/roboticslotion" ,  number: 1 },
      
    ],
  },
  // {
  //   name: "Artificial Intelligence",
  //   to: "/",
  //   subMenus: [
  //     { name: "یادگیری ماشین", to: "/ai/machinelearning" },
  //     { name: "آنالیز و مدیریت", to: "/ai/aianlayse" },
  //     { name: "راهکارهای هوش مصنوعی", to: "/ai/aislotion" },
  //   ],
  // },
  {
    name: "Crypto Currency",
    to: "/",
    number: 1,
    subMenus: [
      { name: "صرافی ارز دیجیتال", to: "/crypto/exchange",   number: 1  },
      { name: "خدمات بلاک چینی", to: "/crypto/blockchain" ,   number: 1 },
      { name: "کلوب های آموزشی", to: "/crypto/club" ,   number: 1 },
    ],
  },
];

function Drawer() {
  const [data , setData] = useState([])
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  let menRef = useRef();
  useEffect(() => {
    axios.get(`${MainLink}/categories-m1/`).then(response => setData(response.data))
    document.addEventListener("mousedown", (event) => {
      if(menRef.current){
        if (!menRef.current.contains(event.target)) {
          setClose(true)
        }
      }
       
      
   
    });
  },[]);
  
  let profileRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if(profileRef.current){
        if (!profileRef.current.contains(event.target)) {
          setOpen(false);
        }

      }
    });
  });

  return (
    <>
      <div ref={menRef} className={`sidebar ${close ? "close" : ""}`}>
        <div className="logo-details">
          <span className="logo-name">شرکت  برنامه نویسی مدیر آنلاین</span>
          <div className="dashboard-logo" onClick={() => setClose(!close)}>
            <BiLogOutCircle />
          </div>
        </div>
        <ul className="nav-links">
        {data.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.slug}
              subMenus={menuItem.parent || []}
            />
          ))}
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
            />
          ))}
          </ul>
            
              <div
              ref={profileRef}
              className={`profile-details ${open ? "open" : ""}`}
            >
              <div className="profile-content">
                <BiBody onClick={() => setOpen(!open)}/>
              </div>

              <div className="name-job">
                <div className="profile-name"> User Account </div>
                <div className="job">Custome words</div>
              </div>
              <div className="profile-logo">
                <BiLogOutCircle />
              </div>
            </div>
          </div>
        
      
    </>
  );
}

export default Drawer;
