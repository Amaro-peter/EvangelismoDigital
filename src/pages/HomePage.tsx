import React from 'react'
import Artigos from '../components/Artigos'
import QuemSomos from '../components/QuemSomos'

const HomePage = () => {
  return (
    <>
      <div className='container mt-4'>
        <Artigos />
      </div>
      <div className='container mt-4'>
        <QuemSomos />
      </div>
    </>
  )
}

export default HomePage