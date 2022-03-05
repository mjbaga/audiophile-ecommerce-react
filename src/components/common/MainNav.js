import { Fragment } from 'react';
import menuIcon from 'assets/images/shared/tablet/icon-hamburger.svg';
import NavItems from './NavItems';

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
      <NavItems
        navItems={navItems}
        id={id}
        classes="main-nav hidden lg:block order-2"
      />
    </Fragment>
  )
}

export default MainNav;