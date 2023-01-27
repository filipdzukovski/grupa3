import React from 'react';
import {About} from './About';
import {Home} from './Home';
import {Contact} from './Contact';
import {Routes,Route} from 'react-router-dom';
import {Nav} from './Nav';
import {NotFound} from './NotFound';
import {ChildComponent} from './ChildComponent'; 
// import { Switch } from 'react-router-dom';
import {Users} from './Users';

export function App(){

    return(
        <div id="app">
            <Nav/>
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/contact" element={<Contact/>}>
                    <Route path="us" element={<ChildComponent/>} />
                </Route>
                <Route path='/users' element={<Users/>}/>
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </div>
    )
}

// <Switch>
// <Route path="/home" component={Home}/>
// <Route path="/about" component={About}/> // v5 Router
// <Route path="/contact" component={Contact}/>
// </Switch>