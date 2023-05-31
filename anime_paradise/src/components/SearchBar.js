import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        const searchList = document.querySelector('.searchList');
        if ((foundItems.length > 0) && (searchItem.length > 1)) {
            listVisability = true;
            searchList.classList.add('searchList_appearance');
        } else {
            listVisability = false;
            searchList.classList.remove('searchList_appearance');
        }
        doInputRerender(searchItem);
    }
    
    return (
        <div className="searchBar_block">
            <div className="searchBar">
                <form className="searchForm">
                    <input type="text" onChange={handleChange} />
                    <button type="submit">Поиск</button>
                </form>
                <div className="searchList_block">
                    <div className="searchList">
                        {listVisability === true && foundItems.map((item, i) => (
                            <Link to={"/" + item.id}><div className="searchListItem" key={i}>{item.name}</div></Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;