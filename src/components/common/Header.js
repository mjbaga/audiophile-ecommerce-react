import { Link } from 'react-router-dom';
import logo from 'assets/images/shared/desktop/logo.svg';
import cartIcon from 'assets/images/shared/desktop/icon-cart.svg';
import MainNav from './MainNav';

const Header = () => {

  return (
    <div className="header bg-black py-8">
      <div className="container flex gap-4 justify-between mx-auto px-5 relative">
        <Link to="/" className="logo order-2 lg:order-1 sm:mr-auto lg:mr-0">
          <span className="sr-only">Link to home</span>
          <img src={logo} className="w-min" alt="Audiophile" />
        </Link>
        <MainNav
          navItems={[ 
            {
              link: '/headphones',
              text: 'Headphones'
            },
            {
              link: '/speakers',
              text: 'Speakers'
            },
            {
              link: '/earphones',
              text: 'Earphones'
            }
          ]} 

          id="primary-navigation"
        />
        <button className="bg-transparent border-0 order-3">
          <span className="sr-only">Cart Button</span>
          <img src={cartIcon} alt="Cart" />
        </button>
      </div>   
    </div>
  )
}

export default Header;