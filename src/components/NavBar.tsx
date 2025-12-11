import { NavLink, useLocation } from 'react-router-dom'
import styles from './css/NavBar.module.css';

const NavBar = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const section = params.get("section");

  return (
    <nav className={`navbar navbar-expand-lg fixed-top bg-white ${styles.navbar}`}>
        <div className="container-fluid">
            <NavLink
                className="nav-link"
                aria-current="page"
                to="/?section=artigos"
            >
                <img src="/FaithTech Logo Text - Grey Orange (1) 1.svg" alt="FaithTech" style={{maxHeight: "50px"}}/>
            </NavLink>
                
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            className={
                                location.pathname === "/" && (section === "artigos" || !section)
                                    ? `nav-link ${styles['active-navlink']}`
                                    : "nav-link"
                            }
                            aria-current="page"
                            to="/?section=artigos"
                        >
                            Artigos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={
                                location.pathname === "/" && section === "quem-somos"
                                    ? `nav-link ${styles['active-navlink']}`
                                    : "nav-link"
                            }
                            to="/?section=quem-somos"
                        >
                            Quem somos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={
                                location.pathname === "/" && section === "contato"
                                    ? `nav-link ${styles['active-navlink']}`
                                    : "nav-link"
                            }
                            to="/?section=contato"
                        >
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