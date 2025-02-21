import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { createOrder } from "../../../redux/cart/operations";
import toast from "react-hot-toast";
import { selectCartProducts } from "../../../redux/cart/selectors";

const CartForm = () => {

    const phoneRegExp = /^\+?[1-9]\d{1,14}$/;
    const nameValidation = Yup.string().trim().min(1, "Мінимальна длина імʼя 1 символ").max(60, "Максимальна длина імʼя 60 символів").required("Імʼя обовʼязкове");
    const addressValidation = Yup.string().trim().min(1, "Мінимальна длина адреси 10 символ").max(60, "Максимальна длина адреси 150 символів").required("Адреса обовʼязкове");
    const numberValidation = Yup.string().trim().matches(phoneRegExp, "Телефон недійсний").required("Номер обовʼязковий");
    const commentValidation = Yup.string().trim().max(500, "Максимальна длина коментарю 500 символів");


    const loggedInSchema = Yup.object().shape({
        name: nameValidation,
        address: addressValidation,
        number: numberValidation,
        comment: commentValidation
    });

    const initialValues = {
        name: "",
        address: "",
        number: "+38",
        comment: ""
    }

    const dispatch = useDispatch();
    const products = useSelector(selectCartProducts);

    const submitOrder = (values, {resetForm}) => {
        const submitData = {
            ...values,
            products
        }
        console.log(submitData);
        
        try {
            dispatch(createOrder(submitData));
        } catch (err) {
            console.log(err);
            
            toast.error('Щось пішло не так, спробуйте це раз')
        }
        resetForm();
    }
    
    return(
        <Formik initialValues={initialValues} onSubmit={submitOrder} validationSchema={loggedInSchema}>
            {({isValid}) => {
                
                return(<Form>
                    <label>
                        Імʼя:
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" as="p" />
                    </label>
                    <label>
                        Номер:
                        <Field name="number" type="text" />
                        <ErrorMessage name="number" as="p" />
                        </label>
                    <label>
                        Адреса:
                        <Field name="address" type="text" />
                        <ErrorMessage name="address" as="p" />
                        </label>
                    <label>
                        Коментар:
                        <Field name="comment" type="text" as="textarea" />
                        <ErrorMessage name="comment" as="p" />
                        </label>

                <button type="submit" disabled={!isValid}>
                    Отправить
                </button>
              </Form>);
            }}
        
      </Formik>
    )
}

export default CartForm;