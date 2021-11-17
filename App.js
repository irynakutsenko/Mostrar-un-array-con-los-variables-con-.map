import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';

//Crear una function() que nos tiene que devolver la informavion de una variable
function Mostrar() {
	//Crear un array con los datos (4 coches)
	let cars = [
		{name: "Ford EcoSport", price: "1 116 000 ₽", year: "2017", color: "red"},
		{name: "Ford Tourneo Custom", price: "2 511 000 ₽", year:"2018", color: "brown"},
		{name: "Ford Transit", price: "2 121 000 ₽", year: "2015", color: "blue"},
		{name: "Ford Transit Chassis", price: "1 736 000 ₽", year: "2015", color: "white"}
	];
//Es una variable que devuelve una variable de un array con los datos 
	let datos = cars.map(function(car){
		return (
			<>
			<p>{car.name}</p>
			<p>{car.price}</p>
			<p>{car.year}</p>
			<p>{car.color}</p>
			</>
		)
	})

	return (
	//Siempre poner en el principio <> y </> en el final para devolver en el return()
	<> 
	<p>{datos}</p>
	</>
)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	  < Mostrar />
    </div>
  );
}

export default App;
