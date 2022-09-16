import cart from './cart.module.scss'

function ItemsCart({itemsCart,removeItemsToCart}) {
    return(
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
                <img onClick={()=>removeItemsToCart(item.id)} src="/img/esc.svg" alt="esc" />
            </button>
            </div>
        </div>))}
        </div>
    )
}

export default ItemsCart;