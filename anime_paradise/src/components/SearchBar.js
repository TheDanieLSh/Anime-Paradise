import { useSelector } from "react-redux";
import { useState } from "react";

let searchItem;
let foundItems = [];
let listVisability = false;
function SearchBar() {
    const [inputRerender, doInputRerender] = useState(null);
    const products = useSelector(state => state.fetchDataReducer.products);
    function handleChange(e) {
        searchItem = e.target.value.toLowerCase();
        foundItems = [];
        for (let key of Object.keys(products)) {
            products[key].forEach(good => {
                if (good.name.toLowerCase().includes(searchItem) && searchItem !== "") {
                    foundItems.push(good);
                }
            })
        }
        const resultFrame = document.querySelector('.searchList__inner');
        if ((foundItems.length > 0) && (searchItem.length > 1)) {
            listVisability = true;
            resultFrame.classList.add('searchList__inner_active');
        } else {
            listVisability = false;
            resultFrame.classList.remove('searchList__inner_active');
        }
        doInputRerender(searchItem);
    }
    
    return (
        <div className="searchBar">
            <div className="searchBar__inner">
                <form className="searchForm">
                    <input type="text" onChange={handleChange} />
                    <button type="submit">Поиск</button>
                </form>
                <div className="searchList">
                    <div className="searchList__inner">
                        {listVisability === true && foundItems.map((item, i) => (
                            <div className="searchListItem" key={i}>{item.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;