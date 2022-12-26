import React from 'react';
import {Welcome} from './Welcome';
import {Student} from './Student';
import { StudentClass } from './StudentClass';
import {Comments} from './Comments';
import {FruitList} from './FruitList';
import { Example } from './Example';

var name = 'Filip';
var lastName = 'Dzukovski'
var age = 26;
var student = {
  index: 141088,
  name:'Filip',
  college: 'FINKI'
};
var multipleComments = false;
var listaNaOvosje = ['banana','mango','orange'];

export function App(){

  return(
    <div id="app">
      <Welcome ime={name} lastName = {lastName} age={age}/>
      <hr/>
      <Welcome ime={"Slavica"} age={30} />
      <hr/>
      <Student student={student} />
      <hr/>
      <StudentClass student={student}/>
      <hr/>
      <Comments hasComments={true} multipleComments={multipleComments}/>
      <hr/>
      <FruitList listaNaOvosje={listaNaOvosje}/>
      <hr/>
      <Example name={name} lastName={lastName} age={age}/>
    </div>
    
  )
}