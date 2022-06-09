// import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import React, {useEffect, useState} from 'react';

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

  useEffect(() => {
    fetch('/api/test')
            .then(response => response.text())
            .then((data) => {setSauces(data)});
  }, [sauces]);

  console.log(sauces);
  return (
    <div>
      <p>{sauces}</p>
    </div>
  )
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