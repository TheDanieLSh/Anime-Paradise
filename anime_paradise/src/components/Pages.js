import { useSelector } from "react-redux";

function Pages(props) {
    const products = useSelector(state => state.fetchDataReducer.products);
}
 export default Pages;