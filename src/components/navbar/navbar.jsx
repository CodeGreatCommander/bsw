import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/Logo.svg'
export default function Navbar(){
    return(<div className='navigation-bar'><nav className="navbar d-md-none">
    <div className="container-fluid">
    <Link className="navbar-brand" to="#">
          <img id="logo" src={logo}/>
        </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end w-50" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body show">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 w-100">
            <li className="nav-item w-100">
              <NavLink className="nav-link off" aria-current="page" to="/"  >HOME</NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink className="nav-link off" aria-current="page" to="/mentorship" >MENTORSHIP</NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink className="nav-link off" aria-current="page" to="#" >WHAT WE DO</NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink className="nav-link off" aria-current="page" to="#" >RESOURCES</NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink className="nav-link off" aria-current="page" to="/faqs" >FAQs</NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink className="nav-link off" aria-current="page" to="/contact" >CONTACT US</NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink className="nav-link off" aria-current="page" to="#" >COUNSELLING</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  
  <nav className="navbar navbar-expand-lg d-none d-md-block">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">
          <img id="logo" src={logo}/>
        </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex justify-content-evenly w-100">
            <li className="nav-item">
              <NavLink className="nav-link"  to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/mentorship">
                MENTORSHIP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="#">
                WHAT WE DO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="#">
                RESOURCES
              </NavLink>
            </li>
            <li className="nav-item  ">
              <NavLink className="nav-link"  to="/faqs">
                FAQS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/contact">
                CONTACT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="#">
                COUNSELLING
              </NavLink>
            </li>
          </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}