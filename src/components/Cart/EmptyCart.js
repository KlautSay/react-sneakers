import cart from './cart.module.scss'

function EmptyCart ({clickCart}) {
    return (
        <div className={cart.EmptyCart}>
            <img src="./img/EmptyCart.png" alt="Cart" />
            <h3>
            Корзина пустая
            </h3>
            <p>
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button className={cart.CartBtn} onClick={clickCart}>
                <span>Вернуться назад</span>
            </button>
        </div>
    )
}

export default EmptyCart;
