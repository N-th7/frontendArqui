import React from 'react'
import  "../../styles/Navbar.css"

function Navbar() {
  return ( 
<nav className="navbar"> 
  <div className="container">
    <a className="nav" >Cash Control</a>
    <a className="nav-link" href="Reporte">Reporte</a>
    <a className="nav-link" href='Registro'>Registro</a>
    <a className="nav-link" ></a>
    <a className="nav-link" ></a>
    <a className="nav-link" ></a>
    <a className="nav-link" ></a>
    <a className='bot' href='/'>Log Out</a>
  </div>
</nav>
  )
}

export default Navbar