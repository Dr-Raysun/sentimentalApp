import { productsa } from "../pages/index";

import RecommendItemsList from "./RecommendItemsList";

const Recommend = ({ pick }) => {
  console.log("itmes is now this ");
  console.log(productsa);
  console.log("showing pick inside recommend");
  /** pick data below is what the user selected to pay for in the checkout page */
  console.log(pick);
  /** mapping through and checking if each of the output.choose items can be found in what the user pick */
  const xx = output.map((products, i) =>
    products.choose.every((product) => pick.includes(product))
  );
  console.log(`xx is now this ${xx}`);
  //console.log(xx);
  /** end of the above checking map */

  //mapping through to pick only the element index having  Boolean(Truth)  for recommendation purpose
  const onlyTrue = xx.reduce(
    (first, second, idex) => (second ? first.concat(idex) : first),
    []
  );
  console.log(`only found item onlyTrue is now ${onlyTrue}`);

  /** ending of the mapping through above */

  /** picking only the index found in onlyTrue */
  const newProducts = output.filter((newPro, index) =>
    onlyTrue.includes(index)
  );
  console.log("new product is now ");
  console.log(newProducts);
  /** code ending of picking only the index found  */

  /** showing the recommended product of the output below */
  const recomend = newProducts.map((item, i) => item.show);
  console.log("recommendation is now this");
  console.log(recomend);
  /** end of the above recommended product */

  /** looping throught the complete list of product and picking only the recommended product */
  const allRecommendedProduct = [...recomend];
  console.log("showing allRecommendedProduct");
  console.log(allRecommendedProduct);

  const pickNew = allRecommendedProduct.reduce(
    (firstItem, secondItem) => firstItem.concat(secondItem),
    []
  );
  console.log("showing pickNew");
  console.log(pickNew);
  /** end of the looping list of product */

  /** Going through all the list of product and picking only the name of the recommended product for display */
  const newRecommendedProduct = productsa.filter((e) =>
    pickNew.includes(e.title)
  );
  console.log("showing newRecommendedProduct");
  console.log(newRecommendedProduct);
  /** end of the picking  */

  return (
    <div className="flex flex-row ">
      {newRecommendedProduct.map((element, index) => (
        <RecommendItemsList
          key={index}
          id={element.id}
          title={element.title}
          description={element.description}
          category={element.category}
          price={element.price}
          rating={element.rating}
          image={element.image}
          hasPrime={element.hasPrime}
        />
      ))}
    </div>
  );
};

export default Recommend;

