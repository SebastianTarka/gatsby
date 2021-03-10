import styled from 'styled-components'

const AstronautsDialogue = styled.article`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 50px;
    padding-bottom: 50px;
    @media (max-width:1300px){
        flex-direction: column;
        grid-template-columns: 1fr;
        align-items: center;
    }
`;
const AstronautsOne = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
`;
const AstronautsImg = styled.img`
    width: 75px;
`;
const AstronautsTitle = styled.h4`
    font-size: 28px;
    padding: 10px;
`;
const AstronautsDescriptions = styled.p`
    width: 400px;
    @media (max-width:450px){
        width: 100%;
    }
`;
const AstronautsTwo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
`;
const AstronautsThree = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
`;
const AstronautMoreInformation = styled.a`
    font-size: 18px;
    color: #0037ff;
    text-decoration: none;
`;
const AstronautCenter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export {AstronautsDialogue, AstronautsOne, AstronautsImg,
    AstronautsTitle, AstronautsDescriptions, AstronautsTwo, AstronautsThree, AstronautMoreInformation, AstronautCenter}