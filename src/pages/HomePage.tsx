import Artigos from '../components/Artigos';
import QuemSomos from '../components/QuemSomos';
import FormContatoHome from '../components/FormContatoHome';
import './css/HomePage.css';
import { useEffect, useRef } from 'react';

type HomePageProps = {
    section?: string;
};

const HomePage = ({ section }: HomePageProps) => {
  const artigosRef = useRef<HTMLDivElement>(null);
  const quemSomosRef = useRef<HTMLDivElement>(null);
  const contatosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(section === 'artigos' && artigosRef.current) {
        artigosRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      if(section === 'quem-somos' && quemSomosRef.current) {
        quemSomosRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      if(section === 'contato' && contatosRef.current) {
        contatosRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      }, 100);

      return () => clearTimeout(timer);
  }, [section]);

  return (
    <>
      <div ref={artigosRef} className='container mt-5'>
        <Artigos />
      </div>
      <div ref={quemSomosRef} className="mt-5 jumbotron jumbotron-fluid quemsomos">
        <QuemSomos/>
      </div>
      <div ref={contatosRef} className='container form'>
        <FormContatoHome/>
      </div>
    
    </>
  );
};

export default HomePage;