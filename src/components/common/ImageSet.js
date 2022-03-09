import React from 'react';

const ImageSet = ({ imageSet, title, classes }) => {
  return (
    <picture className={`${classes ? classes : ''}`}>
      <source srcSet={imageSet.desktop} media="(min-width: 1024px)" />
      <source srcSet={imageSet.tablet} media="(min-width: 768px)" />
      <source srcSet={imageSet.mobile} media="(min-width: 360px)" />
      <source srcSet={imageSet.mobile} media="(min-width: 0px)" />
      
      <img className="w-full h-full object-cover object-center-bottom" src={imageSet.mobile} alt={title} /> 
    </picture>
  )
}

export default React.memo(ImageSet);