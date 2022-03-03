import Footer from 'components/common/Footer';
import Header from 'components/common/Header';

const Page = ({ classes, children, title = "Audiophile" }) => {
  document.title = title;

  return (
    <div className="page leading-normal">
      <Header />
      <main className={`main ${classes ? classes : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Page;