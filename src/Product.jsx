import"./Product.css"
function Product({title,price, features}){
    let isDiscount = price  > 20000 ;
    let styles = {backgroundColor: isDiscount ? "pink" : ""}
    return(
        <div className="Product" style={styles}>  
            <h3>{title}</h3>
            <h4> Price: {price}</h4>
            {isDiscount&& <p>Discout of 5%</p>}
        </div>
    )
}
export default Product;