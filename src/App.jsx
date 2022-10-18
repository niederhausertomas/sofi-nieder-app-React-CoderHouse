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

function App() {
  return (
/*Chicxs mis recomendaciones para la entrega son:

-Tener las funcionalidades vistas hasta ahora totalmente funcionando, sin errores ni warnings

Una vez tengan lo que vimos andando perfecto, intenten hacer cosas extras que suman mucho

-Hacer el deploy de la app

-Mantener el estado del carrito con el localstorage, asi no se pierde el carrito al recargar la página

-Usar enviroments varaible para el firebase.config

-Permitir editar la cantidad a comprar del producto desde la vista del cart*/


    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes className="container-fluid">
          <Route exact path="/" element={<ItemListContainer productos="productos" />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
          <Route exact path="/category/:categoria" element={<ItemCategoriaContainer />}/>
          <Route exact path="/category/5" element={<AboutUs />}/>
          <Route exact path="/Cart" element={<Cart />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;