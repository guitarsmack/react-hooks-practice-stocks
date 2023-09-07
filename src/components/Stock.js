import React from "react";

function Stock({ stock, editPortfolio }) {

  const { id, price, name, ticker, type } = stock

  function handleClick(){
    editPortfolio(stock)
  }

  return (
    <div>
      <div className="card">
        <div onClick={handleClick} className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
