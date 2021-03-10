import React from 'react'
import HamburgerMenu from '../components/containers/Hamburger';
import GlobalStyle from '../components/GlobalStyled';
import Nav from '../components/Navigation/Navigation';
import TitleContainer from '../components/PagesStyle.js/StylePages';
const Contact = () => {
    return(
        <div>
            <GlobalStyle/>
            <Nav/>
            <HamburgerMenu/>
            <TitleContainer>
                <h1>About</h1>
            </TitleContainer>
        </div>
    )
}
export default Contact;