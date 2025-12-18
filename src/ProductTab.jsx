import Product from"./Product.jsx"

function ProductTab(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems:"center"
    }
    return (
  <div style={styles}>
    <Product title="Iphone" idx={0}/>
    <Product title="Ipad" idx={1}/>
    <Product title="Mac" idx={2}/>
    <Product title="Airpods" idx={3}/>
  </div>
);

}
export default ProductTab