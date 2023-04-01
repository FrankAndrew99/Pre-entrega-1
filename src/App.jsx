import React from 'react';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido!"}/>
    </div>
  );
}

export default App;