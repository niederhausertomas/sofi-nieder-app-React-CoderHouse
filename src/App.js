import './App.css';

function App() {
  let imagen = "images/1.jpg";
  let titulo = "🌿JUEGO GERVASONI";
  let descripcion = "♡ Mesita 50x50 ♡Sillones con almohadon de asiento ♡Colores disponibles: .Gris elefante .Gris melange  .Blanco .Crudo .Petroleo .Rosa viejo ♡Almohadones de respaldo 40x40 y 50x50";



  return (
    <div className="container">
      <h1 className='col-md-4 offset-md-2'>Sofi Nieder Deco! </h1>
        <div className='row' >
          <div className='col-md-3 offset-md-2'>
            <img src={imagen} alt={titulo} className="img-fluid" />
          </div>
          <div className='col-md-4'>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>  
          </div>
        </div>
    </div>
  );
}

export default App;
