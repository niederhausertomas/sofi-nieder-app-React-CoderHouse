import './App.css';
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
      <Footer />
    </div>
  );
}

export default App;