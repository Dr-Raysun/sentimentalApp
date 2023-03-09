import Image from "next/image";
import React from "react";
import amazon_logo from "../public/amazon_logo.png";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  ShoppingCartIcon,
  Bars3Icon, // same with menu icon
  MagnifyingGlassIcon, // same with searchicon
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const style = {
  container: ` bg-[silver]  flex bg-silver-200 color-white-900 border-red-800 border-2 `, //bg-[#0F1111]  bg-[#131A22]
  imageDiv: `cursor-pointer `,
  searchInput: `border-black border-2 p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4`,
  searchDiv: `bg-yellow-400 border-blue-900 border-2 hover:bg-yellow-500 hidden sm:flex h-10 rounded-md items-center flex-grow cursor-pointer`,
  searchIcon: ` h-8 p-2 border-black border-2`,
  rightDiv: `border-6 border-green-900 flex items-center text-xs space-x-6 mx-6 whitespace-nowrap`,
  rightBox1: `border-2 border-blue-700 link  font-extrabold md:text-sm`,
  rightBox2: `border-2 border-blue-700 link font-extrabold md:text-sm`,
  rightBox3: `border-2 border-blue-700 link font-extrabold md:text-sm  relative flex items-center `,
  rightBox3paragraph: `hidden md:inline mt-2`,
  rightBox3span: `absolute top-0 right-0 md:right-11 w-4 h-4 bg-yellow-400 text-center rounded-full text-black font-bold`,
  shopIcon: `h-8`,
  bottomContainer: `border-4 border-red-700 bg-[#37475A] text-sm text-white flex items-center space-x-3 p-2 pl-6`,
  pageParagramph1: `link flex items-center`,
  barIconStyle: `h-6 mr-1`,
  pageParagraph2: `link`,
  pageParagraph3: `link  hidden sm:inline-flex`,
  pageParagraph4: `link  hidden md:inline-flex`,
  pageParagraph5: `link  hidden lg:inline-flex`,
};

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      {/** Top nav */}
      <div className={style.container}>
        <div className={style.imageDiv}>
          <Image
            onClick={() => router.push("/")}
            src={amazon_logo}
            width={140}
            height={30}
            objectFit="contain"
            alt="amazon log"
          />
        </div>
        {/** search  */}
        <div className={style.searchDiv}>
          <input
            className={style.searchInput}
            type="text"
            placeholder="Search"
          />
          <MagnifyingGlassIcon className={style.searchIcon} />
        </div>
        {/** Right side  */}
        <div className={style.rightDiv}>
          <div
            onClick={!session ? signIn : signOut}
            className={style.rightBox1}
          >
            <p>{session ? `Hello, ${session.user.name}` : `Sign In`}</p>
            <p>account and list</p>
          </div>
          <div className={style.rightBox2}>
            <p>Returns</p>
            <p>Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className={style.rightBox3}
          >
            <span className={style.rightBox3span}>0{items.length} </span>
            <ShoppingCartIcon className={style.shopIcon} />
            <p className={style.rightBox3paragraph}>Basket</p>
          </div>
        </div>
      </div>

      {/** bottom nav */}
      <div className={style.bottomContainer}>
        <p className={style.pageParagramph1}>
          <Bars3Icon className={style.barIconStyle} />
          All
        </p>
        <p className={style.pageParagraph2}>Prime</p>
        <p className={style.pageParagraph2}>Prime Video</p>
        <p className={style.pageParagraph2}>Today's Deals</p>
        <p className={style.pageParagraph3}>Amazon Business</p>
        <p className={style.pageParagraph3}>Electronics</p>
        <p className={style.pageParagraph4}>Food & Grocery</p>
        <p className={style.pageParagraph4}>Health & Personal Care</p>
        <p className={style.pageParagraph5}>Buy Again</p>
        <p className={style.pageParagraph5}>Shopper Toolkit</p>
      </div>
    </header>
  );
};

export default Header;
