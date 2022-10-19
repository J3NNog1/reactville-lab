import { NavLink } from 'react-router-dom'


// Components & Assets
import Logo from '../../assets/react-logo.png'


const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to='/'><img src={Logo} alt="react-logo"/></NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      


    </nav>
  )
}

export default Nav