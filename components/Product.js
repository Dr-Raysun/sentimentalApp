import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useRouter } from "next/router";

const Product = ({ title, id, price, description, category, image }) => {
  const dispatch = useDispatch();
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);
  const [hasPrime] = useState(Math.floor(Math.random() < 0.5));

  const router = useRouter();

  const addItemToBasket = () => {
    const product = {
      title,
      id,
      price,
      description,
      category,
      image,
      hasPrime,
    };
    //sending the prodcut as an action to redux store
    dispatch(addToBasket(product));
  };
  /** adding the name of the product only the user selected and sending to the basket */
  const productName = () => {
    const product = { title, id };
    //sending the product as an action to redux store
  };

  //sending to sentimentpage
  const sendToSentimetPage = ({
    title,
    id,
    price,
    description,
    category,
    image,
    hasPrime,
  }) => {
    alert(`this is it ${title}`);
    const product = {
      title,
      id,
      price,
      description,
      category,
      image,
      hasPrime,
    };
    alert(`this is product${JSON.stringify(product)}`);
    //pushing it to the page
    router.push({
      pathname: "/sentimentPage",
      query: { data: JSON.stringify(product) }, //before pushing it you need to stringify the product
    });
  };

  return (
    <div
      onClick={() =>
        sendToSentimetPage({
          title,
          id,
          price,
          description,
          category,
          image,
          hasPrime,
        })
      }
      className="border-2 border-red-700 mx-2 relative flex flex-col bg-white z-30 p-10 rounded-lg  mt-5"
    >
      <p className="absolute border-2 border-green-700 top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="border-4 border-blue-600 my-3">{title}</h4>

      <div className="flex ">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <StarIcon key={index} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="border-4 border-green-700 text-xs  my-2 line-clamp-3">
        {description}
      </p>
      <div className="">
        <Currency quantity={price} currency="NGN" />
      </div>
      {hasPrime && (
        <>
          <div className="flex items-center space-x-2 -mt-5">
            <img src="https://bit.ly/3prP2qx" alt="PRIME" />
            <p className="text-xs text-gray-500">FREE Next-day delivery</p>
          </div>
        </>
      )}
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
