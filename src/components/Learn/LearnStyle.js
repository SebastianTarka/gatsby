import styled from 'styled-components'

const LearnBox = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #2F00FF;
`;
const LearnTitle = styled.h4`
    font-size: 48px;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    @media (max-width:830px){
        text-align: center;
    }
`;
const LearnDescription = styled.p`
    width: 500px;
    padding: 15px;
    text-align: center;
    color: #fff;
    @media (max-width:520px){
        width: 100%;
    }
`;
const LearnButton = styled.button`
    width: 200px;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 15px;
    background-color: transparent;
    border: none;
    border-radius: 50px;
    font-weight: 900;
    font-size: 15px;
    margin-bottom: 30px;
    background-color: #fff;
    color: #282828;
`;
const LearnImage = styled.img`
    margin-top: 30px;
    width: 250px;
    height: auto;
`;
export { LearnBox, LearnTitle, LearnDescription, LearnButton, LearnImage }