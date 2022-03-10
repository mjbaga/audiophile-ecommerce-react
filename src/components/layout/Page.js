import { Outlet } from 'react-router-dom';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import Cart from 'components/cart/Cart';
import { useSelector } from 'react-redux';

const Page = ({ classes }) => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <div className="page leading-normal">
      <Header />
      {showCart && <Cart />}
      <main className={`main pt-[90px] lg:pt-0 ${classes ? classes : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Page;