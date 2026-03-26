import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import menuIcon from '../Assets/menu.svg'
import $ from 'jquery'
import { useEffect } from 'react'

const NavBar = () => {
  useEffect(() => {
    $(".navButton").on("click", function () {
      $("nav ul").toggleClass("show")
    })

    return () => {
      $(".navButton").off("click")
    }
  }, [])

  return (
  <>
    <nav>
      <div className="logo">
        <img id="logo" src={logo} alt="Logo" />
        <p>Virtual Museum Tour</p>
      </div>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/explore'>Explore</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Home</Link></li>

      </ul>

      <button className="navButton">
        <img src={menuIcon} alt="Menu" style={{ width: '44px', height: '24px' }} />
      </button>
    </nav>
  </>
  )
}

export default NavBar