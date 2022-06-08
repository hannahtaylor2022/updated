import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <nav>
        <a href='/'>Browse</a>
        <a href='/details'>Search</a>
        <a href='/'>Cart</a>
      </nav>
      <Routes>
        <Route path='/' element={<Browse />} />
        <Route path='/:product_id/details' element={<Details />} />
        <Route path='/search' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

function Browse() {

  let [sauces, setSauces] = useState([]);

  const data = {
    "list": [
      {"id": 1, "name": "Hello"},
      {"id": 2, "name": "Hi"}
    ]
  }
  

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`).then((res) => res.json())
    .then((data) => {setSauces(data.abilities)});
  }, [sauces]);

  return (
    <div>
      {sauces.map((sauce) => (
        <p>{sauce.slot}</p>
      ))}
      
    </div>
  )
}

function getList() {
  return fetch(`https://pokeapi.co/api/v2/pokemon/ditto`).then(data => data.json());
}

function Details() {
  return (
    <div>
      <p>Details</p>
    </div>
  )
}

function Search() {
  return (
    <div>
      <p>Search</p>
    </div>
  )
}

function Cart() {
  return (
    <div>
      <p>Cart</p>
    </div>
  )
}

export default App;
