import React from 'react'
import { useState } from 'react'


/**
 * Composant fonction de type ViewModel
 * Gestion de la liste de films
 * @returns 
 */
const FilmListeViewModel = () => {

    /**
     * Liste de film
     */
    const [films, setFilms] = useState([]);

    const ajouterFilm = (film) => {
        setFilms([...films, film]);
    };

    /**
     * Méthode pour supprimer un film de la liste des films
     * @param {*} film à supprimer 
     */
    const supprimerFilm = (film) => {
        setFilms(films.filter(f => f !== film));
    };

    return { films, ajouterFilm, supprimerFilm }
}

export default FilmListeViewModel;