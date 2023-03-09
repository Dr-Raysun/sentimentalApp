import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="border-4 border-blue-900  grid  grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-56 mx-auto">
      {products
        .slice(0, 4)
        .map(({ title, id, price, description, category, image }) => (
          <>
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          </>
        ))}

      <img
        className=" md:col-span-full"
        src="https://bit.ly/2Zekxt8"
        alt="advar"
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ title, id, price, description, category, image }) => (
            <>
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            </>
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ title, id, price, description, category, image }) => (
          <>
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          </>
        ))}
    </div>
  );
};

export default ProductFeed;
