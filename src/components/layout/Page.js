import { Outlet } from 'react-router-dom';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';

const Page = ({ classes }) => {

  return (
    <div className="page leading-normal">
      <Header />
      <main className={`main pt-[90px] lg:pt-0 ${classes ? classes : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Page;