import ImageNav from 'components/common/ImageNav';
import { Link } from 'react-router-dom';
import logo from 'assets/images/shared/desktop/logo.svg';
import cartIcon from 'assets/images/shared/desktop/icon-cart.svg';
import MainNav from './MainNav';
import { useState } from 'react';
import { $navItems } from 'utils/Constants';

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const menuClickHandler = () => {
    setMenuIsActive(!menuIsActive);
  }

  menuIsActive ? document.body.classList.add('menu-open') : document.body.classList.remove('menu-open');

  return (
    <header className="header relative">
      <ImageNav menuIsActive={menuIsActive} id="primary-navigation" items={$navItems} classes="w-full absolute left-0 top-[88px] lg:hidden bg-white md:h-[285px] z-[200] transform duration-1000 ease-in-out" mobileMenu="true" />
      <div className="bg-black z-[9999] absolute top-0 left-0 w-full lg:relative ">
        <div className="container py-8 border-b border-gray-700 flex gap-4 justify-between mx-auto relative px-5 lg:px-0">
          <Link to="/" className="logo order-2 lg:order-1 sm:mr-auto lg:mr-0">
            <span className="sr-only">Link to home</span>
            <img src={logo} className="w-min" alt="Audiophile" />
          </Link>
          <MainNav
            navItems={$navItems} 
            onMenuBtnClick={menuClickHandler}
            id="primary-navigation"
          />
          <button className="bg-transparent border-0 order-3">
            <span className="sr-only">Cart Button</span>
            <img src={cartIcon} alt="Cart" />
          </button>
        </div>   
      </div>
    </header>
  )
}

export default Header;