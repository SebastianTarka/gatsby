import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GlobalStyle from '../components/GlobalStyled';
import { ArticleBox, ArticleTitle, DescriptionsArticle, ThumbnailArticle, BlogContainer } from '../components/cms/BlogStyle';
import Nav from '../components/Navigation/Navigation';
import HamburgerMenu from '../components/containers/Hamburger';
const Articles = () => (
    <StaticQuery 
        query={graphql`
            query {
                content {
                    articles {
                        id
                        title
                        descriptions
                        thumbnail
                    }
                }
            }
        `}
    render={({ content: { articles }}) => (
        <section>
            <Nav/>
            <HamburgerMenu/>
            <ArticleBox>
                <GlobalStyle/>
                {articles.map(article => (
                    <BlogContainer key={article.id}>
                        <ArticleTitle>{article.title}</ArticleTitle>
                        <ThumbnailArticle src={article.thumbnail} alt=""/>
                        <DescriptionsArticle>{article.descriptions}</DescriptionsArticle>
                    </BlogContainer>
                ))}
            </ArticleBox>
        </section>
    )}/>
)
export default Articles;