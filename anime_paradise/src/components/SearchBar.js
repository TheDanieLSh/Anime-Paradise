function SearchBar() {
    let searchItem;
    function handleChange(e) {
        searchItem = e.target.value;
    }

    return (
        <form className="searchForm">
            <input type="text" onChange={handleChange} />
            <button type="submit">Поиск</button>
        </form>
    )
}

export default SearchBar;