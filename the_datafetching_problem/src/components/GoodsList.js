import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/fetchDataReducer";
import { useParams } from "react-router-dom";

function GoodsList(props) {
  const params = useParams();
  const goods = returnGoods();
  function returnGoods() {
    if (document.location.pathname == "/") {
      return props.goods;
    }
    return params.section;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.fetchDataReducer.products);

  return (
    <div className="list">
      {products &&
        products[goods].map((good, i) => (
          <div className="productCard" key={i}>
            <div className="productPicture">
              <img src={good.pic} alt="PIC NOT FOUND" />
            </div>
            <p className="productName">{good.name}</p>
          </div>
        ))}
    </div>
  );
}

export default GoodsList;
