import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
        <NavBar />
        <div className='container' style={{ paddingTop: '40px', maxWidth: '1000px' }}>
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout