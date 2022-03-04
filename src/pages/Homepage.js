import HeroBanner from "components/home/HeroBanner";
import ImageNav from "components/common/ImageNav";
import Page from "../components/layout/Page";
import { $navItems } from "utils/Constants";
import bgPattern from 'assets/images/home/desktop/pattern-circles.svg';
import ImageSet from "components/common/ImageSet";
import Button from "components/common/Button";

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
      <HeroBanner item={heroItem} link="/" />
      <section className="my-4 lg:my-20">
        <div className="container mx-auto px-5 lg:px-0">
          <ImageNav items={$navItems} />
        </div>
      </section>
      <section className="my-4 overflow-hidden lg:my-20">
        <div className="container mx-auto px-5 lg:px-0">
          <div className="px-8 rounded-lg flex flex-col lg:flex-row bg-primary relative">
            <img className="absolute -top-8 md:-top-40 left-0 w-auto :scale-125 lg:top-auto lg:-bottom-60 lg:-left-32 xl:-left-12 2xl:left-[18px] -z-5" src={bgPattern} alt="bg-pattern" />
            <div className="relative grow py-16 lg:py-32">
              <img className="w-1/2 sm:w-1/3 lg:w-1/2 object-center-bottom mx-auto lg:-mb-36" src={require('assets/images/home/desktop/image-speaker-zx9.png')} alt="ZX9 Speaker" />
            </div>
            <div className="flex flex-col grow text-center lg:text-left pb-8 justify-center z-10">
              <h2 className="uppercase leading-10 text-3xl my-4 tracking-ap-1.3 font-bold md:text-8xl md:leading-15 text-white">ZX9<br></br>Speaker</h2>
              <p className="text-white my-4 opacity-75 max-w-sm mx-auto lg:mx-0">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Button to="/" classes="text-white bg-black hover:bg-stone-500 mx-auto lg:ml-0 my-4 tracking-ap-1">See product</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-8 overflow-hidden lg:my-20">
        <div className="container mx-auto px-5 lg:px-0">
          <div className="rounded-lg overflow-hidden flex flex-col lg:flex-row relative">
            <div className="absolute left-8 top-1/2 -translate-y-2/4 flex flex-col">
              <h2 className="uppercase leading-10 text-xl my-4 tracking-ap-2 font-bold">ZX7 Speaker</h2>
              <Button to="/" classes="mt-4 text-black text-xs bg-transparent border-2 border-black hover:bg-black hover:text-white mr-auto">See product</Button>
            </div>
            <ImageSet 
              imageSet={{
                desktop: require('assets/images/home/desktop/image-speaker-zx7.jpg'),
                tablet: require('assets/images/home/tablet/image-speaker-zx7.jpg'),
                mobile: require('assets/images/home/mobile/image-speaker-zx7.jpg'),
                title: 'ZX7 Speaker'
              }}

              classes="w-full"
            />
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Homepage;