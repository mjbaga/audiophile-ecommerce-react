import Button from "components/common/Button";
import ImageTextPair from "components/common/ImageTextPair";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryBySlug, getProductsByCat } from 'utils/Firebase-Api';

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
        </div>
      </section>
      
      <section className="bg-white py-10 lg:py-20">
        <div className="container mx-auto px-5 lg:px-0">
          {products.length && (
            products.map((product, i) => (
              <ImageTextPair 
                classes="mb-24" 
                key={product.id} 
                cloud="true" 
                title={product.name} 
                imageSet={product.categoryImage} 
                order={i % 2 ? "text" : "image"}
              >
                {product.new && <p className="uppercase text-primary tracking-overline text-xs">New Product</p>}
                <h2 className="uppercase leading-10 text-xl my-2 md:my-8 tracking-ap-2 font-bold md:text-4xl md:leading-11 md:max-w-md md:mx-auto lg:ml-0">{product.name}</h2>
                <p className="text-black opacity-50 my-2">{product.description}</p>
                <Button to={`/products/${product.slug}`} classes="my-4 text-white bg-primary mx-auto lg:ml-0 hover:bg-secondary">See product</Button>
              </ImageTextPair>
            ))
          )}
        </div>
      </section>

    </Fragment>
  )
}

export default Category;