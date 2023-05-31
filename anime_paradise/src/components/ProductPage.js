import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

function ProductPage() {
    const products = useSelector(state => state.fetchDataReducer.products);
    const { product_id } = useParams();
    const currentProduct = products ? returnCurrentProduct() : [];
    function returnCurrentProduct() {
        let found;
        for (let product of Object.values(products)) {
            found = product.find(good => good.id === product_id);
            if (found) break
        }
        return found
    }

    return (
        <div className="productPage">
            <img src={currentProduct.pic} alt="ОШИБКА"/>
            <p className="nameHeader">{currentProduct.name}</p>
        </div>
    )
}

export default ProductPage;