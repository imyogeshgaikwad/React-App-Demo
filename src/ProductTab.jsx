import Product from"./Product.jsx"

function ProductTab(){
    let options=["hi-tech","durable","fast"];
    return (
  <div>
    <Product title="phone" price={30000}/>
    <Product title="laptop" price={20000} />
    <Product title="pen" price={10} />
  </div>
);

}
export default ProductTab