import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import CartProvider from "./components/CartContext/CartContext";
import Footer from './components/Footer/Footer';
import ItemCategoriaContainer from "./components/ItemCategoriaContainer/ItemCategoriaContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes className="container-fluid">
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
          <Route exact path="/category/:categoria" element={<ItemCategoriaContainer />}/>
          <Route exact path="/about" element={<AboutUs />}/>
          <Route exact path="/Cart" element={<Cart />}/>
          <Route path={"/checkout"} element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;