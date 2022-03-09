import { useCallback, useState } from 'react';
import { storage } from "firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

const useCloudImage = (imagePath) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
 
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
            setError("Image not found");
            break;
          case 'storage/unauthorized':
            setError("User doesn't have permission to access the object");
            break;
          case 'storage/unknown':
            setError("Unknown error occurred, inspect the server response");
            break;
          default:
            setError("Error");
        }

        return false;
      });
  }, [imagePath]);

  return {
    url,
    getImage,
    error
  }
};

export default useCloudImage;
