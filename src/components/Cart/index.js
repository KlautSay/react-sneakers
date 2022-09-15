import cart from "./cart.module.scss";
import React from "react";

function Cart({clickCart, itemsCart,priceSum}) {

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
        <div className={cart.buyItem}>
          {itemsCart.map(item => (
            <div className={cart.itemAll}>
              <div className={cart.cartItem}>
                <img
                  className={cart.imgItem}
                  src={item.imageSrc}
                  alt="sneakers"
                />
                <div className={cart.itemInfo}>
                  <p>{item.description}</p>
                  <b>{item.price} руб.</b>
                </div>
                <button>
                  <img src="/img/esc.svg" alt="esc" />
                </button>
              </div>
            </div>))}
        </div>
        <div className={cart.resultsBuy}>
          <ul>
            <li>
              <span>Итого: </span>
              <div className={cart.dash}></div>
              <b>{priceSum} руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div className={cart.dash}></div>
              <b>{Math.round(priceSum*0.05)} руб. </b>
            </li>
          </ul>
          <button className={cart.sendResult}>
            <span>Оформить заказ</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart;