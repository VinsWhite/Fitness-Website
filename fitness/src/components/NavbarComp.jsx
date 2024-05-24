import { Bell, Calendar3, HouseDoor } from 'react-bootstrap-icons'
import stock from '../assets/img/stock-img.jpg'
import { NavLink } from 'react-router-dom'

export default function NavbarComp() {
  return (
    <nav>
      <ul>
        <NavLink className='nav-link' to='/' activeClassName='active-link'> <HouseDoor /> </NavLink>
        <NavLink className='nav-link' to='/reservation' activeClassName='active-link'> <Calendar3 /> </NavLink>
        <NavLink className='nav-link' to='/' activeClassName='active-link'> <Bell /> </NavLink>
        <NavLink className='nav-link' to='/' activeClassName='active-link'> <img src={stock} alt="foto profilo" /> </NavLink>
      </ul>
    </nav>
  )
}
