

const HeroBanner = ({ item }) => {
  const { title, desc, link, imageSet } = item;

  return (
    <section className="hero-banner h-[65vh] sm:h-[75vh] lg:h-[85vh] overflow-hidden relative">
      <div className="container mx-auto h-full">
        <div className="flex flex-col text-white text-center lg:text-left justify-center mx-auto max-w-sm h-full lg:ml-0">
          <p className="uppercase opacity-50 tracking-overline font-light">New Product</p>
          <h1 className="uppercase leading-10 text-3xl my-4 tracking-ap-1.3 font-bold md:text-8xl md:leading-15">{title}</h1>
          <p className="my-4 opacity-75 mx-auto">{desc}</p>
          <a href={link} className="my-4 uppercase px-6 py-3 text-white bg-primary mx-auto tracking-ap-1 lg:ml-0 hover:bg-secondary duration-300 transition-colors cursor-pointer">See product</a>
        </div>
      </div>
      <picture className="w-full h-full absolute left-0 bottom-0 image-container -z-10">
        <source srcSet={imageSet.desktop} media="(min-width: 1024px)" />
        <source srcSet={imageSet.tablet} media="(min-width: 640px)" />
        <source srcSet={imageSet.mobile} media="(min-width: 360px)" />
        <source srcSet={imageSet.mobile} media="(min-width: 0px)" />
        
        <img className="w-full h-full object-cover object-center-bottom" src={imageSet.mobile} alt={title} /> 
      </picture>
    </section>
  )
}

export default HeroBanner;