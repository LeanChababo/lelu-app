import logo from './logo.svg';
import './App.css';
import Title from './components/text/Title';
import Navbar from './components/navbar';

const App = () => {

  const persona = { nombre: "lelu", altura: "1,70"}
  return (

    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hola {persona.nombre} que medis {persona.altura}cm
        </p>
        <Title msj= "Buenas a todos chavales!!" color="pink" />
        <ButtoComponent />
      </header>
    </div>
  );
}

const ButtoComponent = () => {
  return <button>Creacion de la mejor pagina de muebles loko</button>
}
export default App;
