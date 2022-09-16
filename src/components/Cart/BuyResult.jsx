import cart from './cart.module.scss'

function BuyResult ({priceSum}){
    return (
        <div className={cart.resultsBuy}>
          <ul>
            <li>
              <span>Итого: </span>
              <div className={cart.dash}></div>
              {priceSum > 0 ? <b>{priceSum} руб. </b> : null}
            </li>
            <li>
              <span>Налог 5%: </span>
              <div className={cart.dash}></div>
              <b>{Math.round(priceSum*0.05)} руб. </b>
            </li>
          </ul>
          <button className={cart.CartBtn}>
            <span>Оформить заказ</span>
          </button>
        </div>
    )
}


export default BuyResult;