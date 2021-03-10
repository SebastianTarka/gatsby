import React from "react";
import GlobalStyle from "../components/GlobalStyled";
import Nav from "../components/Navigation/Navigation";
import HeaderBox from '../components/Header/Header';
import HamburgerMenu from "../components/containers/Hamburger";
import NightSkyBox from "../components/NightSky/NightSkySection";
import StartTutorial from "../components/TutorialSection/TutorialSection";
import AstronautsDialogue from "../components/AstronautsArticles/AstronautArticles";
import LearnBox from "../components/Learn/Learn";
import Footer from "../components/Footer/FooterPage";

const IndexPage = () => (
  <div>
    <GlobalStyle/>
    <Nav/>
    <HamburgerMenu/>
    <HeaderBox/>
    <NightSkyBox/>
    <StartTutorial/>
    <AstronautsDialogue/>
    <LearnBox/>
    <Footer/>
  </div>
)
export default IndexPage;