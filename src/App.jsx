import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListContainer mensaje={"Bienvenido a nuestra tienda!"}/>
    </div>
  );
}

export default App;
