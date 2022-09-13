import Item from "./Item/index";
import React from "react"


function Content() {

  const [items, setItems] = React.useState([])
  const [itemsCart, setItemsCart] = React.useState([]);
  React.useEffect(() => {fetch ("https://631f8afa22cefb1edc4e1de8.mockapi.io/items")
    .then((res)=>res.json())
    .then((json)=>{setItems(json)})},[])

  const addToCart = (product) => {
    setItemsCart([...itemsCart,product])
  }
  console.log(itemsCart)
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
        {items.map((obj) => (<Item imageSrc={obj.imageSrc} description={obj.description} price={obj.price} addItemInCart={(product)=>addToCart(product)} />))}
      </div>
    </div>
  );
}

export default Content;