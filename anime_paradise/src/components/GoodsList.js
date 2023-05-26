import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/fetchDataReducer';
import { useParams } from 'react-router-dom';

function GoodsList(props) {
    const params = useParams();
    const goods = returnGoods();
    function returnGoods() {
        if (document.location.pathname == "/") {
            return props.goods
        }
        return params.section
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    const products = useSelector(state => state.fetchDataReducer.products);

    const firstProduct = (params.page_number - 1) * 8;
    const lastProduct = firstProduct + 8;
    let currentPageProducts;
    if (products) {
        if (products[goods].length > 8) {
            currentPageProducts = products ? products[goods].slice(firstProduct, lastProduct) : [];
        } else {
            currentPageProducts = products[goods];
        }
    }

    return (
        <div className="list">
            {products && currentPageProducts.map((good, i) => (
                <div className="productCard" key={i}>
                    <div className="productPicture">
                        <img src={good.pic} alt="ОШИБКА" />
                    </div>
                    <p className="productName">{good.name}</p>
                </div>
            ))}
        </div>
    )
}

export default GoodsList;