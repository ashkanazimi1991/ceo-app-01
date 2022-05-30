import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkItems, FooterLinkTitle,
     FooterLink, FooterLinkWrapper, SocialMedia,SocialMediaWrap, SocialLogo,SocialIcons,
     SocialIconLink, WebsiteRights} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>درباره ما</FooterLinkTitle>
                            <Link href= '/login'>{<FooterLink >کواهی و افتخارات</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >مجوز ها </FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >ارتباط با ما </FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >گالری تصاویر </FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >حریم خصوصی</FooterLink>}</Link>          
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>خدمات</FooterLinkTitle>
                            <Link href= '/login'>{<FooterLink >برنامه نویسی </FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >هاستینگ</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >خبرنامه</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >خدمات دانشگاهی</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink > تکنولوژی های جدید</FooterLink>}</Link>          
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>پشتیبانی</FooterLinkTitle>
                            <Link href= '/login'>{<FooterLink >تماس با اپراتوری</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >پشتیبانی محصولات</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >پشتیبانی خدمات</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >انتقاد و پیشنهاد</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >همکاری با ما</FooterLink>}</Link>          
                        </FooterLinkItems>    
                                           
                        <FooterLinkItems>
                            <FooterLinkTitle>محصولات</FooterLinkTitle>
                            <Link href= '/login'>{<FooterLink >فروشگاه روباتیک</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >فروشگاه اینترنت اشیا</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >دیتا سنتر و راک</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >آموزشی و مشاوره</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >خدمات بین المللی</FooterLink>}</Link>          
                        </FooterLinkItems> 

                    </FooterLinkWrapper>
                </FooterLinkContainer> 
                <SocialMedia>
                    <SocialMediaWrap>   
                        <SocialIcons>
                            <SocialIconLink href='https://www.instagram.com/onlineceoofficial' target='_blank'  aria-label='Instagram'>
                            <FaInstagram/>   
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'  aria-label='Facebook'>
                            <   FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'  aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='//www.twitter.com' target='_blank'    aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>                           
                            <SocialIconLink href='https://wa.me/98333936405' target='Whattsapp'        aria-label='Whattsapp'>
                                <FaWhatsapp />
                            </SocialIconLink>
                        </SocialIcons>
                        <WebsiteRights>OnlinCEO Programing company  {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <Link href='/'>{<SocialLogo  onClick={toggleHome} >ONLINE CEO</SocialLogo>}</Link>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer;