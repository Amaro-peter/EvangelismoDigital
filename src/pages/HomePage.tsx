import React from 'react'
import Artigos from '../components/Artigos'
import QuemSomos from '../components/QuemSomos'
import FormContatoHome from '../components/FormContatoHome'
import './css/HomePage.css'
import './../components/css/FormContatoHome.css'

const HomePage = () => {
  return (
    <>
      <div className='container mt-5'>
        <Artigos />
      </div>
      <div className="mt-5 jumbotron jumbotron-fluid quemsomos">
        <QuemSomos/>
      </div>
      <div className='container form'>
        <FormContatoHome/>
      </div>
    
    </>
  )
}

export default HomePage