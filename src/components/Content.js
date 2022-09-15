import Item from "./Item/index";
import React from "react"


function Content({items,addToCart}) {
  return (
    <div className="Content">
      <div className="titleAndSearch">
        <h1>Все кроссовки</h1>
        <div className="Search">
          <img src="/img/search.svg" alt="search" />
          <input type="text" placeholder="Поиск..."></input>
        </div>
      </div>
      <div className="WrapperCard">
        {items.map((obj) => (<Item imageSrc={obj.imageSrc} description={obj.description} price={obj.price} addToCart={addToCart}/>))}
      </div>
    </div>
  );
}

export default Content;