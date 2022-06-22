import { BiLogOutCircle, BiBody } from "react-icons/bi";
import { FaUserCog } from 'react-icons/fa';
import React, { useEffect, useRef, useState , useContext } from "react";
import MenuItem from "./MenuItem";
import { MainLink } from "../BaseUrl/BaseUrl";
import axios from "axios";
import Link from "next/link"


   




export const menuItems = [
  {
    name: "اخبار",
    to: "/news/",
    number: 1,
    subMenus: [
      { name: "اخبار", to: "/news/", number: 1 },
    ],
  },

];

function Drawer() {
  const [data, setData] = useState([])
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  let menRef = useRef();
  useEffect(() => {
    axios.get(`${MainLink}/categories-m1/`).then(response => setData(response.data))
    document.addEventListener("mousedown", (event) => {
      if (menRef.current) {
        if (!menRef.current.contains(event.target)) {
          setClose(true)
        }
      }



    });
  }, []);

  let profileRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (profileRef.current) {
        if (!profileRef.current.contains(event.target)) {
          setOpen(false);
        }

      }
    });
  });


  return (
    <>
      <div ref={menRef} className={`sidebar ${close ? "close" : ""}`}>
        {/* <div className="logo-details">
          <span className="logo-name">شرکت  برنامه نویسی مدیر آنلاین</span>
          <div className="dashboard-logo" onClick={() => setClose(!close)}>
            <BiLogOutCircle />
          </div>
        </div> */}
        {/* <ul className="nav-links">
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
              number={menuItem.number}
              subMenus={menuItem.subMenus || []}
            />
          ))}
        </ul> */}

        <div
          ref={profileRef}
          className={`profile-details ${open ? "open" : ""}`}
          
        >
          <div className="profile-content">
            <BiBody onClick={() => setOpen(!open)} />
          </div>

          <div className="name-job">
          <Link href={'/Profile'} >
            <div className="profile-name"> حساب کاربری </div>
          </Link>
            <Link href={'/Profile'} >
              <div className="job">تنظیمات داشبورد</div>
            </Link>
          </div>
          <div className="profile-logo" >
           <Link href={'/Profile'} ><FaUserCog /></Link>
          </div>
        </div>
      </div>


    </>
  );
}

export default Drawer;

