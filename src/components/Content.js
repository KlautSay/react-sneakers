import Item from "./Item";

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
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default Content;
