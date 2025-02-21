
import { useDispatch, useSelector } from "react-redux";
import { selectCartProducts } from "../../redux/cart/selectors";
import { addProductToCart } from "../../redux/cart/slice";

const Card = ({ title, desc, gram, image, price, tag, id, setIsProductsInCart }) => {

    const dispatch = useDispatch();

    const productsInCart = useSelector(selectCartProducts);
    const addToCart = () => {
        dispatch(addProductToCart(id));
        setIsProductsInCart(true);
    }
    
    

    return (
        <>
            <img src={image} alt={title} width={100} height={100}/>
            <div>{title}</div>
            <div>{desc}</div>
            <div>{gram}</div>
            <div>{price}</div>
            <div>{tag}</div>

            <button onClick={addToCart}>Додати до корзини</button>
        </>
    )
}

export default Card;