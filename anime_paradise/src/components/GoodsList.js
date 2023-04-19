function GoodsList(props) {
    fetch('products.json')
        .then(async (response) => {
            const products = await response.json();
            const goods = props.goods;
            for (let x = 0; x < products[goods].length; x++) {
                return (
                    <div className="list">
                        <div className="productCard">
                            <div className="productPicture"></div>
                            <div className="productName"></div>
                        </div>
                    </div>
                )
            }
        })
}

export default GoodsList;