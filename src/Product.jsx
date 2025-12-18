import"./Product.css"
function Product({title,price, features}){
    return(
        <div className="Product">  
            <h3>{title}</h3>
            <h4> Price: {price}</h4>
            {price > 20000 && <p>Discout of 5%</p>}
        </div>
    )
}
export default Product;