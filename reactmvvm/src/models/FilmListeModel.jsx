import React, { Fragment } from 'react'
import FilmListeViewModel from '../viewModel/FilmListeViewModel';
import ListeFilms from '../View/ListeFilms';

const FilmListeModel = () => {

    /**
     * Injection de la logique via notre ViewModel
     */
    const ViewModel = FilmListeViewModel();

    /**
     * Methode pour ajouter un film à la liste des films
     * @param {*} film 
     */
    const rajouterFilm = (film) => {
        film.preventDefault();
        ViewModel.ajouterFilm(film.target.titre.value);
        film.target.titre.value = "";
    }

    return (
        <Fragment>
            <h3>ma liste de films</h3>
            <ListeFilms
                ListeFilms={ViewModel.films}
                retirerFilm={ViewModel.supprimerFilm}
                ajouterFilm={rajouterFilm} />
        </Fragment>
    )
}

export default FilmListeModel