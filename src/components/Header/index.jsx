import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <>
      <div direction='horizontal' className='px-5 py-3 header-container' >
        <div className='header'>
          <div className='header__logo'>
            <p>LOGO</p>
          </div>
          <div className='header__navbar'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className='Quotes'>
          <p className='Quotes__top'>
            “We’re delivering technology solutions for today and tomorrow”
          </p>
          <p className='Quotes__bottom'>Varosa Technology Pvt. Ltd. is a software consulting company which gives uality and cost-effective IT Administrations and Software arrangements for business process automation and re-engineering.</p>
          <button className='Quotes__btn'>LEARN MORE</button>
        </div>
      </div>
    </>
  )
}

export default Header
