import React from 'react';
import { Counter } from '../features/counter/Counter';

import {pokedex} from '../resources/pokedex'

import './App.css';

interface pokemon {
  id: number,
  name: string,
}

function Pokemon ( POKEMON:pokemon ) {
  return (
    <div className='Pokemon'>
      {POKEMON.id}<br/>
      {POKEMON.name}<br/>
      <img src={process.env.PUBLIC_URL + `img/${String(POKEMON.id).padStart(3,'0')}.png`} alt=""/><br/>
    </div>
  )
}

function App() {
  return (
    <>
      <header>
        <h1>
          Header Bit
        </h1>
      </header>
      <body className='Pokedex'>
        {pokedex[0].dex?.map(object => {
          return (
            <>
              {Pokemon(object)}
            </>
          )
        })}
        {pokedex[1].dex?.map(object => {
          return (
            <>
              {Pokemon(object)}
            </>
          )
        })}
        {pokedex[2].dex?.map(object => {
          return (
            <>
              {Pokemon(object)}
            </>
          )
        })}
        {pokedex[3].dex?.map(object => {
          return (
            <>
              {Pokemon(object)}
            </>
          )
        })}
        {pokedex[4].dex?.map(object => {
          return (
            <>
              {Pokemon(object)}
            </>
          )
        })}
        {pokedex[5].dex?.map(object => {
          return (
            <>
              {Pokemon(object)}
            </>
          )
        })}
        {pokedex[6].dex?.map(object => {
          return (
            <>
              {Pokemon(object)}
            </>
          )
        })}
        {pokedex[7].dex?.map(object => {
          return (
            <>
              {Pokemon(object)}
            </>
          )
        })}
      </body>
      <footer>
        Footer Bit
      </footer>
    </>
  );
}

export default App;
