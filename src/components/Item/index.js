import style from "./Item.module.scss"
import React from "react"


function Item({imageSrc,description,price,addToCart}) {


  const [follow, setFollow] = React.useState(false)
  const clickFollow = () => {
    setFollow(!follow)
  }

  const [ clickAdd, setClickAdd] = React.useState(false);
  const clickAddCart = () => {
    setClickAdd(!clickAdd);
    addToCart({imageSrc,description,price});
  }

  return (
    <div className={style.Item}>
      <img className={style.like} src={ follow ? "./img/liked.svg" : "./img/unLike.svg"} onClick={clickFollow}  alt="like"  />
      <img src={imageSrc} alt="sneakers" />
      <p>{description}</p>
      <div className={style.cardPrises}>
        <div>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={style.plus} src={ clickAdd ? "./img/btnChecked.svg" : "./img/btnPlus.svg"} onClick={clickAddCart}   alt="btnChecked"/>
      </div>
    </div>
  );
}

export default Item;
