import React from "react";
import Stock from "./Stock";

function StockContainer( { stocks, editPortfolio, filterBy } ) {

  const list = stocks.filter((object) => object.type === filterBy || filterBy === "");

  return (
    <div>
      <h2>Stocks</h2>
      {list.map( stock => (
        <Stock key={stock.id}
        stock={stock}
        editPortfolio={editPortfolio}/>
      ))}
    </div>
  );
}

export default StockContainer;
