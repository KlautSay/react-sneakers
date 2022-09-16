import cart from "./cart.module.scss";
import React from "react";
import ItemsCart from "./ItemsCart";
import BuyResult from "./BuyResult";
import EmptyCart from "./EmptyCart";

function Cart({clickCart, itemsCart,priceSum,removeItemsToCart}) {

  return (
    <div className={cart.overlay}>
      <div className={cart.drawer}>
        <div className={cart.buy}>
          <div className={cart.titleBuy}>
            <p>Корзина</p>
            <button onClick={clickCart}>
              <img src="/img/esc.svg" alt="esc" />
            </button>
          </div>
        </div> 
        {itemsCart.length > 0 ? <ItemsCart itemsCart={itemsCart} removeItemsToCart={removeItemsToCart}/>
         : <EmptyCart clickCart= {clickCart}/>}
         {itemsCart.length > 0 ? <BuyResult priceSum={priceSum}/> : null }
      </div>;
    </div>
  )
}

export default Cart;