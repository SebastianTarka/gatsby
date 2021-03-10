import styled from 'styled-components';

const Nav = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #0e153a;
`;
const NavItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: 0;
`;
const LinkMenu = styled.a`
    padding:5px;
    margin: 5px;
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
`;
const Logo = styled.img`
    padding:5px;
    width: 50px;
    height: auto;
`;
const LinksContainer = styled.div`
    display: flex;
    justify-content:space-around;
    @media (max-width:700px){
        display: none;
    }
`;
export { Nav, Logo, LinksContainer, NavItems, LinkMenu };