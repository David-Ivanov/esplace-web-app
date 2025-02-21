import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/products/operations";
import { selectProducts } from "../../redux/products/selectors";
import Card from "../Card/Card";


const HomePage = ({setIsProductsInCart}) => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);


    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
    
    return (
    <ul>
        {products.map(product => (
            <li key={product._id}>
                <div>{product.title}</div>
                <Card 
                setIsProductsInCart={setIsProductsInCart}
                    title={product.title}
                    desc={product.description}
                    gram={product.gram}
                    price={product.price}
                    tag={product.tag}
                    image={product.image}
                    id={product._id}
                />
            </li>
        ))}
    </ul>);
}

export default HomePage;