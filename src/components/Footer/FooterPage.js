import React from 'react'
import logo from '../../images/logo.svg'
import { FooterBoxStyl, FooterLink, FooterCopyright, FooterImg } from './FooterStyle'
const FooterPage = () => {
    return(
        <FooterBoxStyl>
            <div>
                <FooterLink href="/About">About</FooterLink>
                <FooterLink href="/Contact">Contact</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
            </div>
            <FooterImg src={logo} alt="" aria-hidden="true"/>
            <FooterCopyright>All rights reserved 2021</FooterCopyright>
        </FooterBoxStyl>
    )
}
export default FooterPage;