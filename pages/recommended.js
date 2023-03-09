const Recommended = () => {
  const output = [
    { choose: ["Apple", "Bread", "Sugar"], show: ["Yogurt"] },
    { choose: ["Apple", "Bread", "Yogurt"], show: ["Sugar"] },
    { choose: ["Apple", "Bread", "Sugar"], show: ["Yogurt"] },
    { choose: ["Bread", "Sugar", "Apple"], show: ["Yogurt"] },
    { choose: ["Eggs", "Sugar", "Apple"], show: ["Corn"] },
    { choose: ["Apple", "Eggs", "Milk"], show: ["Yogurt"] },
    { choose: ["Apple", "Eggs", "Yogurt"], show: ["Milk"] },
    { choose: ["Eggs", "Milk", "Yogurt"], show: ["Chocolate"] },
    { choose: ["Apple", "Chocolate", "Unicon"], show: ["Corn"] },
  ];
  let pick = ["Apple", "Bread", "Yogurt", "Eggs", "Milk"];
  let categories = [];
  let recommendations = [];

  /** mapping through and checking if each of the output.choose items can be found in what the user pick */
  const xx = output.map((products, i) =>
    products.choose.every((product) => pick.includes(product))
  );
  console.log(`xx is now this ${xx}`);
  //console.log(xx);
  /** end of the above map */

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

  return (
    <div>
      <p>good man </p>
    </div>
  );
};

export default Recommended;

/*editing the recommende list to blend*/
