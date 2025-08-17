import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
        <NavBar />
        <div className='container mt-3' style={{ paddingTop: '40px' }}>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout