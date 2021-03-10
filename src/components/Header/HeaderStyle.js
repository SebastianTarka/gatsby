import styled from 'styled-components';

const HeaderBox = styled.header`
    display: flex;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-around;
    background-color: #3d5af1;
    color: #ffffff;
    height: 100vh;
    @media (max-width:1100px){
        height: auto;
    }
    @media (max-width:970px){
        flex-direction: column;
        grid-template-columns: 1fr;
    }
`;
const HeaderImg = styled.img`
    width: 400px;
    height: 400px;
    margin-top: 50px;
    padding: 20px;
    @media (max-width:1100px){
        width: 330px;
        height: 360px;
    }
    @media (max-width:970px){
        margin-top:-50px;
    }
    @media (max-width:350px){
        width: 90%;
    }
`;
const HeaderTitle = styled.h1`
    color:#d9fcff;
    font-size: 50px;
    width: 500px;
    margin-top: 50px;
    @media (max-width:1100px){
        margin-top: 50px;
    }
    @media (max-width:970px){
        margin-top:50px;
        width: 100%;
        text-align: center;
        padding: 20px;
    }
`;
const HeaderTextBox = styled.div``;
const HeaderParagraph = styled.p`
    width: 600px;
    margin-top:25px;
    letter-spacing: 1px;
    @media (max-width:970px){
        margin: 0;
        width: 100%;
        text-align: center;
        padding: 20px;
    }
`;
const HeaderButtonsBox = styled.div`
    margin-top:20px;
    @media (max-width:970px){
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }
`;
const HeaderButton = styled.button`
    background-color: #04006e;
    padding:20px;
    color: #fff;
    border: none;
    font-weight: 900;
    letter-spacing: 1px;
    border-radius: 40px;
    margin: 10px;
    cursor: pointer;
    &:nth-child(2){
        margin: 10px;
        background-color: #0900ff;
    }
`;
export { HeaderBox, HeaderImg, HeaderTitle, HeaderTextBox, HeaderParagraph, HeaderButtonsBox, HeaderButton };