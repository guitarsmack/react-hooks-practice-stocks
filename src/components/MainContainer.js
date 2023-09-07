import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks,setStocks] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(resp => resp.json())
    .then(data => setStocks(data))
  }, [])

  const [portfolio,setPortfolio] = useState([])

  function editPortfolio(stock){
    if(!(portfolio.includes(stock))){
      setPortfolio((portfolio) => [...portfolio,stock])
    }else if(portfolio.includes(stock)){
      setPortfolio((portfolio) => portfolio.filter(object =>{
        if(object.id !== stock.id){
          return object
        }
      }))
    }
  }

  function sortOrder(value) {
    if (value === "Alphabetically") {
      // Create a new array with sorted stocks
      const sortedStocks = [...stocks].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
  
      // Update the state with the sorted array
      setStocks(sortedStocks);
    }else if(value === "Price"){
      const sortedStocks = [...stocks].sort((a,b) => a.price - b.price)
      setStocks(sortedStocks)
    }
  }
  
  function handleFilter(filter){
    setFilterBy(filter)
  }
  const [filterBy,setFilterBy] = useState("")
  
  

  return (
    <div>
      <SearchBar handleFilter={handleFilter} sortOrder={sortOrder} />
      <div className="row">
        <div className="col-8">
          <StockContainer filterBy={filterBy} editPortfolio={editPortfolio} stocks={stocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer editPortfolio={editPortfolio} portfolio={portfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
