import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import logo from 'assets/images/shared/desktop/logo.svg';
import NavItems from "components/common/NavItems";

const Footer = () => {
  const categories = useSelector((state) => state.category.categories);

  return (
    <footer className="footer bg-black relative">
      <div className="container mx-auto relative px-5 py-8 lg:px-0 after:content[''] after:h-[4px] after:w-[100px] after:bg-primary after:absolute after:left-1/2 after:-translate-x-2/4 after:top-0 after:md:left-[20px] after:lg:left-0 after:md:translate-x-0">
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-start gap-4">
          <Link to="/" className="logo mx-auto md:ml-0 lg:mr-0">
            <span className="sr-only">Link to home</span>
            <img src={logo} className="w-min" alt="Audiophile" />
          </Link>
          <NavItems
            navItems={categories}
            classes="footer-nav"
            menuClass="flex-col md:flex-row"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="w-full mx-auto px-16 md:p-0 md:col-span-2 lg:col-span-1 lg:w-full lg:order-1">
            <p className="text-white opacity-50 text-center md:text-left text-sm">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
          </div>
          <p className="text-white opacity-50 text-center md:text-left text-sm md:mt-0 lg:order-3">Copyright 2021. All Rights Reserved</p>
          <ul className="flex gap-4 mx-auto md:mr-0 lg:row-span-2 lg:order-2 lg:self-center">
            <li>
              <Link to="/company" className="text-white text-md lg:text-lg hover:text-primary duration-300 transition-colors">
                <span className="sr-only">Facebook</span>
                <i className="icon icon-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="/company" className="text-white text-md lg:text-lg hover:text-primary duration-300 transition-colors">
                <span className="sr-only">Twitter</span>
                <i className="icon icon-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="/company" className="text-white text-md lg:text-lg hover:text-primary duration-300 transition-colors">
                <span className="sr-only">Instagram</span>
                <i className="icon icon-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;