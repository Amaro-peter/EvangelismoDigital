import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="#">
                <img src="/FaithTech Logo Text - Grey Orange (1) 1.svg" alt="FaithTech" style={{maxHeight: "50px"}}/>
            </NavLink>    
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active-navlink" : "nav-link"} aria-current="page" to="/">
                        Artigos
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active-navlink" : "nav-link"} to="/produtos">
                        Quem somos
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active-navlink" : "nav-link"} to="/contatos">
                        Contato
                    </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;