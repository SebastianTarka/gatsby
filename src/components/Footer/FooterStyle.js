import styled from 'styled-components'

const FooterBoxStyl = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    padding-top: 20px;
    padding-bottom: 20px;
    @media (max-width:290px){
        flex-direction: column;
    }
`;
const FooterLink = styled.a`
    text-decoration: none;
    color: #282828;
    padding: 5px;
`;
const FooterCopyright = styled.h6`
    margin-left: 50px;
    font-size: 15px;
    @media (max-width:450px){
        margin-left: 0;
    }
`;
const FooterImg = styled.img`
    margin-left: 50px;
    width: 50px;
    @media (max-width:450px){
        margin-left: 0;
    }
`;
export { FooterBoxStyl, FooterLink, FooterCopyright, FooterImg }