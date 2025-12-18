import Product from"./Product.jsx"

function ProductTab(){
    let options=["hi-tech","durable","fast"];
    // let options2={a:"hi-tech", b:"durable", c:"fast"}
    return (
  <div>
    <Product title="phone" price={30000} features={["hi-tech","durable"]}/>
    {/* <Product title="laptop" price={20000} />
    <Product title="pen" price={10} /> */}
  </div>
);

}
export default ProductTab