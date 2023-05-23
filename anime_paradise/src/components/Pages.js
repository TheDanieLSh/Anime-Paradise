import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';

function Pages() {
    const params = useParams();
    const products = useSelector(state => state.fetchDataReducer.products);
    const currentProduct = products ? products[params.section] : [];
    const pageLinks = [];

    let numberOfPages = () => {
        if ((currentProduct.length / 8) % 1 == 0) {
            return currentProduct.length / 8
        }
        else return Math.floor((currentProduct.length / 8) + 1)
    }

    for (let x = 1; x < (numberOfPages() + 1); x++) {
        pageLinks.push(<Link to={`/${params.section}/${x}`} className="pageLink" key={x}>{x}</Link>);
    }
    
    return (
        <div className="pageList">
            {pageLinks}
        </div>
    )
}
 export default Pages;