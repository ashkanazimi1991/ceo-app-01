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
                    <SidebarLink to='home' onClick={toggle}>صفحه اصلی </SidebarLink>
                    <SidebarLink to='services'  onClick={toggle}>خدمات وب </SidebarLink>
                    <SidebarLink to='auto'  onClick={toggle}>اتوماسیون رباتیک </SidebarLink>
                    <SidebarLink to='iot'  onClick={toggle}>اینترنت اشیا</SidebarLink>
                    <SidebarLink to='ai'  onClick={toggle}>هوش مصنوعی</SidebarLink>
                    <SidebarLink to='crypto'  onClick={toggle}>رمز ارز</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <Link href='login'>{<SidebarRoute>ثبت نام / ورود</SidebarRoute>}</Link>
                </SideBtnWrap>
                
            </SidebarWrapper>
        </SidebarContainer>    
    );
};

export default Sidebar;