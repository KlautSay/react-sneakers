import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import axios from 'axios';


function App() {
 
  const [cart, setCart] = React.useState(false)
  const clickCart = () => {
    setCart(!cart)
  }

React.useEffect(() => {
  axios.get("https://631f8afa22cefb1edc4e1de8.mockapi.io/items").then((obj) => setItems(obj.data));
},[])


const [items, setItems] = React.useState([])
const [itemsCart, setItemsCart] = React.useState([])

React.useEffect(() => {
  axios.get("https://631f8afa22cefb1edc4e1de8.mockapi.io/cart").then((obj) => setItemsCart(obj.data));
},[])

const removeItemsToCart = (id) => {
  axios.delete(`https://631f8afa22cefb1edc4e1de8.mockapi.io/cart/${id}`);
  setItemsCart((prev)=> prev.filter(items=>items.id!==id))
}

const addToCart = (obj) => {
  axios.post("https://631f8afa22cefb1edc4e1de8.mockapi.io/cart",obj)
  setItemsCart([...itemsCart,obj])
  setTimeout(()=>{axios.get("https://631f8afa22cefb1edc4e1de8.mockapi.io/cart").then((obj) => setItemsCart(obj.data))},2000)
}
  return (
    <div className="wrapper">
      <Header itemsCart={itemsCart} clickCart={clickCart} cart={cart} removeItemsToCart={removeItemsToCart}/>
      <Content items= {items} addToCart={addToCart} />
    </div>
  );
}

export default App;
