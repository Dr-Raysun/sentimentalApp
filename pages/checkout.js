import Image from "next/image";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import Currency from "react-currency-formatter";
import Recommend from "../components/Recommend";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  //getting all the items in the user basket
  const productPick = [...items];
  console.log("showing product");
  console.log(productPick);
  // picking only the name of the product and putting it in a new array
  const pick = productPick.map((element, index) => element?.title);
  console.log("showing pick");
  console.log(pick);

  return (
    <div className="border-4 border-green-900 bg-gray-100">
      <Header />
      <main className=" border-4 border-blue-700 lg:flex max-w-screen-xl mx-auto">
        {/** left hand section */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://bit.ly/3kfRLjc"
            alt="checkout_banner"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white ">
            <h1 className="text-3xl font-semibold border-b-2 pb-4 mb-8">
              {items.length == 0
                ? "Your basket is empty "
                : "shoopping basket "}
            </h1>
            {items.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                price={item.price}
                rating={item.rating}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
          {/** recommendation  */}
          <div className="">
            <h3>building for recommendation </h3>
            <div className="">
              <h1 className="text-3xl font-semibold border-b-2 pb-4 mb-8 ">
                Frequently bought together
              </h1>
            </div>
            <Recommend pick={pick} />
          </div>
        </div>

        {/** righ hand section  */}
        <div className="border-4 border-gray-900 flex flex-col m-5 p-10 bg-white">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="NGN" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-400 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? `Sign In to checkout` : `Proceed to checkout`}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
