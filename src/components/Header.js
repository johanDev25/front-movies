import React from 'react'
import PropTypes from 'prop-types'

const Header = ({titulo}) => {
  return (
    <nav>
     <div className="nav-wrapper light-blue darken-2 right-align">
       <a href="#!" className="brand-logo">{titulo}</a>
     </div>
    </nav>
  )
}

export default Header
