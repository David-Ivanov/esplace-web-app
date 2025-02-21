import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";
import { selectCartProducts } from "../../redux/cart/selectors";
import { useEffect } from "react";
import CartForm from "./CartForm/CartForm";


const Cart = ({isProductsInCart, setIsProductsInCart}) => {
    const allProducts = useSelector(selectProducts);
    const cart = useSelector(selectCartProducts);

    useEffect(() => {        
        if(cart.length === 0) {
            setIsProductsInCart(false);
        }
    }, [cart, setIsProductsInCart])

    if (isProductsInCart) {

    return(
        <div className="">
        <ul>
        {cart.map(product => {
            const productData =  allProducts.find(item => item._id === product.productId);
            
                return (
                    <li className="" key={productData._id}>
                        <img src={productData.image} alt={productData.title} width={100} height={100}/>
                        <div>{productData.title}</div>
                        <div>{productData.desc}</div>
                        <div>{productData.gram}</div>
                        <div>{productData.price}</div>
                        <div>{productData.tag}</div>
                    </li>
                    );


            })}
            </ul>
        <CartForm />
            </div>
    );
    } else {
        return(
            <div className="">Тут будуть ваші замовлення ☺️</div>
        );
    }
}

export default Cart;