import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Image from "next/image";

const RecommendItemsList = ({
  title,
  id,
  price,
  description,
  category,
  image,
}) => {
  const dispatch = useDispatch();
  /**adding product to basket line of code */
  const addItemToBasket = () => {
    //item to be added into the basket
    const product = {
      title,
      id,
      price,
      description,
      category,
      image,
    };
    //pushing the item into redus store
    dispatch(addToBasket(product));
  };
  return (
    <div>
      <>
        <div className="" key={id}>
          <Image
            src={image}
            width={200}
            height={200}
            objectFit="contain"
            key={id}
          />
          <p>{title}</p>
          <button onClick={addItemToBasket} className="mt-auto button">
            Add to Basket
          </button>
        </div>
      </>
    </div>
  );
};

export default RecommendItemsList;
