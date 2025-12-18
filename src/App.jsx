import "./App.css"
import Title from "./Title.jsx"
import Product from "./Product.jsx";  
import ProductTab from"./ProductTab.jsx"
import MsgBox from "./msgBox.jsx";


function App() {
  return(
    <>
  <ProductTab/>
  <MsgBox userName="shradha" textColor="yellow"/>
  </>
  );
}

export default App;
