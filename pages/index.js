import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import SentimentLogic from "../components/SentimentLogic";

const Home = () => (
  <div className="">
    <Head>
      <title>boye baskets</title>
    </Head>

    {/** Header  */}

    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-xl mx-auto">
        {/** Banner */}
        <Banner />

        {/** productFeed */}
        <ProductFeed products={productsa} />
      </main>
    </div>
    {/*  building the sentimental to the app */}
    <div>
      <div className=" bg-gray-400 h-[100vh] border-4 border-red-500">
        me is good
        <SentimentLogic />
      </div>
    </div>
  </div>
);

export default Home;

/**
 export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products: products,
    },
  };
} */

// data
export const productsa = [
  {
    id: 1,
    title: "Apple",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/apple.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Bread",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/bread.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 3,
    title: "Bean",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/bean.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 4,
    title: "Butter",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/butter.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 5,
    title: "Cheese",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/cheese.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 6,
    title: "Chocolate",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/chocolate.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 7,
    title: "Corn",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/corn.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 8,
    title: "Dill",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/dill.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 9,
    title: "Eggs",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/egg.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 10,
    title: "Ice cream",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/iceCream.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 11,
    title: "Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/milk.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 12,
    title: "Nutmeg",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/nutmeg.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 13,
    title: "Onion",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/onion.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 14,
    title: "Sugar",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/sugar.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 15,
    title: "Unicon",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/unicorn.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 16,
    title: "Yogurt",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/yogurt.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
