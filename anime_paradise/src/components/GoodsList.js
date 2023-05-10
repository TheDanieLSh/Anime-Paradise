import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataReducer, fetchProducts } from '../redux/fetchDataReducer';

function GoodsList(props) {
    const goods = props.goods;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    
    const products = useSelector((state) => state.fetchDataReducer.products);

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