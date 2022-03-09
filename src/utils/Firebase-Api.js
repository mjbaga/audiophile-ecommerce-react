import { db } from "firebase-config";
import { doc, getDoc, collection, getDocs, query, where, orderBy } from 'firebase/firestore';

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

const getProductBySlug = async function (slug) {
  const products = collection(db, "products");
  const q = query(products, where("slug", "==", slug));
  const response = await getDocs(q);

  return response;
}

export { getProduct, getCategories, getCategoryBySlug, getProductsByCat, getProductBySlug };