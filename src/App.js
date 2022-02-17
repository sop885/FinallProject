import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/header';
import Acoordion from './components/accordion/a';
import Button from './components/button/load'
function App() {
  return (
    <div className="App">
      <Header></Header>
     <Acoordion />
     {/* <Button /> */}

    </div>
  );
}

export default App;
