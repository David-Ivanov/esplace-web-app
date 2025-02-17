import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/products/operations";
import { selectProducts } from "../../redux/products/selectors";
import Card from "../Card/Card";


const HomePage = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);


    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    products.map(product => { 
        console.log(product);
    });
    
    return (
    <ul>
        {products.map(product => (
            <li key={product._id}>
                <div>{product.title}</div>
                <Card 
                    title={product.title}
                    desc={product.description}
                    gram={product.gram}
                    price={product.price}
                    tag={product.tag}
                    image={product.image}
                />
            </li>
        ))}
    </ul>);
}

export default HomePage;