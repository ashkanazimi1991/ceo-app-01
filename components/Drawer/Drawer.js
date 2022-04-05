import { BiLogOutCircle, BiBody } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";

export const menuItems = [
  {
    name: "WEB Service",
    to: "/webservice/index",
    subMenus: [
      { name: "وب اپلیکیشن و وب سایت", to: "/webservice/website" },
      { name: "پلتفرم و نرم افزار", to: "/webservice/software" },
      { name: " امنیت و پشتیبانی", to: "/webservice/security" },
      { name: "خدمات بهینه سازی و سئو", to: "/webservice/seo" },
    ],
  },
  {
    name: "I O T",
    to: "/",
    subMenus: [
      { name: "پلتفرم های مدیریت تحت وب ", to: "/iot/iotplatform" },
      { name: "هوشمندسازی کسب و کار", to: "/iot/iotsetup" },
      // { name: " فروشگاه اینترنت اشیا", to: "/iot/iotstore" },
    ],
  },
  {
    name: "Robotic Automaiton",
    to: "/",
    subMenus: [
      { name: " پلتفرم های رباتیک", to: "/robotic/roboticplatform" },
      // { name: "فروشگاه رباتیک", to: "/robotic/robotichardware" },
      { name: "راهکارهای رباتیک", to: "/robotic/roboticslotion" },
      
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
    subMenus: [
      { name: "صرافی ارز دیجیتال", to: "/crypto/exchange" },
      { name: "خدمات بلاک چینی", to: "/crypto/blockchain" },
      { name: "کلوب های آموزشی", to: "/crypto/club" },
    ],
  },
];

function Drawer() {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  let menRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if(menRef.current){
        if (!menRef.current.contains(event.target)) {
          setClose(true)
        }
      }
       
      
   
    });
  });
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
