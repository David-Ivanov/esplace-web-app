
const Card = ({ title, desc, gram, image, price, tag }) => {
    return (
        <>
            <img src={image} alt={title} width={100} height={100}/>
            <div>{title}</div>
            <div>{desc}</div>
            <div>{gram}</div>
            <div>{price}</div>
            <div>{tag}</div>
        </>
    )
}

export default Card;