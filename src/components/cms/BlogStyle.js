import styled from 'styled-components';

const ArticleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 150px;
`
const ArticleTitle = styled.h2`
    width:750px;
    height: auto;
    padding: 15px;
    font-size: 36px;
    text-align: center;
    @media (max-width:750px){
        width: 100%;
        padding: 10px;
    }
    @media (max-width:500px){
        font-size: 30px;
    }
`
const DescriptionsArticle = styled.p`
    font-size: 20px;
    width:750px;
    height: auto;
    padding: 15px;
    @media (max-width:750px){
        width: 100%;
        padding: 10px;
    }
`
const ThumbnailArticle = styled.img`
    width:750px;
    height: auto;
    padding: 10px;
    @media (max-width:750px){
        width: 100%;
        padding: 0;
    }
`
const BlogContainer = styled.div`
    margin-top: 50px;
`;
export { ArticleBox, ArticleTitle, DescriptionsArticle, ThumbnailArticle, BlogContainer };