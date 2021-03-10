import styled from 'styled-components'
;
const StartTutorial = styled.section`
    display: inline-block;
    width: 100%;
    background-color: #2f00ff;
    padding: 40px;
`;
const TutorialTitle = styled.h3`
    font-size: 32px;
    width: 70%;
    padding-top: 40px;
    color: #fff;
    margin-left: 70px;
    @media (max-width:550px){
        width: 100%;
        margin-left: 10px;
    }
`;
const TutorialParagraph = styled.p`
    font-weight: 100;
    padding-top: 20px;
    padding-bottom: 40px;
    margin-left: 70px;
    width: 70%;
    color: #fff;
    @media (max-width:550px){
        width: 100%;
        margin-left: 10px;
    }
`;
export {StartTutorial, TutorialTitle, TutorialParagraph} 