import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function GoodsList(props) {
    const params = useParams();
    
    const goods = returnGoods();
    function returnGoods() {
        if (document.location.pathname == "/") {
            return props.goods
        }
        return params.section
    }

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
                        <Link to={"/" + good.id}><img src={good.pic} alt="ОШИБКА" /></Link>
                    </div>
                    <Link to={"/" + good.id}><p className="productName">{good.name}</p></Link>
                </div>
            ))}
        </div>
    )
}

export default GoodsList;