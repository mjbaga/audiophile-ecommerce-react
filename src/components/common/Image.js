import React from 'react';
import { useEffect } from "react";
import useCloudImage from "hooks/use-cloud-image";
import LoadingSpinner from 'components/layout/LoadingSpinner';

const Image = (imageSrc, title="image", classes="") => {
  const {
    url,
    getImage
  } = useCloudImage(imageSrc.imageSrc);

  useEffect(() => {
    getImage(imageSrc.imageSrc)

    
  }, [getImage, imageSrc.imageSrc]);

  return (url ? <img src={url} alt={title} className={`${classes ? classes : ''}`} /> : <LoadingSpinner />)
}

export default React.memo(Image);