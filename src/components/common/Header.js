import { useDispatch, useSelector } from 'react-redux';
import ImageNav from 'components/common/ImageNav';
import { Link } from 'react-router-dom';
import logo from 'assets/images/shared/desktop/logo.svg';
import cartIcon from 'assets/images/shared/desktop/icon-cart.svg';
import menuIcon from 'assets/images/shared/tablet/icon-hamburger.svg';
import { useState } from 'react';
import { $navItems } from 'utils/Constants';
import NavItems from 'components/common/NavItems';
import { toggleCart } from 'store/ui-slice';

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const dispatch = useDispatch();
  const cartTotalItems = useSelector((state) => state.cart.totalQuantity);

  const menuClickHandler = () => {
    setMenuIsActive(prevMenuIsActive => !prevMenuIsActive);
  };

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };

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
          <button 
            className="bg-transparent border-0 order-1 sm:grow-1 lg:hidden"
            aria-controls="primary-navigation"
            aria-expanded={menuIsActive ? 'true' : 'false'}
            onClick={menuClickHandler} 
          >
            <span className="sr-only">Menu Button</span>
            <img src={menuIcon} alt="Menu button" />
          </button>
          <NavItems
            navItems={$navItems}
            id="primary-navigation"
            classes="main-nav hidden lg:block order-2"
          />
          <button className="bg-transparent border-0 order-3 relative" onClick={toggleCartHandler}>
            <span className="sr-only">Cart Button</span>
            <img src={cartIcon} alt="Cart" />
            {cartTotalItems > 0 && (
              <div className="absolute -top-2 -right-3 rounded-full bg-red-600 text-white text-xs font-bold aspect-square w-[21px] h-[21px] grid place-items-center">
                <p className="leading-[13px] tracking-ap-1">{cartTotalItems}</p>
              </div>)
            }
          </button>
        </div>   
      </div>
    </header>
  )
}

export default Header;