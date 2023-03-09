import Image from "next/image";
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/24/solid";

import Currency from "react-currency-formatter";
import { useState } from "react";
import SentimentLogic from "../components/SentimentLogic";
const sentimentPage = () => {
  //receiving the data from viewBio.js component  using router
  const router = useRouter();
  const {
    query: { data },
  } = router;

  //bring the data from string to object

  var dataParse = data ? JSON?.parse(data) : null;

  console.log(dataParse);
  const addItemToBasket = () => {};
  return (
    <div>
      {dataParse && (
        <>
          <div className="border-2 border-red-700 mx-2 relative flex flex-col bg-white z-30 p-10 rounded-lg  mt-5">
            <p className="absolute border-2 border-green-700 top-2 right-2 text-xs italic text-gray-400">
              {dataParse?.category}
            </p>
            <Image
              src={dataParse?.image}
              height={200}
              width={200}
              objectFit="contain"
            />
            <h4 className="border-4 border-blue-600 my-3">
              {dataParse?.title}
            </h4>

            <div className="flex ">
              {Array(dataParse?.rating)
                .fill()
                .map((_, index) => (
                  <StarIcon key={index} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="border-4 border-green-700 text-xs  my-2 line-clamp-3">
              {dataParse?.description}
            </p>
            <div className="">
              <Currency quantity={dataParse?.price} currency="NGN" />
            </div>

            <button onClick={addItemToBasket} className="mt-auto button">
              Add to Basket
            </button>
            <div className="mt-[10px] border-4 rounded-lg">
              <SentimentLogic productTitle={dataParse?.title} />
            </div>
          </div>
        </>
      )}

      {/* showing different users comment of the product  */}
      {!dataParse ? <p>please pick a product</p> : null}
    </div>
  );
};

export default sentimentPage;
