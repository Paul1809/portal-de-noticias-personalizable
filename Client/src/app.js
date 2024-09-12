import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Preferencias from './paginas/Preferencias';
import Notificaciones from './paginas/Notificaciones';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import './estilos/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/preferencias" component={Preferencias} />
        <Route path="/notificaciones" component={Notificaciones} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
      </Switch>
    </div>
  );
}

export default App;
