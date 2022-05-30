import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import Link from 'next/link';



const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>خدمات برنامه نویسی </SidebarLink>
                    <SidebarLink to='services'  onClick={toggle}>خدمات وب و دیجیتال مارکتینگ </SidebarLink>
                    <SidebarLink to='auto'  onClick={toggle}> پلتفرم های  رباتیک </SidebarLink>
                    <SidebarLink to='iot'  onClick={toggle}>پلتفرم های اینترنت اشیا</SidebarLink>
                    <SidebarLink to='ai'  onClick={toggle}>هوش مصنوعی</SidebarLink>
                    <SidebarLink to='crypto'  onClick={toggle}>کریپتو و بلاک چین</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <Link href='auth/login'>{<SidebarRoute>ثبت نام /  ورود</SidebarRoute>}</Link>
                </SideBtnWrap>
                
            </SidebarWrapper>
        </SidebarContainer>    
    );
};

export default Sidebar;