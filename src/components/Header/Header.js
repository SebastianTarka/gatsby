import React from 'react';
import rocket from '../../images/rocket.svg';
import { HeaderBox, HeaderImg, HeaderTitle, HeaderTextBox, HeaderParagraph, HeaderButtonsBox, HeaderButton } from './HeaderStyle';
const Header = () => {
    return(
        <HeaderBox>
            <HeaderTextBox>
                <HeaderTitle>Explore the beauty of the universe!</HeaderTitle>
                <HeaderParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</HeaderParagraph>
                <HeaderButtonsBox>
                    <HeaderButton>Get a Demo</HeaderButton>
                    <HeaderButton>Start Trial</HeaderButton>
                </HeaderButtonsBox>
            </HeaderTextBox>
            <HeaderImg src={rocket} alt="rocket"/>
        </HeaderBox>
    )
}
export default Header