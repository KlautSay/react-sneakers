import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";



function App() {
  
const [items, setItems] = React.useState([])

const object = () => {
  fetch("https://631f8afa22cefb1edc4e1de8.mockapi.io/items")
  .then(res => res.json())
  .then(item => setItems(item))
}

React.useEffect(object,[])

const [itemsCart, setItemsCart] = React.useState([])
const addToCart = (obj) => {
  setItemsCart([...itemsCart,obj]);
}
console.log(itemsCart);
  return (
    <div className="wrapper">
      <Header itemsCart={itemsCart}/>
      <Content items= {items} addToCart={addToCart}/>
    </div>
  );
}

export default App;
