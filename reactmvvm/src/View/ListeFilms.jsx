import React, { Fragment } from 'react';

const ListeFilms = (props) => {

    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.retirerFilm(e.target.parentNode.firstChild.textContent);
    };
    return (
        <Fragment>
            <h3> Formulaire de nouveau film</h3>
            <form onSubmit={props.ajouterFilm}>
                <div>
                    <label htmlFor='titre'></label>
                    <input id="titre"
                        type="text"
                        name="titre"
                        placeholder='entrer titre du film' />
                </div>
                <button type="submit">Ajouter</button>
            </form>

            <h3> Liste des films</h3>
            {props.ListeFilms && props.ListeFilms.map((film, index) => {
                return <li key={index}>
                    <div>
                        <span>{film}</span>
                        <button onClick={handleDelete}>Supprimer</button>
                    </div>

                </li>
            })}
        </Fragment>
    )
}

export default ListeFilms