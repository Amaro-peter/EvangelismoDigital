import styles from './css/Article.module.css';
import { useParams } from 'react-router-dom';
import FormContatoArticle from "../components/FormContatoArticle";
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import FindNearestChurch from '../components/FindNearestChurch';
import { MDXProvider } from '@mdx-js/react';
import CallToAction from '../components/CallToAction';
import { getCallToActionContent } from '../config/callToActionContent';

const mdxComponents = {
  // You can add more custom components here if needed
}

const ArticlePage = () => {
  const { artigoId } = useParams<{ artigoId: string }>();

  const [ArticleComponent, setArticleComponent] = useState<any>(null)
  const [frontmatter, setFrontmatter] = useState<any>(null)

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if(!artigoId) {
      setError(true);
      setLoading(false);
      return;
    }

    const loadArticle = async () => {
    try {
      setLoading(true);
      const articles = import.meta.glob('../articleContent/articlesData/*.mdx');
      const articleLoader = articles[`../articleContent/articlesData/${artigoId}.mdx`];

      if (!articleLoader) {
        throw new Error("Article not found");
      }

      const module: any = await articleLoader()

      setArticleComponent(() => module.default)
      setFrontmatter(module.frontmatter)
      setLoading(false);
      } catch(err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [artigoId]);

  if(loading) {
    return (
      <>
        <div className="container mt-5 text-center">
          <div className="spinner-border" role="status">
          </div>
        </div>
      </>
    );
  }

  if(error || !ArticleComponent) {
    return (
      <div className="container mt-5">
        <h1>Página não encontrada</h1>
        <p>O artigo solicitado não existe.</p>
      </div>
    );
  }

  const callToActionData = getCallToActionContent(artigoId)

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.imgMainCoverPage || frontmatter.imgArticle}
        url={`/artigo/${artigoId}`}
        ogType="article"
        schemaType="Article"
        datePublished={frontmatter.datePublished ? new Date(frontmatter.datePublished) : undefined}
        dateModified={frontmatter.dateModified ? new Date(frontmatter.dateModified) : undefined}
        author={frontmatter.author}
        imageAlt={frontmatter.imgAlt || frontmatter.title}
      />

      <MDXProvider components={mdxComponents}>
        <div className='container mt-5'>
          <article className={styles.articleBody}>
            
            <h1 className="mb-4">
              {frontmatter.title}
            </h1>

            <img 
              src={frontmatter.imgArticle}
              alt={frontmatter.imgAlt || frontmatter.title}
              className="img-fluid mb-4 rounded w-100"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />

            <ArticleComponent />
          </article>
        </div>
      </MDXProvider>

      <div className='container mt-5'>
        <CallToAction title={callToActionData.title}>
          {callToActionData.content}
        </CallToAction>
      </div>

      <div className='container form'>
        <FormContatoArticle/>
      </div>

      <div className='container mt-5'>
        <FindNearestChurch />
      </div>
    </>
  );
};

export default ArticlePage;