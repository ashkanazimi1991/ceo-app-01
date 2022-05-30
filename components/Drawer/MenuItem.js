import { BiBitcoin, BiArrowFromTop, BiDollarCircle, BiChip } from "react-icons/bi";
import { MdPhonelink, MdPhonelinkSetup} from "react-icons/md";

import {GiRobotGrab } from "react-icons/gi";
import {GoRadioTower } from "react-icons/go";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const MenuItem = (props) => {
  const { name, subMenus, to, number } = props;
  const [expand, setExpand] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (menuRef.current) {
        if (!menuRef.current.contains(event.target)) {
          setExpand(false);
        }
      }

    });
  });

  return (

    <li ref={menuRef} onClick={() => setExpand(perval => !perval)}>
      <div className="icon-link">
        <a>
          <div className="sidebar-logo">
            {(() => {
              switch (name) {
                case "ثبت سفارش برای پلتفرم های تحت وب":
                  return <MdPhonelink  id="drawer-icon" />;
                case "ثبت سفارش برای  نرم افرارهای تخصصی":
                  return <MdPhonelinkSetup id="drawer-icon" />;
                case "رباتیک":
                  return <GiRobotGrab id="drawer-icon" />;
                case "اینترنت  اشیا":
                  return <GoRadioTower id="drawer-icon" />;
                // case "Artificial Intelligence":
                //   return <BiBrain id="drawer-icon" />;
                case "رمز ارز":
                  return <BiBitcoin id="drawer-icon" />;
              }
            })()}
          </div>

          <Link href={to}>{<span className="link-name">{name} </span>}</Link>

        </a>

        <div className="sidebar-logo">
          <BiArrowFromTop id="drawer-icon" />
        </div>
      </div>
      {subMenus ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          {number ?
            <Link href={`/${to}`}>
              {<h1 className="link-name"> {name}</h1>}
              
            </Link> :
            <Link href={`/products/?slug=${to}`}>
              {<h1 className="link-name"> {name}</h1>}
            </Link>
          }
          {subMenus.map((menu, index) => (
            <li key={index}>
              {menu.number ?
                <Link href={`/${menu.slug}`}>
                  {menu.name}
                </Link> :
                <Link href={`/products/?slug=${menu.slug}`}>
                  {menu.name}
                </Link>
              }
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
