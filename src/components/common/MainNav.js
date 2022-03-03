import { NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import menuIcon from 'assets/images/shared/tablet/icon-hamburger.svg';

const MainNav = (props) => {
  const { navItems, id } = props;
  const [menuIsActive, setMenuIsActive] = useState(false);

  const menuClickHandler = (e) => {
    setMenuIsActive(!menuIsActive);
  }

  menuIsActive ? document.body.classList.add('menu-open') : document.body.classList.remove('menu-open');

  return (
    <Fragment>
      <button 
        className="bg-transparent border-0 order-1 sm:grow-1 lg:hidden"
        aria-controls={id}
        aria-expanded={menuIsActive ? 'true' : 'false'}
        onClick={menuClickHandler} 
      >
        <span className="sr-only">Menu Button</span>
        <img src={menuIcon} alt="Menu button" />
      </button>
      <nav className={`main-nav absolute lg:relative order-2 left-0 top-[90px] lg:top-auto lg:left-auto hidden lg:block ${menuIsActive ? 'active' : '' }`}>
        <ul id={id ? id : ''} className="flex">
          <li className="nav-item">
            <NavLink to="/" className="text-white hidden uppercase lg:inline text-xs text-center mx-4 hover:text-primary transition-colors duration-300 font-bold">
              Home
            </NavLink>
          </li>
          {navItems.map((item, i)=> (
            <li className="nav-item" key={i}>
              <NavLink to={item.link} className="text-white uppercase text-xs text-center mx-4 hover:text-primary transition-colors duration-300 font-bold">
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  )
}

export default MainNav;