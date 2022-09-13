import card from "./card.module.scss";
import React from "react";

function Card(props) {


  return (
    <div className={card.overlay}>
      <div className={card.drawer}>
        <div className={card.buy}>
          <div className={card.titleBuy}>
            <p>Корзина</p>
            <button onClick={props.escCart}>
              <img src="/img/esc.svg" alt="esc" />
            </button>
          </div>
          <div className={card.itemAll}>
            <div className={card.cartItem}>
              <img
                className={card.imgItem}
                src="/img/sneakers1.jpg"
                alt="sneakers1"
              />
              <div className={card.itemInfo}>
                <p></p>
                <b> руб.</b>
              </div>
              <button>
                <img src="/img/esc.svg" alt="esc" />
              </button>
            </div>
          </div>
        </div>
        <div className={card.resultsBuy}>
          <ul>
            <li>
              <span>Итого: </span>
              <div className={card.dash}></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div className={card.dash}></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className={card.sendResult}>
            <span>Оформить заказ</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;