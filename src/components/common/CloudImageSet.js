import { useState, useEffect } from "react";
import ImageSet from "components/common/ImageSet";
import useCloudImage from "hooks/use-cloud-image";

const CloudImageSet = ({ title, imageSet, classes = "" }) => {
  const [imageSetUrl, setImageSetUrl] = useState({});

  const {
    url: desktopImageUrl,
    getImage: getDesktopImage,
    error: desktopError
  } = useCloudImage(imageSet.desktop);

  const {
    url: tabletImageUrl,
    getImage: getTabletImage,
    error: tabletError
  } = useCloudImage(imageSet.tablet);

  const {
    url: mobileImageUrl,
    getImage: getMobileImage,
    error: mobileError
  } = useCloudImage(imageSet.mobile);

  useEffect(() => {
    getDesktopImage(imageSet.desktop);
    getTabletImage(imageSet.tablet);
    getMobileImage(imageSet.mobile);

    let newImageSet = {
      desktop: desktopImageUrl,
      tablet: tabletImageUrl,
      mobile: mobileImageUrl
    };
    
    setImageSetUrl(newImageSet);
  }, [getDesktopImage, getTabletImage, getMobileImage, imageSet, desktopImageUrl, tabletImageUrl, mobileImageUrl]);

  return (
    <ImageSet imageSet={imageSetUrl} title={title} classes={classes} />
  )
}

export default CloudImageSet;