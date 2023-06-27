import React from 'react'
import styles from "../../styles/Navbar.css"

function Navbar() {
  return ( 
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" >Control de gastos</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
        <li className="nav-item">
          <a className="nav-link active"  href="Home">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Reporte">Reporte</a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link" href='Registro'>Registro</a>
        </li>
      </ul>
            <a href='/'>Log Out</a>
    </div>
  </div>
</nav>
  )
}

export default Navbar