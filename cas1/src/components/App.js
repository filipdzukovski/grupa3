import React from 'react';
import {Hello} from './Hello';
import {Goodbye} from './Goodbye';

export function App() {
  return (
    <div id="app">
      <h2>Zdravo</h2>
      <div>
        <p>Sto pravis</p>
        <p>{5+3}</p>
      </div>
      <Hello/>
      <Goodbye/>
    </div>
  )
}

// export default App;