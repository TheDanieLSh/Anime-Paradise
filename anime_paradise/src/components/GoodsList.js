import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataState, fetchProductsReducer, productsFetchAction } from '../redux/fetchProductsReducer';

function GoodsList(props) {
    const goods = props.goods;
    const dispatch = useDispatch();

    function productsFetch() {
        return (dispatch) => {
            fetch('products.json').then(async response => {
                dispatch(productsFetchAction(await response.json()));
            })
        }
    }
    useEffect(() => {
        dispatch(productsFetch());
    }, [])
    
    const products = useSelector(dataState => dataState.products);

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