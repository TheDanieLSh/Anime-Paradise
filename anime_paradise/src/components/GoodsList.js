import { useState, useEffect } from 'react';

function GoodsList(props) {
    const goods = props.goods;
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetch('products.json').then(async response => {
            setProducts(await response.json());
        })
    }, [setProducts])

    return (
        <div className="list">
            {products && products[goods].map((good, i) => (
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