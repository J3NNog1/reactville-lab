import { NavLink } from 'react-router-dom'


// Components & Assets
import Wallet from './Wallet'
import Logo from '../../assets/react-logo.png'


const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to='/'><img src={Logo} alt="react-logo"/></NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <Wallet />
      

    </nav>
  )
}

export default Nav