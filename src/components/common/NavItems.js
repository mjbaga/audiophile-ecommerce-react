import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItems = ({ navItems, id, classes, menuClass }) => {

  return (
    <nav className={`${classes ? classes : ''}`}>
      <ul id={id ? id : ''} className={`flex gap-2 md:gap-8 ${menuClass ? menuClass : ''}`}>
        <li className="nav-item my-2 lg:my-0">
          <NavLink to="/" className="text-white uppercase text-xs text-center hover:text-primary transition-colors duration-300 font-bold block tracking-ap-2">
            Home
          </NavLink>
        </li>
        {navItems.map((item, i)=> (
          <li className="nav-item my-2 lg:my-0" key={i}>
            <NavLink to={item.link} className="text-white uppercase text-xs text-center mx-auto hover:text-primary transition-colors duration-300 font-bold block tracking-ap-2">
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default React.memo(NavItems);