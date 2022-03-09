import React, { useState, useEffect, Fragment } from "react";
import ImageSet from "components/common/ImageSet";
import useCloudImage from "hooks/use-cloud-image";
import LoadingSpinner from "components/layout/LoadingSpinner";

const CloudImageSet = ({ title, imageSet, classes = "" }) => {
  const [imageSetUrl, setImageSetUrl] = useState({});

  const {
    url: desktopImageUrl,
    getImage: getDesktopImage
  } = useCloudImage(imageSet.desktop);

  const {
    url: tabletImageUrl,
    getImage: getTabletImage
  } = useCloudImage(imageSet.tablet);

  const {
    url: mobileImageUrl,
    getImage: getMobileImage
  } = useCloudImage(imageSet.mobile);

  useEffect(() => {
    getDesktopImage(imageSet.desktop);
    getTabletImage(imageSet.tablet);
    getMobileImage(imageSet.mobile);

    if(desktopImageUrl && tabletImageUrl && mobileImageUrl) {
      let newImageSet = {
        desktop: desktopImageUrl,
        tablet: tabletImageUrl,
        mobile: mobileImageUrl
      };
      
      setImageSetUrl(newImageSet);
    }
  }, [getDesktopImage, getTabletImage, getMobileImage, imageSet, desktopImageUrl, tabletImageUrl, mobileImageUrl]);

  return (
    <Fragment>
      {(imageSetUrl.desktop && imageSetUrl.tablet && imageSetUrl.mobile) ?
        <ImageSet imageSet={imageSetUrl} title={title} classes={classes} /> :
        <div className="relative w-[300px] aspect-square"><LoadingSpinner /></div>
      }
    </Fragment>
  )
}

export default React.memo(CloudImageSet);