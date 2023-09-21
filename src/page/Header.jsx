import React from 'react'

export default function Header() {
  return (
    <div>
        <header className="header">
      <div className="header-top">
        <div className="header-top-container container">
          <a className="header-top-link" href="#">book an appointment</a>
          <a className="header-top-link" href="#">5 Year After Sales Service</a>
          <a className="header-top-link" href="#">+44 020 7430 1138</a>
        </div>
      </div>
      <nav className="nav">
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">engagement rings</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">wedding rings</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">earrings</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">guides & articles</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">design process</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">reviews</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">contact us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </div>
  )
}
