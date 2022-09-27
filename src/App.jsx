import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import CartProvider from "./components/CartContext/CartContext";
import Footer from './components/Footer/Footer';
import ItemCategoriaContainer from "./components/ItemCategoriaContainer/ItemCategoriaContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes className="container-fluid">
          <Route exact path="/" element={<ItemListContainer muebles="Muebles, silloncitos, espejos, almohadones y mas. Envios a todo el pais" productos="productos" />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
          <Route exact path="/category/:categoria" element={<ItemCategoriaContainer />}/>
          <Route exact path="/category/5" element={<AboutUs />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;