import HeroBanner from "components/home/HeroBanner";
import ImageNav from "components/common/ImageNav";
import Page from "../components/layout/Page";
import { $navItems } from "utils/Constants";

const heroItem = {
  title: "XX99 Mark II Headphones",
  desc: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  imageSet: {
    mobile: require('assets/images/home/mobile/image-header.jpg'),
    tablet: require('assets/images/home/tablet/image-header.jpg'),
    desktop: require('assets/images/home/desktop/image-hero.jpg'),
  }
}

const Homepage = () => {

  return (
    <Page title="Audiophile Home">
      <HeroBanner item={heroItem} />
      <section className="my-4">
        <div className="container mx-auto">
          <ImageNav items={$navItems} />
        </div>
      </section>
    </Page>
  )
}

export default Homepage;