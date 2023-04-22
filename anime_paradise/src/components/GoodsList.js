import { useState, useEffect } from "react";

function GoodsList(props) {
    const [products, setProducts] = useState(null);
    const goods = props.goods;
    let productCards = [];

    fetch('products.json').then(async response => {
        setProducts(await response.json());
    })
    
    useEffect(() => {
        if (products != null) {
            for (let x = 0; x < products[goods].length; x++) {
                productCards.push(
                    <div className="productCard" key={x}>
                        <div className="productPicture">
                            <img src={products[goods[x].pic]}/></div>
                        <div className="productName">{products[goods[x].name]}</div>
                    </div>
                )
            }

            return (
                <div className="list">
                    {productCards}
                </div>
            );
        }
    }
    )
}

export default GoodsList;