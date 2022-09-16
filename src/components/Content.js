import Item from "./Item/index";
import React from "react"


function Content({items,addToCart}) {

  const [inputValue, setInputValue] =React.useState("")
  const changeInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const cleanSearch = () => {
    setInputValue("")
    console.log(inputValue)
  }

  return (
    <div  className="Content">
      <div className="titleAndSearch">
        {inputValue ? <h1>Поиск по: "{inputValue}"</h1> : <h1>Все кросcовки</h1>}
        <div className="Search">
          <img className="searchIcon" src="/img/search.svg" alt="search" />
          <input onChange={changeInputValue} value={inputValue} type="text" placeholder="Поиск..."></input>
          {inputValue && <img src="/img/esc.svg" alt="esc" className="ClearSearch" style={{cursor:'pointer'}} onClick={cleanSearch}/>}
        </div>
      </div>
      <div className="WrapperCard">
        {items
          .filter((obj) => obj.description.toLowerCase().includes(inputValue.toLowerCase()))
          .map((obj) => (<Item key={obj.key} imageSrc={obj.imageSrc} description={obj.description} price={obj.price} addToCart={addToCart}/>))
        }
      </div>
    </div>
  );
}

export default Content;