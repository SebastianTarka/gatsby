import React from 'react'
import galaxy from './ImageNightSky/galaxy.svg'
import planets from './ImageNightSky/saturn.svg'
import stars from './ImageNightSky/star.svg'
import { NightSkyBox, NightSkyTitle, NightSkyTextContainer, NightSkyList, NightSky, NightSkyParagraph, NightSkyImage, NightContainer, Astrophotography, AstrophotographyTitle, AstrophotographyParagraph, AstrophotographyButton } from './NightSkyStyle'
const NightSkySection = () => {
    return(
        <NightSkyBox>
            <NightContainer>
                <NightSkyTitle>Amazing Objects in the Night Sky</NightSkyTitle>
                <NightSkyTextContainer>
                    <NightSkyList>
                        <NightSky>
                            <NightSkyImage src={galaxy} alt="" aria-hidden="true"/>
                            <NightSkyParagraph>Galaxy</NightSkyParagraph>
                        </NightSky>
                    </NightSkyList>
                    <NightSkyList>
                        <NightSky>
                            <NightSkyImage src={planets} alt="" aria-hidden="true"/>
                            <NightSkyParagraph>Planets</NightSkyParagraph>
                        </NightSky>
                    </NightSkyList>
                    <NightSkyList>
                        <NightSky>
                            <NightSkyImage src={stars} alt="" aria-hidden="true"/>
                            <NightSkyParagraph>Stars</NightSkyParagraph>
                        </NightSky>
                    </NightSkyList>
                </NightSkyTextContainer>
                </NightContainer>
            <Astrophotography>
                <AstrophotographyTitle>A Guide for Beginner Astrophotographers</AstrophotographyTitle>
                <AstrophotographyParagraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</AstrophotographyParagraph>
                <AstrophotographyButton>Astronomy Blog</AstrophotographyButton>
            </Astrophotography>
        </NightSkyBox>
    )
}
export default NightSkySection