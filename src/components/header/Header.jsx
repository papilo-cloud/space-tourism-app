import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/shared/logo.svg'
import hambg from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'
import { Link } from 'react-router-dom'


const Header = () => {

  const [style, setStyle] = useState(true)

  const handleStyle = () =>{
    if (style) {
      setStyle(false)
    } else {
      setStyle(true)
    }
    console.log(style)
  }
  return (
    <header>
      <div className="logo">
        <Link to='/' >
          <img src={logo} alt="logo" className='logo' />
          </Link>
      </div>
      <div className="hambg">
        <button onClick={handleStyle }>
          <img src={hambg} alt="icon" />
        </button>
      </div>
      <nav className={style? 'menu': 'menu addStyle'}>
        <button  className="close" onClick={handleStyle }>
          <img src={close} alt="close" />
        </button>
        <ul className='menu-list' onClick={handleStyle}>
          <li>
            <Link to='/'><span>00</span>Home </Link>
          </li>
          <li>
            <Link to='/destination'><span>01</span>Destination </Link>
          </li>
          <li>
            <Link to='/crew'><span>02</span>Crew </Link>
          </li>
          <li>
            <Link to='/technology'><span>03</span>Technology </Link>
          </li>
        </ul>
      </nav>
  </header>
  )
}

export default Header