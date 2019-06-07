import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>Security Viewer</h1>
    <nav>
      <Link to="/companies">Companies</Link>
      <Link to="/upload">Upload</Link>
    </nav>
    <hr />
  </div>
)

export default Navbar
