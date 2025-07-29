import React from "react";
import './css/Article.css';
import { useParams } from 'react-router-dom';
import { articles } from "./Articles";
import  Invitation from '../components/Invitation';
import ArticleMainContent from "../components/ArticleMainContent";
import FormContatoArticle from "../components/FormContatoArticle";



const Article = () => {
const { artigoId } = useParams<{ artigoId: keyof typeof articles }>();
  const article = artigoId ? articles[artigoId] : null;
  if (!article) {
    return (
      <div>       
      <p>Página não existente!</p>
     </div>
    );
  }
  return (
    <>
      <div className='container mt-5'>
      <ArticleMainContent article={article}/>
      </div>
      <div className="mt-5 jumbotron jumbotron-fluid invitation">
      <Invitation chamado={article.chamado}/>
      </div>
      <div className='container form'>
        <FormContatoArticle/>
      </div>

    </>
  );
};

export default Article;