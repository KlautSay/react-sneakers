function Card() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <div className="buy">
          <div className="titleBuy">
            <p>Корзина</p>
            <button>
              <img src="/img/esc.svg" alt="esc" />
            </button>
          </div>
          <div className="itemAll">
            <div className="cartItem">
              <img
                className="imgItem"
                src="/img/sneakers1.jpg"
                alt="sneakers1"
              />
              <div className="itemInfo">
                <p></p>
                <b> руб.</b>
              </div>
              <button>
                <img src="/img/esc.svg" alt="esc" />
              </button>
            </div>
            <div className="cartItem">
              <img
                className="imgItem"
                src="/img/sneakers1.jpg"
                alt="sneakers1"
              />
              <div className="itemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/esc.svg" alt="esc" />
              </button>
            </div>
            <div className="cartItem">
              <img
                className="imgItem"
                src="/img/sneakers1.jpg"
                alt="sneakers1"
              />
              <div className="itemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/esc.svg" alt="esc" />
              </button>
            </div>
            <div className="cartItem">
              <img
                className="imgItem"
                src="/img/sneakers1.jpg"
                alt="sneakers1"
              />
              <div className="itemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/esc.svg" alt="esc" />
              </button>
            </div>
            <div className="cartItem">
              <img
                className="imgItem"
                src="/img/sneakers1.jpg"
                alt="sneakers1"
              />
              <div className="itemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/esc.svg" alt="esc" />
              </button>
            </div>
            <div className="cartItem">
              <img
                className="imgItem"
                src="/img/sneakers1.jpg"
                alt="sneakers1"
              />
              <div className="itemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/esc.svg" alt="esc" />
              </button>
            </div>
          </div>
        </div>
        <div className="resultsBuy">
          <ul>
            <li>
              <span>Итого: </span>
              <div className="dash"></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div className="dash"></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="sendResult">
            <span>Оформить заказ</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;