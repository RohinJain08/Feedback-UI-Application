import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { FaSmileBeam } from 'react-icons/fa'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link to='/' style={{ textDecoration: "none", color: "#ffffff" }}>
          <h2><FaSmileBeam /> CUSTOMER FEEDBACK <FaSmileBeam /></h2>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  bgColor: "rgba(0,0,0,0.4)",
  textColor: '#ffffff',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
