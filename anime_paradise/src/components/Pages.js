import { useSelector } from "react-redux";

function Pages(props) {
    const products = useSelector(state => state.fetchDataReducer.products);
    const currentProduct = products ? products[props.goods] : [];
    const pageLinks = [];

    let numberOfPages = () => {
        if ((currentProduct.length / 8) % 1 == 0) {
            return currentProduct.length / 8
        }
        else return Math.floor((currentProduct.length / 8) + 1)
    }

    for (let x = 1; x < (numberOfPages() + 1); x++) {
        pageLinks.push(x);
    }
    
    return (
        <div className="pageList">
            {pageLinks.map((link, i) => (
                <div className="pageLink" key={i}>{pageLinks[link]}</div>
            ))}
        </div>
    )
}
 export default Pages;