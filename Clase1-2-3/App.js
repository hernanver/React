import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          HOLA MUNDO
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* {Componente de listado de Contactos} */}
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;

