import React from 'react';
import { useEffect } from "react";
import useCloudImage from "hooks/use-cloud-image";

const Image = (imageSrc, title = "image") => {
  const {
    url,
    getImage,
    error
  } = useCloudImage(imageSrc.imageSrc);

  useEffect(() => {
    getImage(imageSrc.imageSrc)
  }, [getImage, imageSrc.imageSrc]);

  return (error === null && imageSrc.imageSrc !== "") && <img src={url} alt={title} />;
}

export default React.memo(Image);