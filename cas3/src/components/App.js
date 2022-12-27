import React from 'react';
import { Users } from './Users';
import {Comments} from './Comments';
import {Cars} from './Cars';

let user1 = {
  ime: "Ivan",
  adresa: "Skopje",
  age: 18
}

let user2 = {
  ime: "Ivana",
  adresa: 'Debar',
  age: 22
}

let showUser = true;

let comments = [
  {id:0,author:'Filip',content:'This is Comment 1'},
  {id:1,author:'Martin',content: 'Second Comment on the way'},
  {id:2,author:'Nikolina',content: 'Finally here'}
];

let registracija = [
  {grad:{naselenoMesto:"Skopje",ulica:"Ul.1"},oznaka:"SK-0000-AB"},
  {grad:{naselenoMesto:"Mavrovo",ulica:"Nema Ulica"},oznaka:"MV-0000-AB"},
  {grad:{naselenoMesto:"Gostivar",ulica:"Ul.3"},oznaka:"GV-0000-AB"}
];

let carList = [
  {brand:"Ford",model:"Fiesta",year:2006, plates:registracija[0]},
  {brand:"Opel",model:"Astra", year:2008, plates:registracija[1]},
  {brand:"Honda",model:"CR-V", year:2012, plates:registracija[2]}
]; 


export function App() {

  return (
    <div id="app">
      <h2 className='nesto'>App</h2>
      <Users
        korisnik1={user1}
        korisnik2={user2}
        prikaziKorisnik={showUser} 
        />
        <hr/>
        <Comments listaOdKomentari={comments} />
        <hr/>
        <Cars listaNaVozila={carList}/>
    </div>
  )
}