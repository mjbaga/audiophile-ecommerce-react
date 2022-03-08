// import HeroBanner from "components/home/HeroBanner";
// import ImageNav from "components/common/ImageNav";
// import { $navItems } from "utils/Constants";
import Button from "components/common/Button";
import ImageTextPair from "components/common/ImageTextPair";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryBySlug, getProductsByCat } from 'utils/Firebase-Api';
import Image from "components/common/Image";

const Category = () => {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const params = useParams();
  const categorySlug = params.catSlug;
  document.title = category.name;

  useEffect(()=> {
    getCategoryBySlug(categorySlug).then((response) => {
      setCategory({ id: response.docs[0].id, ...response.docs[0].data() });
      return response.docs[0].ref;
    }).then((category) => {

      getProductsByCat(category).then((productsData) => {
        setProducts(productsData.docs.map((doc) => ({...doc.data(), id: doc.id })));
      });

    });

  }, [categorySlug]);

  return (
    <Fragment>
      <section className="bg-black py-10 lg:py-20">
        <div className="container mx-auto px-5 lg:px-0">
          <h1 className="text-white text-center text-xl md:text-4xl uppercase">{category.name}</h1>
          {products.length && (
            products.map((product) => (
              <ImageTextPair key={product.id} imageSet={product.image}>
                {product.new && <p className="uppercase text-primary tracking-overline text-xs">New Product</p>}
              </ImageTextPair>
            ))
          )}
        </div>
      </section>
    </Fragment>
  )
}

export default Category;