import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/list">List <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/register">Register <span className="sr-only">(current)</span></Link>
      </li>
      
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar