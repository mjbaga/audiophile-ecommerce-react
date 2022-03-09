import Button from "components/common/Button";
import CloudImageSet from "components/common/CloudImageSet";


const RelatedProducts = ({ relatedItems }) => {

  console.log(relatedItems);

  return (
    <div className="related-items">
      <h2 className="uppercase text-black text-lg md:text-2xl font-bold my-4 text-center">You may also like</h2>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        {relatedItems.map((item) => (
          <div className="flex flex-col text-center my-4" key={item.slug}>
            <CloudImageSet imageSet={item.image} title={item.name} classes="my-4 rounded-lg overflow-hidden" />
            <h3 className="text-lg uppercase text-black font-bold my-4">{item.name}</h3>
            <Button to={`/products/${item.slug}`} classes="my-4 text-white bg-primary mx-auto hover:bg-secondary">See product</Button>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default RelatedProducts;