import React from 'react';
import { Nav, Logo, LinksContainer, NavItems, LinkMenu } from './NavigationStyle';
import logo from '../../images/logo.svg';
const Navigation = () => {
    return(
        <Nav>
            <NavItems>
                <a href="/"><Logo src={logo} alt="" aria-hidden="true"/></a>
                    <LinksContainer>
                        <LinkMenu href="/">Home</LinkMenu> 
                        <LinkMenu href="/About">About</LinkMenu> 
                        <LinkMenu href="/Contact">Contact</LinkMenu> 
                        <LinkMenu href="/blog">Blog</LinkMenu>       
                    </LinksContainer>
            </NavItems>
        </Nav>
    )
}
export default Navigation;