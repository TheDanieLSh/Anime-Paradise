import { useSelector } from "react-redux";

function Pages(props) {
    const products = useSelector(state => state.fetchDataReducer.products);
    const currentProduct = (products && props.goods) ? products[props.goods] : [];

    return (
        <div className="pageList">
            {currentProduct.length}
        </div>
    )
}
 export default Pages;