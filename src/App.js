import React, { useState, useEffect } from "react";

import {Switch, Route, Link, useRouteMatch, useLocation} from "react-router-dom";

import "./styles.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Films} />
        <Route path="/film/:id" component={Film} />
        <Route path="/starship/:id" component={Starship}/>
        <Route path="/planet/:id" component={Planet}/>
      </Switch>
    </>
  );
}

function Films() {
  const [films, setFilms] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchString, setSearchString] = useState(null);
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then(response => response.json())
      .then(res => {setFilms(res.results); setSearchResult(res.results)});
  }, []);

  const handleSubmit = (event) => {

    var results = searchString ?
                  films.filter((item) => {return item.title.includes(searchString)}) :
                  films;
    setSearchResult(results);
    event.preventDefault();
  }

  const handleChange = (event) => {
    setSearchString(event.target.value);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Search:
            <input type="text" value={searchString} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <ul>
        {searchResult.map((film, i) => (
          <li key={i}>
            <Link to={{ pathname: `/film/${i+1}`, state: film }}>{film.title}</Link>
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
      <div>
        <p>
          <b>Planets</b>
        </p>
        <ul>
          {film.planets.map((link, i) => <li key={i}><Link to={`/planet/${link.split('/')[5]}`}>/planet/{link.split('/')[5]}</Link></li>)}
        </ul>
        
      </div>
      </div>) : ''}
    </>
  );
}

const renderItem = (item, itemType) => {
  const related_films = item ? item.films : [];
  return (
    <>
      <h2>{itemType}: {item.name}</h2>
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
      {ship ? renderItem(ship, 'Starship'): ''}
    </>
  )
}

function Planet() {
  let { url } = useRouteMatch();
  let id = url.split('/')[2];

  const [planet, setPlanets] = useState(null);
  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}/`)
      .then(response => response.json())
      .then(res => setPlanets(res));
  }, []);
  
  return (
    <>
      {planet ? renderItem(planet, "Planets"): ''}
    </>
  )
}
