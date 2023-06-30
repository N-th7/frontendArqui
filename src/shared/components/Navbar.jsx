import React from 'react'
import  "../../styles/Navbar.css"

function Navbar() {
  return ( 
<nav className="navbar"> 
  <div className="container">
    <a className="nav" >Cash Control</a>
    <a className='bot no-print' href='/'>Log Out</a>
  </div>
</nav>
  )
}

export default Navbar