// import Button from "components/common/Button";
import ImageTextPair from "components/common/ImageTextPair";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from 'utils/Firebase-Api';
import { currencyFormat, processToParagraphs } from "utils/CustomFunctions";
import Gallery from "components/common/Gallery";

const Product = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const productSlug = params.productSlug;

  useEffect(()=> {
    getProductBySlug(productSlug).then((response) => {
      setProduct({ id: response.docs[0].id, ...response.docs[0].data() });
    })

  }, [productSlug]);

  console.log(product);

  let included;
  if(product.includes) {
    included = product.includes.map((item, i) => (
      <li className="my-4" key={i}>
        <span className="text-primary font-bold mr-4">{item.quantity}x</span>
        <span className="text-black opacity-50">{item.item}</span></li>
      ))
  }

  return (
    <Fragment>
      {Object.keys(product).length > 0 && (
        <Fragment>
          <section className="overflow-hidden my-8 md:my-12 lg:my-20">
            <div className="container mx-auto px-5 lg:px-0">
              <ImageTextPair 
                classes="mb-24 md:flex-row" 
                key={product.id} 
                cloud="true" 
                title={product.name} 
                imageSet={product.image} 
                order="image"
                align="left"
              >
                {product.new && <p className="uppercase text-primary tracking-overline text-xs">New Product</p>}
                <h1 className="uppercase leading-10 text-xl my-2 md:my-8 tracking-ap-2 font-bold md:text-4xl md:leading-11 md:max-w-md md:mx-auto lg:ml-0">{product.name}</h1>
                <p className="text-black opacity-50 mt-2 mb-12">{product.description}</p>
                <p className="font-bold text-md">{currencyFormat(product.price)}</p>
              </ImageTextPair>
            </div>
          </section>
          <section className="overflow-hidden my-8 md:my-12 lg:my-20">
            <div className="container mx-auto px-5 lg:px-0">
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="w-full lg:w-2/3 align-top md:my-8 lg:pr-16">
                  <h2 className="text-black text-lg md:text-2xl uppercase font-bold my-4 md:leading-9">Features</h2>
                  {processToParagraphs(product.features, "text-black opacity-50 my-4")}
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col lg:w-1/3 align-top md:my-8">
                  <h2 className="text-black text-lg md:text-2xl md:w-1/2 lg:w-auto uppercase font-bold my-4 md:leading-9">In the box</h2>
                  {product.includes && <ul className="list-none md:w-1/2 lg:w-auto">{included}</ul>}
                </div>
              </div>
            </div>
          </section>
          <section className="overflow-hidden my-8 md:my-12 lg:my-20">
            <div className="container mx-auto px-5 lg:px-0">
              <Gallery imageGallery={product.gallery} />
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Product;