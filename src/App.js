import React, { useState, useEffect } from "react";

import {Switch, Route, Link, useRouteMatch} from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
      <Switch>
        <Route exact path="/" component={Films} />
        <Route path="/film/:id" component={Film} />
        <Route path="/starship/:id" component={Starship}/>
      </Switch>
  );
}

function Films() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then(response => response.json())
      .then(res => setFilms(res.results));
  }, []);

  return (
    <div>
      <ul>
        {films.map((film, i) => (
          <li key={i}>
            <Link to={{ pathname: `/film/${i}`, state: film }}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Film() {
  let { url } = useRouteMatch();
  let id = url.split('/')[2];
  const [film, setFilm] = useState(null);
  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}/`)
      .then(response => response.json())
      .then(res => setFilm(res));
  }, []);
  return (
    <>
      {film ? (
        <div>
      <h3>{film.title}</h3>
      <div>{film.opening_crawl}</div>
      <div>
        <p>
          <b>Starships</b>
        </p>
        <ul>
          {film.starships.map((link, i) => <li key={i}><Link to={`/starship/${link.split('/')[5]}`}>/starship/{link.split('/')[5]}</Link></li>)}
        </ul>
        
      </div>
      </div>) : ''}
    </>
  );
}

const renderShip = (ship) => {
  const related_films = ship ? ship.films : [];
  return (
    <>
      <h2>{ship.name}</h2>
      <div>
        Films:
        <ul>
          {related_films.map((link, i) => <li key={i}><Link to={`/film/${link.split('/')[5]}`}>{`/films/${link.split('/')[5]}`}</Link></li>)}
        </ul>
      </div>
  </>
  )
}

function Starship() {
  let { url } = useRouteMatch();
  let id = url.split('/')[2];

  const [ship, setShip] = useState(null);
  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id}/`)
      .then(response => response.json())
      .then(res => setShip(res));
  }, []);
  
  return (
    <>
      {ship ? renderShip(ship): ''}
    </>
  )
}
