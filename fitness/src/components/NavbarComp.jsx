import { Bell, Calendar3, HouseDoor } from 'react-bootstrap-icons'
import stock from '../assets/img/stock-img.jpg'
import { NavLink } from 'react-router-dom'

export default function NavbarComp() {
  return (
    <nav>
      <ul>
        <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link text-secondary'}> <HouseDoor /> </NavLink>
        <NavLink to='/reservation' className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link text-secondary'}> <Calendar3 /> </NavLink>
        <NavLink className='nav-link text-secondary'>  <Bell /> </NavLink>
        <NavLink className='nav-link text-secondary'> <img src={stock} alt="foto profilo" /> </NavLink>
      </ul>
    </nav>
  )
}
