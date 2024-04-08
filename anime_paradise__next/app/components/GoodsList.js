'use client'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'next/link';
import { useParams } from 'next/navigation'
import { setValue } from '../redux/searchReducer';
import { useEffect } from 'react';

export default function GoodsList(props) {
    const params = useParams();
    const goods = returnGoods();
    function returnGoods() {
        if (document.location.pathname == "/") {
            return props.goods
        } else if (document.location.pathname.includes('/search/')) {
            return 'search'
        }
        return params.section
    }

    const products = useSelector(state => state.fetchDataReducer.products);

    const firstProduct = params.section_page ? (params.section_page - 1) * 8 : null;
    const lastProduct = firstProduct ? firstProduct + 8 : null;
    let currentPageProducts = [];

    if (goods != 'search') {
        if (products) {
            if (products[goods].length > 8) {
                currentPageProducts = products[goods].slice(firstProduct, lastProduct);
            } else {
                currentPageProducts = products[goods];
            }
        }
    } else {
        if (products) {
            let searchItem = params.search_item.split('_').join(' ');
            for (let key of Object.keys(products)) {
                products[key].forEach(good => {
                    if ((good.name.toLowerCase().includes(searchItem)) && (key != 'novelties') && (key != 'hot')) {
                        currentPageProducts.push(good);
                    }
                })
            }
        }
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setValue(currentPageProducts));
    })

    return (
        <div className="list">
            {products && currentPageProducts.map((good, i) => (
                <div className="productCard" key={i}>
                    <div className="productPicture">
                        <Link href={"/" + "product" + "/" + good.id}><img src={good.pic} alt="ОШИБКА" /></Link>
                    </div>
                    <div className="productNameBlock">
                        <Link href={"/" + "product" + "/" + good.id}><h3 className="productName">{good.name}</h3></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}