import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar