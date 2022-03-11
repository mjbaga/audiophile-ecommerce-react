import Button from "components/common/Button";
import ImageSet from "components/common/ImageSet";

const HeroBanner = ({ item, link}) => {
  const { title, desc, imageSet } = item;

  return (
    <section className="hero-banner h-[65vh] sm:h-[75vh] lg:h-[85vh] overflow-hidden relative">
      <div className="container mx-auto h-full">
        <div className="flex flex-col text-white text-center lg:text-left justify-center mx-auto max-w-sm h-full lg:ml-0">
          <p className="uppercase opacity-50 tracking-overline font-light">New Product</p>
          <h1 className="uppercase leading-10 text-3xl my-4 tracking-ap-1.3 font-bold md:text-8xl md:leading-15">{title}</h1>
          <p className="my-4 opacity-75 mx-auto">{desc}</p>
          <Button to={link} classes="my-4 text-white bg-primary mx-auto lg:ml-0 hover:bg-secondary font-bold">See product</Button>
        </div>
      </div>
      <ImageSet 
        imageSet={ imageSet }
        title={title}
        classes="w-full h-full absolute left-0 bottom-0 -z-10"
      />
    </section>
  )
}

export default HeroBanner;