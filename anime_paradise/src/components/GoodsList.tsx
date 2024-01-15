import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import fetchDataState from "../mobx/fetchDataState";
import searchState from '../mobx/searchState';

interface GLprops {
    goods?: string
}
interface Params {
    section?: string,
    search_item?: string,
    page_number?: string,
}

const GoodsList = observer((props: GLprops) => {
    const params: Params = useParams();

    const goods: string | undefined = returnGoods();
    function returnGoods(): string | undefined {
        if (document.location.pathname == "/") {
            return props.goods
        } else if (document.location.pathname.includes('/search/')) {
            return 'search'
        }
        return params.section
    }

    const products: object | null = fetchDataState.products;

    const firstProduct: number = (Number(params.page_number) - 1) * 8;
    const lastProduct: number = firstProduct + 8;
    let currentPageProducts: object[];

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

    useEffect(() => {
        searchState.setValue(currentPageProducts);
    })

    return (
        <div className="list">
            {products && currentPageProducts.map((good, i) => (
                <div className="productCard" key={i}>
                    <div className="productPicture">
                        <Link to={"/" + "product" + "/" + good.id}><img src={good.pic} alt="ОШИБКА" /></Link>
                    </div>
                    <div className="productNameBlock">
                        <Link to={"/" + "product" + "/" + good.id}><h3 className="productName">{good.name}</h3></Link>
                    </div>
                </div>
            ))}
        </div>
    )
})

export default GoodsList