import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";

const Header = ({isCart}) => {

    return(
        <header>
            {isCart ? <Link to="/"><IoMdArrowRoundBack /></Link> : null}
            <h1>esplace</h1>
            {!isCart ? <Link to="/cart"><FiShoppingCart /></Link> : null}
        </header>
    );
}

export default Header;