import style from "./Item.module.scss"
import React from "react"


function Item({imageSrc, description, price, addItemInCart}) {

  const [addCart,setAddCart] = React.useState(false)

  const [follow,setFollow] = React.useState(false)

  const clickToCart = () => {
    addItemInCart({imageSrc, description, price})
    setAddCart(!addCart)
  }

  const clickFollow = () => {
    setFollow(!follow)
  }



  return (
    <div className={style.Item}>
      <img className={style.like} src={follow ? "/img/heardLiked.svg" : "/img/like.svg" } alt="like" onClick={clickFollow} />
      <img src={imageSrc} alt="sneakers" />
      <p>{description}</p>
      <div className={style.cardPrises}>
        <div>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={style.plus} src={addCart ? "/img/btnCheked.svg" : "/img/btnPlus.svg"} onClick={clickToCart}  alt="btnCheked" />
      </div>
    </div>
  );
}

export default Item;
