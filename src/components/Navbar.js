import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div id="navbar">
      <nav>
        <ul>
          <li><b>News Reporter</b></li>
          <li><Link to="/home"><button>Home</button></Link> </li>
          <li><Link to="/about"><button>About</button></Link> </li>
          <li><Link to="/settings"><button>Settings</button></Link> </li>
          <li id="login" className="logBtn"><Link to="/login"><button><span className="material-symbols-outlined">
            login
          </span></button></Link></li>
          <li className="logBtn"><Link to="/logout"><button><span className="material-symbols-outlined">
            logout
          </span></button></Link></li>
        </ul>
      </nav>
    </div>
  )
}
