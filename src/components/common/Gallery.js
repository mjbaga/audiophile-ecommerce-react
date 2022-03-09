import CloudImageSet from "components/common/CloudImageSet";

const Gallery = ({ imageGallery }) => {
  const galleryClass = [
    "order-1",
    "md:order-3",
    "md:order-2 md:row-span-2"
  ];

  return (
    <div className="grid gap-4 md:grid-cols-gallery md:auto-rows-fr lg:max-h-[40rem]">
      {imageGallery.map((gallery, i) =>   
         (<CloudImageSet 
          key={i}
          imageSet={gallery} 
          title={`gallery-${i}`} 
          classes={`rounded-lg overflow-hidden  ${galleryClass[i]}`}
        />)
      )}
    </div>
  )
}

export default Gallery;