const output = [
  { choose: ["Apple", "Bread", "Sugar"], show: ["Yogurt"] },
  { choose: ["Apple", "Bread", "Yogurt"], show: ["Sugar"] },
  { choose: ["Apple", "Corn", "Eggs"], show: ["Sugar"] },
  { choose: ["Apple", "Eggs", "Sugar"], show: ["Corn"] },
  { choose: ["Corn", "Eggs", "Sugar"], show: ["Apple"] },
  { choose: ["Apple", "Eggs", "Milk"], show: ["Yogurt"] },
  { choose: ["Apple", "Eggs", "Yogurt"], show: ["Milk"] },
  { choose: ["Eggs", "Milk", "Yogurt"], show: ["Chocolate"] },
  { choose: ["Apple", "Chocolate", "Unicon"], show: ["Corn"] },
  { choose: ["Apple", "Dill", "Unicon"], show: ["Chocolate"] },
  { choose: ["Apple", "Bean", "Yogurt"], show: ["Unicon"] },
  { choose: ["Apple", "Corn", "Bean"], show: ["Chocolate"] },
  { choose: ["Apple", "Corn", "Unicon"], show: ["Chocolate"] },
  { choose: ["Corn", "Bean", "Unicon"], show: ["Apple"] },
  { choose: ["Apple", "Ice cream", "Unicon"], show: ["Butter"] },
  { choose: ["Corn", "Ice cream", "Unicon"], show: ["Butter"] },
  { choose: ["Chocolate", "Unicon", "Yogurt"], show: ["Apple"] },
  { choose: ["Apple", "Corn", "Yogurt"], show: ["Unicon"] },
  { choose: ["Corn", "Unicon", "Yogurt"], show: ["Apple"] },
  { choose: ["Butter", "Corn", "Unicon"], show: ["Ice cream"] },
  { choose: ["Apple", "Corn", "Sugar"], show: ["Nutmeg"] },
  { choose: ["Corn", "Sugar", "Unicon"], show: ["Onion"] },
  { choose: ["Apple", "Chocolate", "Corn"], show: ["Bean"] },
  { choose: ["Chocolate", "Corn", "Unicon"], show: ["Onion"] },
  { choose: ["Apple", "Corn", "Onion"], show: ["Sugar"] },
  { choose: ["Apple", "Onion", "Sugar"], show: ["Yogurt"] },
  { choose: ["Corn", "Onion", "Sugar"], show: ["Butter"] },
  { choose: ["Apple", "Onion", "Yogurt"], show: ["Sugar"] },
  { choose: ["Apple", "Butter", "Nutmeg"], show: ["Sugar"] },
  { choose: ["Apple", "Ice cream", "Nutmeg"], show: ["Butter"] },
  { choose: ["Apple", "Chocolate", "Ice cream"], show: ["Butter"] },
  { choose: ["Apple", "Ice cream", "Sugar"], show: ["Butter"] },
  { choose: ["Apple", "Butter", "Ice cream"], show: ["Sugar"] },
  { choose: ["Apple", "Butter", "Bean"], show: ["Ice cream"] },
  { choose: ["Apple", "Ice cream", "Bean"], show: ["Butter"] },
  { choose: ["Apple", "Butter", "Sugar"], show: ["Ice cream"] },
  { choose: ["Apple", "Corn", "Nutmeg"], show: ["Sugar"] },
  { choose: ["Apple", "Nutmeg", "Sugar"], show: ["Butter"] },
  { choose: ["Corn", "Nutmeg", "Sugar"], show: ["Butter"] },
  { choose: ["Apple", "Bean", "Sugar"], show: ["Corn"] },
  { choose: ["Corn", "Bean", "Sugar"], show: ["Butter"] },
  { choose: ["Corn", "Dill", "Bean"], show: ["Chocolate"] },
  { choose: ["Apple", "Chocolate", "Bean"], show: ["Corn"] },
  { choose: ["Chocolate", "Corn", "Bean"], show: ["Milk"] },
  { choose: ["Apple", "Corn", "Milk"], show: ["Dill"] },
  { choose: ["Apple", "Milk", "Sugar"], show: ["Dill"] },
  { choose: ["Corn", "Dill", "Sugar"], show: ["Apple"] },
  { choose: ["Apple", "Chocolate", "Dill"], show: ["Milk"] },
  { choose: ["Apple", "Chocolate", "Milk"], show: ["Dill"] },
  { choose: ["Apple", "Dill", "Milk"], show: ["Chocolate"] },
  { choose: ["Chocolate", "Corn", "Sugar"], show: ["Apple"] },
  { choose: ["Chocolate", "Sugar", "Yogurt"], show: ["Apple"] },
  { choose: ["Butter", "Sugar", "Yogurt"], show: ["Apple"] },
  { choose: ["Apple", "Butter", "Corn"], show: ["Sugar"] },
  { choose: ["Bread", "Dill", "Milk"], show: ["Chocolate"] },
  { choose: ["Bread", "Bean", "Nutmeg"], show: ["Yogurt"] },
  { choose: ["Bread", "Bean", "Yogurt"], show: ["Corn"] },
  { choose: ["Bread", "Chocolate", "Bean"], show: ["Yogurt"] },
  { choose: ["Chocolate", "Bean", "Yogurt"], show: ["Corn"] },
  { choose: ["Bread", "Bean", "Sugar"], show: ["Yogurt"] },
  { choose: ["Bread", "Corn", "Yogurt"], show: ["Bean"] },
  { choose: ["Bread", "Corn", "Milk"], show: ["Bean"] },
  { choose: ["Bread", "Bean", "Milk"], show: ["Yogurt"] },
  { choose: ["Bread", "Ice cream", "Nutmeg"], show: ["Sugar"] },
  { choose: ["Bread", "Chocolate", "Nutmeg"], show: ["Yogurt"] },
  { choose: ["Bread", "Butter", "Yogurt"], show: ["Nutmeg"] },
  { choose: ["Bread", "Butter", "Onion"], show: ["Sugar"] },
  { choose: ["Bread", "Nutmeg", "Onion"], show: ["Yogurt"] },
  { choose: ["Nutmeg", "Sugar", "Yogurt"], show: ["Bread"] },
  { choose: ["Nutmeg", "Onion", "Sugar"], show: ["Butter"] },
  { choose: ["Bread", "Onion", "Yogurt"], show: ["Sugar"] },
  { choose: ["Bread", "Corn", "Ice cream"], show: ["Sugar"] },
  { choose: ["Bread", "Corn", "Sugar"], show: ["Ice cream"] },
  { choose: ["Bread", "Chocolate", "Corn"], show: ["Yogurt"] },
  { choose: ["Bread", "Chocolate", "Milk"], show: ["Yogurt"] },
  { choose: ["Bread", "Milk", "Yogurt"], show: ["Chocolate"] },
  { choose: ["Bread", "Butter", "Sugar"], show: ["Ice cream"] },
  { choose: ["Butter", "Onion", "Sugar"], show: ["Nutmeg"] },
  { choose: ["Bread", "Onion", "Sugar"], show: ["Yogurt"] },
  { choose: ["Bread", "Sugar", "Yogurt"], show: ["Onion"] },
  { choose: ["Onion", "Sugar", "Yogurt"], show: ["Bread"] },
  { choose: ["Bread", "Chocolate", "Sugar"], show: ["Yogurt"] },
  { choose: ["Bread", "Butter", "Ice cream"], show: ["Sugar"] },
  { choose: ["Bread", "Ice cream", "Yogurt"], show: ["Sugar"] },
  { choose: ["Ice cream", "Sugar", "Yogurt"], show: ["Bread"] },
  { choose: ["Chocolate", "Dill", "Eggs"], show: ["Milk"] },
  { choose: ["Chocolate", "Eggs", "Milk"], show: ["Yogurt"] },
  { choose: ["Dill", "Eggs", "Milk"], show: ["Chocolate"] },
  { choose: ["Eggs", "Milk", "Unicon"], show: ["Yogurt"] },
  { choose: ["Milk", "Unicon", "Yogurt"], show: ["Eggs"] },
  { choose: ["Eggs", "Onion", "Unicon"], show: ["Yogurt"] },
  { choose: ["Eggs", "Onion", "Yogurt"], show: ["Butter"] },
  { choose: ["Onion", "Unicon", "Yogurt"], show: ["Sugar"] },
  { choose: ["Cheese", "Chocolate", "Eggs"], show: ["Bean"] },
  { choose: ["Cheese", "Eggs", "Bean"], show: ["Chocolate"] },
  { choose: ["Chocolate", "Eggs", "Bean"], show: ["Cheese"] },
  { choose: ["Corn", "Eggs", "Yogurt"], show: ["Bean"] },
  { choose: ["Eggs", "Bean", "Yogurt"], show: ["Corn"] },
  { choose: ["Eggs", "Bean", "Milk"], show: ["Yogurt"] },
  { choose: ["Eggs", "Milk", "Nutmeg"], show: ["Butter"] },
  { choose: ["Butter", "Eggs", "Nutmeg"], show: ["Yogurt"] },
  { choose: ["Butter", "Eggs", "Onion"], show: ["Milk"] },
  { choose: ["Eggs", "Nutmeg", "Onion"], show: ["Butter"] },
  { choose: ["Butter", "Eggs", "Yogurt"], show: ["Onion"] },
  { choose: ["Butter", "Corn", "Eggs"], show: ["Chocolate"] },
  { choose: ["Eggs", "Milk", "Onion"], show: ["Butter"] },
  { choose: ["Chocolate", "Eggs", "Yogurt"], show: ["Milk"] },
  { choose: ["Cheese", "Nutmeg", "Unicon"], show: ["Bean"] },
  { choose: ["Bean", "Nutmeg", "Unicon"], show: ["Chocolate"] },
  { choose: ["Milk", "Nutmeg", "Unicon"], show: ["Bean"] },
  { choose: ["Chocolate", "Nutmeg", "Unicon"], show: ["Bean"] },
  { choose: ["Butter", "Chocolate", "Dill"], show: ["Milk"] },
  { choose: ["Butter", "Chocolate", "Unicon"], show: ["Ice cream"] },
  { choose: ["Butter", "Dill", "Unicon"], show: ["Chocolate"] },
  { choose: ["Cheese", "Onion", "Unicon"], show: ["Chocolate"] },
  { choose: ["Cheese", "Chocolate", "Dill"], show: ["Onion"] },
  { choose: ["Cheese", "Chocolate", "Unicon"], show: ["Bean"] },
  { choose: ["Chocolate", "Ice cream", "Unicon"], show: ["Butter"] },
  { choose: ["Dill", "Ice cream", "Unicon"], show: ["Chocolate"] },
  { choose: ["Milk", "Onion", "Unicon"], show: ["Chocolate"] },
  { choose: ["Chocolate", "Dill", "Unicon"], show: ["Onion"] },
  { choose: ["Chocolate", "Milk", "Unicon"], show: ["Dill"] },
  { choose: ["Chocolate", "Dill", "Onion"], show: ["Milk"] },
  { choose: ["Chocolate", "Onion", "Unicon"], show: ["Dill"] },
  { choose: ["Dill", "Onion", "Unicon"], show: ["Chocolate"] },
  { choose: ["Cheese", "Bean", "Unicon"], show: ["Chocolate"] },
  { choose: ["Cheese", "Sugar", "Unicon"], show: ["Bean"] },
  { choose: ["Bean", "Sugar", "Unicon"], show: ["Cheese"] },
  { choose: ["Cheese", "Ice cream", "Unicon"], show: ["Bean"] },
  { choose: ["Cheese", "Chocolate", "Onion"], show: ["Corn"] },
  { choose: ["Chocolate", "Bean", "Unicon"], show: ["Cheese"] },
  { choose: ["Ice cream", "Onion", "Unicon"], show: ["Chocolate"] },
  { choose: ["Sugar", "Unicon", "Yogurt"], show: ["Onion"] },
  { choose: ["Chocolate", "Onion", "Sugar"], show: ["Milk"] },
  { choose: ["Corn", "Milk", "Unicon"], show: ["Bean"] },
  { choose: ["Butter", "Ice cream", "Unicon"], show: ["Chocolate"] },
  { choose: ["Butter", "Bean", "Unicon"], show: ["Ice cream"] },
  { choose: ["Ice cream", "Bean", "Unicon"], show: ["Butter"] },
  { choose: ["Ice cream", "Milk", "Unicon"], show: ["Chocolate"] },
  { choose: ["Cheese", "Dill", "Nutmeg"], show: ["Onion"] },
  { choose: ["Dill", "Bean", "Nutmeg"], show: ["Cheese"] },
  { choose: ["Cheese", "Dill", "Bean"], show: ["Chocolate"] },
  { choose: ["Cheese", "Bean", "Onion"], show: ["Corn"] },
  { choose: ["Dill", "Bean", "Onion"], show: ["Cheese"] },
  { choose: ["Chocolate", "Corn", "Dill"], show: ["Milk"] },
  { choose: ["Chocolate", "Dill", "Bean"], show: ["Cheese"] },
  { choose: ["Chocolate", "Bean", "Milk"], show: ["Corn"] },
  { choose: ["Dill", "Bean", "Milk"], show: ["Chocolate"] },
  { choose: ["Dill", "Ice cream", "Bean"], show: ["Cheese"] },
  { choose: ["Cheese", "Chocolate", "Bean"], show: ["Ice cream"] },
  { choose: ["Butter", "Dill", "Nutmeg"], show: ["Onion"] },
  { choose: ["Dill", "Nutmeg", "Onion"], show: ["Cheese"] },
  { choose: ["Butter", "Dill", "Milk"], show: ["Chocolate"] },
  { choose: ["Cheese", "Chocolate", "Milk"], show: ["Bean"] },
  { choose: ["Cheese", "Dill", "Milk"], show: ["Chocolate"] },
  { choose: ["Cheese", "Corn", "Dill"], show: ["Onion"] },
  { choose: ["Cheese", "Corn", "Onion"], show: ["Dill"] },
  { choose: ["Cheese", "Dill", "Onion"], show: ["Corn"] },
  { choose: ["Corn", "Dill", "Onion"], show: ["Cheese"] },
  { choose: ["Cheese", "Ice cream", "Onion"], show: ["Nutmeg"] },
  { choose: ["Cheese", "Chocolate", "Ice cream"], show: ["Bean"] },
  { choose: ["Chocolate", "Dill", "Sugar"], show: ["Milk"] },
  { choose: ["Chocolate", "Milk", "Sugar"], show: ["Dill"] },
  { choose: ["Dill", "Milk", "Sugar"], show: ["Chocolate"] },
  { choose: ["Chocolate", "Corn", "Milk"], show: ["Dill"] },
  { choose: ["Corn", "Dill", "Milk"], show: ["Chocolate"] },
  { choose: ["Dill", "Ice cream", "Onion"], show: ["Chocolate"] },
  { choose: ["Dill", "Milk", "Yogurt"], show: ["Chocolate"] },
  { choose: ["Chocolate", "Milk", "Onion"], show: ["Ice cream"] },
  { choose: ["Dill", "Milk", "Onion"], show: ["Chocolate"] },
  { choose: ["Chocolate", "Dill"], show: ["Milk"] },
  { choose: ["Corn", "Bean", "Nutmeg"], show: ["Milk"] },
  { choose: ["Corn", "Milk", "Nutmeg"], show: ["Bean"] },
  { choose: ["Bean", "Milk", "Nutmeg"], show: ["Butter"] },
  { choose: ["Cheese", "Corn", "Nutmeg"], show: ["Sugar"] },
  { choose: ["Cheese", "Corn", "Sugar"], show: ["Bean"] },
  { choose: ["Chocolate", "Nutmeg", "Onion"], show: ["Ice cream"] },
  { choose: ["Corn", "Nutmeg", "Onion"], show: ["Yogurt"] },
  { choose: ["Corn", "Onion", "Yogurt"], show: ["Chocolate"] },
  { choose: ["Nutmeg", "Onion", "Yogurt"], show: ["Butter"] },
  { choose: ["Milk", "Nutmeg", "Yogurt"], show: ["Bean"] },
  { choose: ["Butter", "Milk", "Onion"], show: ["Nutmeg"] },
  { choose: ["Milk", "Nutmeg", "Onion"], show: ["Butter"] },
  { choose: ["Butter", "Milk", "Nutmeg"], show: ["Bean"] },
  { choose: ["Cheese", "Chocolate", "Nutmeg"], show: ["Ice cream"] },
  { choose: ["Chocolate", "Onion", "Yogurt"], show: ["Butter"] },
  { choose: ["Butter", "Ice cream", "Nutmeg"], show: ["Onion"] },
  { choose: ["Chocolate", "Ice cream", "Nutmeg"], show: ["Onion"] },
  { choose: ["Chocolate", "Ice cream", "Onion"], show: ["Nutmeg"] },
  { choose: ["Ice cream", "Nutmeg", "Onion"], show: ["Butter"] },
  { choose: ["Ice cream", "Nutmeg", "Yogurt"], show: ["Butter"] },
  { choose: ["Ice cream", "Bean", "Sugar"], show: ["Butter"] },
  { choose: ["Cheese", "Bean", "Nutmeg"], show: ["Ice cream"] },
  { choose: ["Cheese", "Ice cream", "Sugar"], show: ["Bean"] },
  { choose: ["Ice cream", "Onion", "Sugar"], show: ["Milk"] },
  { choose: ["Butter", "Nutmeg", "Sugar"], show: ["Ice cream"] },
  { choose: ["Butter", "Ice cream", "Onion"], show: ["Corn"] },
  { choose: ["Bean", "Nutmeg", "Onion"], show: ["Cheese"] },
  { choose: ["Butter", "Cheese", "Nutmeg"], show: ["Bean"] },
  { choose: ["Butter", "Bean", "Yogurt"], show: ["Ice cream"] },
  { choose: ["Butter", "Nutmeg", "Yogurt"], show: ["Bean"] },
  { choose: ["Bean", "Nutmeg", "Yogurt"], show: ["Butter"] },
  { choose: ["Cheese", "Nutmeg", "Yogurt"], show: ["Bean"] },
  { choose: ["Ice cream", "Bean", "Onion"], show: ["Milk"] },
  { choose: ["Butter", "Bean", "Onion"], show: ["Yogurt"] },
  { choose: ["Corn", "Bean", "Onion"], show: ["Cheese"] },
  { choose: ["Milk", "Onion", "Yogurt"], show: ["Chocolate"] },
  { choose: ["Ice cream", "Milk", "Sugar"], show: ["Onion"] },
  { choose: ["Milk", "Onion", "Sugar"], show: ["Ice cream"] },
  { choose: ["Chocolate", "Ice cream", "Milk"], show: ["Onion"] },
  { choose: ["Chocolate", "Corn", "Yogurt"], show: ["Onion"] },
  { choose: ["Cheese", "Chocolate", "Corn"], show: ["Bean"] },
  { choose: ["Chocolate", "Corn", "Ice cream"], show: ["Butter"] },
  { choose: ["Butter", "Chocolate", "Onion"], show: ["Yogurt"] },
  { choose: ["Butter", "Corn", "Onion"], show: ["Ice cream"] },
  { choose: ["Butter", "Corn", "Ice cream"], show: ["Onion"] },
  { choose: ["Corn", "Ice cream", "Onion"], show: ["Butter"] },
  { choose: ["Butter", "Chocolate", "Yogurt"], show: ["Onion"] },
  { choose: ["Butter", "Onion", "Yogurt"], show: ["Chocolate"] },
  { choose: ["Cheese", "Ice cream", "Milk"], show: ["Bean"] },
  { choose: ["Cheese", "Milk", "Sugar"], show: ["Bean"] },
  { choose: ["Cheese", "Bean", "Milk"], show: ["Chocolate"] },
  { choose: ["Cheese", "Ice cream", "Yogurt"], show: ["Bean"] },
  { choose: ["Cheese", "Bean", "Yogurt"], show: ["Ice cream"] },
  { choose: ["Ice cream", "Bean", "Yogurt"], show: ["Cheese"] },
  { choose: ["Cheese", "Corn", "Yogurt"], show: ["Bean"] },
  { choose: ["Butter", "Cheese", "Sugar"], show: ["Ice cream"] },
  { choose: ["Butter", "Cheese", "Bean"], show: ["Ice cream"] },
  { choose: ["Butter", "Chocolate", "Bean"], show: ["Ice cream"] },
  { choose: ["Butter", "Cheese", "Ice cream"], show: ["Bean"] },
  { choose: ["Chocolate", "Bean", "Sugar"], show: ["Cheese"] },
  { choose: ["Chocolate", "Ice cream", "Bean"], show: ["Butter"] },
  { choose: ["Ice cream", "Bean", "Milk"], show: ["Butter"] },
  { choose: ["Corn", "Milk", "Sugar"], show: ["Bean"] },
  { choose: ["Corn", "Milk", "Yogurt"], show: ["Chocolate"] },
  { choose: ["Butter", "Corn", "Milk"], show: ["Bean"] },
  { choose: ["Butter", "Corn", "Sugar"], show: ["Ice cream"] },
  { choose: ["Corn", "Ice cream", "Sugar"], show: ["Butter"] },
  { choose: ["Corn", "Ice cream", "Yogurt"], show: ["Bean"] },
  { choose: ["Butter", "Corn", "Yogurt"], show: ["Bean"] },
  { choose: ["Butter", "Bean", "Sugar"], show: ["Ice cream"] },
  { choose: ["Butter", "Ice cream", "Yogurt"], show: ["Bean"] },
  { choose: ["Ice cream", "Bean"], show: ["Butter"] },
  { choose: ["Butter", "Chocolate", "Sugar"], show: ["Ice cream"] },
  { choose: ["Chocolate", "Ice cream", "Sugar"], show: ["Butter"] },
];
