import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import menuIcon from 'assets/images/shared/tablet/icon-hamburger.svg';

const MainNav = ({ navItems, id, menuActive, onMenuBtnClick }) => {

  const menuClickHandler = (e) => {
    onMenuBtnClick()
  }

  return (
    <Fragment>
      <button 
        className="bg-transparent border-0 order-1 sm:grow-1 lg:hidden"
        aria-controls={id}
        aria-expanded={menuActive ? 'true' : 'false'}
        onClick={menuClickHandler} 
      >
        <span className="sr-only">Menu Button</span>
        <img src={menuIcon} alt="Menu button" />
      </button>
      <nav className="main-nav hidden lg:block order-2">
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