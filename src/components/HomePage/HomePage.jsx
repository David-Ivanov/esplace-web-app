import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/products/operations";
import { selectProducts } from "../../redux/products/selectors";
import { Card } from "@mui/material";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);


    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
    console.log(products);
    
    return (
    <ul>
        {products.map(product => (
            <Card 
            key = {product._id}
            />
        ))}
    </ul>);
}

export default ProductList;