import Header from "./components/Header";
import Home from "./components/Home";
import {CartContextProvider} from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Home/>
    </CartContextProvider>
   
  );
}

export default App;
