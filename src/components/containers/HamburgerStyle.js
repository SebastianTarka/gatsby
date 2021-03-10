import styled from 'styled-components'

const HamburgerButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width:35px;
    height: 30px;
    position: fixed;
    background-color: transparent;
    top: 10px;
    right: 10px;
    border: none;
    z-index: 1000;
`;
const HamburgerSpan = styled.span`
    width: 30px;
    height: 5px;
    transition: linear .2s;
    border-radius: 50px;
    background-color: ${({ nav }) => ( nav ? "#0091ff" : "#fff")};
    transform: ${({ nav }) => ( nav ? "translateY(10px) rotate(-45deg)" : "rotate(0)" )};
    :nth-child(2){
        transform: ${({ nav }) => ( nav ? "translateY(-5px) rotate(45deg)" : "rotate(0)" )};
    }
`;
const HamburgerNav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items:center;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    background-color: #000;
    z-index: 999;
    display: ${({ nav }) => ( nav ? "flex" : "none" )};
`;
const HamburgerList = styled.li`
    list-style: none;
    padding: 20px;
    text-transform: uppercase;
`;
const HamburgerMenu = styled.div`
    @media (min-width:700px){
        display: none;
    }  
`;
const HamburgerLink = styled.a`
    text-decoration: none;
    color: #fff;
`;
const HamburgerUl = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 30px;
    justify-content: center;
    align-self: center;
    align-items:center;
    top: 0;
    height: 100vh;
`;
export { HamburgerUl, HamburgerLink, HamburgerMenu, HamburgerList, HamburgerNav, HamburgerSpan, HamburgerButton };