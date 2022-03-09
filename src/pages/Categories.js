import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import ImageTextPair from "components/common/ImageTextPair";
import ImageNav from "components/common/ImageNav";
import { $navItems } from 'utils/Constants';

const Categories = () => {

  return (
    <Fragment>
      <Outlet />
      <section className="my-8 overflow-hidden lg:my-20">
        <div className="container mx-auto px-5 lg:px-0">
          <ImageNav items={$navItems} />
        </div>
      </section>
      <section className="my-8 overflow-hidden lg:my-20">
        <div className="container mx-auto px-5 lg:px-0">
          <ImageTextPair 
            imageSet={{
              desktop: require('assets/images/shared/desktop/image-best-gear.jpg'),
              tablet: require('assets/images/shared/tablet/image-best-gear.jpg'),
              mobile: require('assets/images/shared/mobile/image-best-gear.jpg'),
              title: 'Best audio gear'
            }} 
            order="text"
          >
            <h2 className="uppercase leading-10 text-xl my-4 md:my-8 tracking-ap-2 font-bold md:text-4xl md:leading-11 md:max-w-md md:mx-auto lg:ml-0">Bringing you the <span className="text-primary">best</span> audio gear</h2>
            <p className="opacity-50 font-medium">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </ImageTextPair>
        </div>
      </section>
    </Fragment>
  )
}

export default Categories;