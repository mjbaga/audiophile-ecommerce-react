
import { Link, NavLink } from 'react-router-dom';
import logo from 'assets/images/shared/desktop/logo.svg';
import cartIcon from 'assets/images/shared/desktop/icon-cart.svg';
import MainNav from './MainNav';
import { Fragment, useState } from 'react';

const NAVITEMS = [ 
  {
    link: '/headphones',
    text: 'Headphones',
    image: require('assets/images/shared/desktop/image-category-thumbnail-headphones.png')
  },
  {
    link: '/speakers',
    text: 'Speakers',
    image: require('assets/images/shared/desktop/image-category-thumbnail-speakers.png')
  },
  {
    link: '/earphones',
    text: 'Earphones',
    image: require('assets/images/shared/desktop/image-category-thumbnail-earphones.png')
  }
];

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const menuClickHandler = () => {
    setMenuIsActive(!menuIsActive);
  }

  menuIsActive ? document.body.classList.add('menu-open') : document.body.classList.remove('menu-open');

  return (
    <header className="header relative">
      <nav className={`left-0 w-full top-[88px] lg:hidden absolute bg-white md:h-[285px] z-[200] ${menuIsActive ? 'translate-y-0' : '-translate-y-full ' } transform duration-1000 ease-in-out`}>
        <ul id="primary-navigation" className={`flex flex-col sm:flex-row px-5 pb-8 md:container md:mx-auto w-full items-stretch relative`}>
          {NAVITEMS.map((item, i)=> (
            <li className="nav-item" key={i}>
              <NavLink to={item.link} className="text-black uppercase text-xs text-center mx-4 sm:mx-2 hover:text-primary transition-colors duration-300 font-bold flex flex-col justify-end before:block before:absolute before:bg-darkgray before:w-full before:h-3/4 sm:before:h-3/5 before:bottom-0 before:left-0 relative py-5 before:z-0 before:rounded-lg h-full">
                <div className="relative">
                  <img className="mx-auto w-1/3 sm:w-2/3" src={item.image} alt={item.text} />
                  <p className="uppercase text-sm mb-4 font-bold">{item.text}</p>
                  <p className="right-arrow uppercase"><span className="opacity-50">Shop</span></p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="bg-black py-8 z-[9999] absolute top-0 left-0 w-full lg:relative">
        <div className="container flex gap-4 justify-between mx-auto px-5 relative">
          <Link to="/" className="logo order-2 lg:order-1 sm:mr-auto lg:mr-0">
            <span className="sr-only">Link to home</span>
            <img src={logo} className="w-min" alt="Audiophile" />
          </Link>
          <MainNav
            navItems={NAVITEMS} 
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