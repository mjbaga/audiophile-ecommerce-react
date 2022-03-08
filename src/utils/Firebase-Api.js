import { db, storage } from "firebase-config";
import { doc, getDoc, collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { getDownloadURL, ref } from "firebase/storage";

const getProduct = async function(id) {
  const product = doc(db, "products", id);
  const response = await getDoc(product);

  return response.data();
}

const getCategories = async function() {
  const categories = collection(db, "categories");
  const response = await getDocs(categories);

  return response;
}

const getCategoryBySlug = async function (slug) {
  const categories = collection(db, "categories");
  const q = query(categories, where("slug", "==", slug));
  const response = await getDocs(q);

  return response;
}

const getProductsByCat = async function (category) {

  const products = collection(db, "products");
  const q = query(products, where("category", "==", category), orderBy("new", "desc"), orderBy("name", "asc"));
  const response = await getDocs(q);

  return response;
}

const getImageCloudUrl = (imageURL) => {
  const imageRef = ref(storage, imageURL);
  return getDownloadURL(imageRef);
    // .then((url) => {
    //   // Insert url into an <img> tag to "download"
    //     // <img src={url} alt={title} />;
    //   return url;
    // })
    // .catch((error) => {
    //   // A full list of error codes is available at
    //   // https://firebase.google.com/docs/storage/web/handle-errors
    //   switch (error.code) {
    //     case 'storage/object-not-found':
    //       console.log("Image not found");
    //       break;
    //     case 'storage/unauthorized':
    //       console.log("User doesn't have permission to access the object");
    //       break;
    //     case 'storage/unknown':
    //       console.log("Unknown error occurred, inspect the server response");
    //       break;
    //     default:
    //       console.log("Error");
    //   }

    //   return false;
    // });
}

export { getProduct, getCategories, getCategoryBySlug, getProductsByCat, getImageCloudUrl };