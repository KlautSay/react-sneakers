import Item from "./Item";

const itemInfo = [
            {
                imageSrc: "img/sneakers1.jpg",
                description: "Мужские Кроссовки Nike Blazer Mid Suede",
                price: "12 999"
            },
            {
                imageSrc: "img/sneakers2.jpg",
                description: "Мужские Кроссовки Nike Air Max 270",
                price: "12 999"
            },
            {
                imageSrc: "img/sneakers3.jpg",
                description: "Мужские Кроссовки Nike Blazer Mid Suede",
                price: "8 499"
            },
            {
                imageSrc: "img/sneakers4.jpg",
                description: "Кроссовки Puma X Aka Boku Future Rider",
                price: "8 999"
            },
            {
                imageSrc: "img/sneakers5.jpg",
                description: "Мужские Кроссовки Under Armour Curry 8",
                price: "15 199"
            },
            {
                imageSrc: "img/sneakers6.jpg",
                description: "Мужские Кроссовки Nike Kyrie 7",
                price: "11 299"
            },
        ];
function Content() {
  return (
    <div className="Content">
      <div className="titleAndSearch">
        <h1>Все кроссовки</h1>
        <div className="Search">
          <img src="/img/search.svg" alt="search" />
          <input type="text" placeholder="Поиск..."></input>
        </div>
      </div>
      <div className="WrapperCard">
        {itemInfo.map((obj) => (<Item imageSrc={obj.imageSrc} description={obj.description} price={obj.price} obj={obj}/>))}
      </div>
    </div>
  );
}

export default Content;