import React, {useState} from 'react'
import { HamburgerButton, HamburgerLink, HamburgerMenu, HamburgerList, HamburgerUl, HamburgerNav, HamburgerSpan } from './HamburgerStyle'
const Hamburger = () => {
    const [nav, showNav] = useState(false)
    return(
        <HamburgerMenu onClick={() => showNav(!nav)}>
            <HamburgerButton>
                <HamburgerSpan nav={nav}/>
                <HamburgerSpan nav={nav}/>
            </HamburgerButton>
            <HamburgerNav nav={nav}>
                <HamburgerUl>
                    <HamburgerList>
                        <HamburgerLink href="/">Home</HamburgerLink>
                    </HamburgerList>
                    <HamburgerList>
                        <HamburgerLink href="/About">About</HamburgerLink>
                    </HamburgerList>
                    <HamburgerList>
                        <HamburgerLink href="/Contact">Contact</HamburgerLink>
                    </HamburgerList>
                    <HamburgerList>
                        <HamburgerLink href="/blog">Blog</HamburgerLink>
                    </HamburgerList>
                </HamburgerUl>
            </HamburgerNav>
        </HamburgerMenu>
    )
}
export default Hamburger;