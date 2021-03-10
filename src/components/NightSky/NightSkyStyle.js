import styled from 'styled-components'

const NightSkyBox = styled.section`
    display: flex;
    align-items:center;
    justify-content:space-around;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (max-width:860px){
        flex-direction: column-reverse;
        grid-template-columns: 1fr;
    }
`;
const NightSkyTitle = styled.h2`
    font-size: 35px;
    margin-bottom: 50px;
    @media (max-width:860px){
        margin:5px;
    }
    @media (max-width:450px){
        font-size: 30px;
    }
    @media (max-width:380px){
        margin: 10px;
    }
    @media (max-width:400px){
        font-size: 25px;
    }
    @media (max-width:350px){
        font-size: 18px;
    }
`;
const NightSkyTextContainer = styled.ul`
    @media (max-width:860px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;
const NightSkyList = styled.li`
    list-style: none;
`;
const NightSky = styled.div`
    display: flex;
    align-items: center;
`;
const NightSkyParagraph = styled.p`
    font-size: 24px;
    margin-left: 10px;
`;
const NightSkyImage = styled.img`
    width: 45px;
    height: auto;
`;
const Astrophotography = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-left: 30px;
    padding-right: 30px;
    @media (max-width:860px){
        width: 100%;
        margin-bottom: 30px;
    }
    @media (max-width:380px){
        margin: 10px;
    }
`;
const AstrophotographyTitle = styled.h2`
    font-size: 35px;
    font-weight: 900;
    margin-bottom: 20px;
    padding: 5px;
    border-left: 4px solid #0800ff;
    @media (max-width:450px){
        font-size: 30px;
    }
    @media (max-width:400px){
        font-size: 25px;
    }
    @media (max-width:350px){
        font-size: 18px;
    }
`;
const NightContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    @media (max-width:860px){
        margin-left: 0;
        text-align: center;
    }
`;
const AstrophotographyParagraph = styled.p`
    font-size: 15px;
`;
const AstrophotographyButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: #001eff;
    border: none;
    border-radius: 50px;
    margin-top: 20px;
    padding: 10px;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
`;
export { NightSkyBox, NightSkyTitle, NightSkyTextContainer, NightSkyList, NightSky, NightSkyImage, NightSkyParagraph, NightContainer, Astrophotography, AstrophotographyTitle, AstrophotographyParagraph, AstrophotographyButton }