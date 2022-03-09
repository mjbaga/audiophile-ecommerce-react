import { useCallback, useState } from 'react';
import { storage } from "firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

const useCloudImage = (imagePath) => {
  const [url, setUrl] = useState('');
 
  const getImage = useCallback(() => {
    getDownloadURL(ref(storage, imagePath))
      .then((url) => {
        setUrl(url);
        
      })
      .catch((e) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (e.code) {
          case 'storage/object-not-found':
            console.log("Image not found");
            break;
          case 'storage/unauthorized':
            console.log("User doesn't have permission to access the object");
            break;
          case 'storage/unknown':
            console.log("Unknown error occurred, inspect the server response");
            break;
          default:
            console.log("Error");
        }

        return false;
      });
  }, [imagePath]);

  return {
    url,
    getImage
  }
};

export default useCloudImage;
