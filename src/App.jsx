import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Carrousel from './components/Carrousel/Carrousel';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <br />
      <hr />
      <Carrousel />
      <hr />
      <ItemListContainer muebles="Muebles, silloncitos, espejos, almohadones y mas. Envios a todo el pais" productos="productos" />
      <hr />
      <AboutUs />
      <hr />
      <Footer />
    </div>
  );
}

export default App;