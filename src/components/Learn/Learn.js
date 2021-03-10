import React from 'react'
import { LearnBox, LearnTitle, LearnDescription, LearnButton, LearnImage } from './LearnStyle'
import book from './ImageLearn/book.svg'
const Learn = () => {
    return(
        <LearnBox>
            <LearnImage src={book} alt="blue book"/>
            <LearnTitle>Let's stay in touch, join us today!</LearnTitle>
            <LearnDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</LearnDescription>
            <LearnButton>Start the Course</LearnButton>
        </LearnBox>
    )
}
export default Learn