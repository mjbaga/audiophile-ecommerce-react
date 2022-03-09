import ImageSet from "components/common/ImageSet";
import CloudImageSet from "components/common/CloudImageSet";

const ImageTextPair = ({ children, title = "image", imageSet, order="image", cloud = false, classes = "" }) => {

  const imageClasses = `rounded-lg overflow-hidden lg:w-1/2 order-1 ${order === 'image' ? 'lg:order-1' : 'lg:order-2'}`;
  const imageDisplay = cloud ? 
                        <CloudImageSet 
                          imageSet={imageSet} 
                          title={title} 
                          classes={imageClasses} /> :
                        <ImageSet 
                          classes={imageClasses} 
                          imageSet={imageSet} />;

  return (
    <div className={`image-text-pair flex flex-col lg:flex-row gap-8 lg:gap-4 ${classes ? classes : ''}`}>
      { imageDisplay }
      <div className={`text-container text-center lg:text-left lg:w-1/2 flex flex-col justify-center order-2 ${order === 'image' ? 'lg:order-2 lg:px-16 xl:px-24' : 'lg:order-1 lg:pr-8 xl:pr-24'}`}>
        {children}
      </div>
    </div>
  )
}

export default ImageTextPair;