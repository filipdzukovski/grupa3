import React,{useState,useEffect} from 'react';
// import {Movies} from './Movies';
// import {ClassComponent} from './ClassComponent';

// const listOfMovies= [
//     {name:"Back To The Future",date: 1985,genre:"Sci-Fi,Comedy",plot:'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',imdbLink:'https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0',imgUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Back_to_the_Future_Part_II.jpg/220px-Back_to_the_Future_Part_II.jpg'},
//     {name:"The Dark Knight",date:2008,genre:'Crime,Action',plot:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',imdbLink:'https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0',imgUrl:'https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg'},
//     {name:'Pulp Fiction',date:1994,genre:'Crime,Drama',plot:'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',imdbLink:'https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0',imgUrl:'https://www.miramax.com/assets/Pulp-Fiction1.png'}
// ]

export function App(){
    const [promenliva1,setPromenliva1] = useState("Vrednost 1"); //[imetoNaPromenlivata,f-ja zadolzena za nejzina promena]
    const [inputVrednost,setInputVrednost] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        console.log("Username: " + username);
        console.log(`Password: ${password}`)
    },[username,password]) //[]<-dependency array if [] is empty then componentDidMount else componentDidUpdate

    function handleInputChange(event){
      setInputVrednost(event.target.value)
    }

    return(
        <div id="app">
            <h2>Some Content</h2>
            <p>{promenliva1}</p>
            <button onClick={()=>{setPromenliva1("Novata Vrednost")}}>Click Me for Change</button>
         <hr/>
           <br/>
           <br/>
            <input
                type="text"
                placeholder='Enter Something Here'
                value={inputVrednost}
                onChange={handleInputChange}
            />
            <p>{inputVrednost}</p>

            <br/>
            <br/>
            <input 
                type="text"
                placeholder='Enter Username'
                value={username}
                onChange={(event)=>{setUsername(event.target.value)}}
            />
            <br/>
            <br/>
            <input
                type="password"
                placeholder='Enter Password'
                value={password} //ovde se povrzuva vrednosta na state promenlivata so input field-ot
                onChange={(e)=>{setPassword(e.target.value)}} //se dava f-ja koja ja pravi promenata (od event klik na tastatura do promena na state vrednosta)
            />
            <p>Username: {username}</p>
            <p>Password: {password}</p>
            <hr/>
            <p>Counter: {counter}</p>
            <img src={'https://www.miramax.com/assets/Pulp-Fiction1.png'}
             alt="slika"
             onClick={()=>{setCounter(counter + 1)}}
             />
            {/* <Movies filmovi={listOfMovies}/> */}
            {/* <hr/> */}
            {/* <ClassComponent/> */}
        </div>
    )
}