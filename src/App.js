import './App.css';
import AboutUs from './components/AboutUs';
import Cards from './components/Cards';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <hr />
      <Carrousel />
      <hr />
      <Cards />
      <hr />
      <AboutUs />
      <hr />
      <Footer />
    </div>
  );
}

export default App;