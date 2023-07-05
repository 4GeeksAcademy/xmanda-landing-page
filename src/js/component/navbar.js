import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid mx-5 px-5">
    <a className="navbar-brand text-light" href="#">Tiny Art Gallery</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-muted" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-muted" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-muted">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar