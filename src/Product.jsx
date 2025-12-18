import"./Product.css"
import Price from "./Price.jsx";


function Product({title, idx}){
    let newPrices = ["20,999","50,999","80,999","99,999"]
    let  oldPrices = ["21,999","51,999","81,999","1,00,999"]
    let description = [["good Battery life","Best Camera Quality"],["curved display","Highly Recommended"],["No.1 in World Ranking","best reviewed devide"],["Sterio experience","Good Build Quality"]]
    return (
        <div className="Product" >  
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}
export default Product;