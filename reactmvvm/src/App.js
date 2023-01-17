import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react'
import FilmListeModel from './models/FilmListeModel';
import ListeFilms from './View/ListeFilms';

function App() {
  return (
    <Fragment>
      <h1>REact MVVM</h1>
      <FilmListeModel/>
    </Fragment>
  );
}

export default App;
