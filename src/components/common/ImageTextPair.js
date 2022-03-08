import ImageSet from "./ImageSet";

const ImageTextPair = ({ children, imageSet, order="image" }) => {
  return (
    <div className="image-text-pair flex flex-col lg:flex-row gap-8 lg:gap-4">
      <ImageSet classes={`rounded-lg overflow-hidden lg:w-1/2 order-1 ${order === 'image' ? 'lg:order-1' : 'order-2'}`} imageSet={imageSet} />
      <div className={`text-container text-center lg:text-left lg:w-1/2 flex flex-col justify-center ${order === 'image' ? 'lg:order-2 lg:px-16 xl:px-24' : 'order-1 lg:pr-8 xl:pr-24'}`}>
        {children}
      </div>
    </div>
  )
}

export default ImageTextPair;