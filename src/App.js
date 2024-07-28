// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';

// For React component creating
// const Person = (props) =>{
//   return(
//     <>
//     <h1>Name : {props.name}</h1>
//     <h2>Last Name : {props.lastName}</h2>
//     <h2>Age : {props.age}</h2>
//     </>
//   );
// }

const App = () => {
  // const name = 'Jim';

  // const [state, setState] = useState(initialState)
  const [counter, setCounter] = useState(0);

  // For React 'state'-> components need to remember things
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount)=>prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount)=>prevCount+1)}>+</button>
    </div>
  );


  // For React component creating
  // return (
  //   <div className="App">
  //  <Person name={'Jim'} lastName={'Chiuhuang'} age={27}/>
  //  <Person name='Jed' lastName={'Chen'} age={27}/>
  //   </div>
  // );

  // For react rendor condition
  // return (
  //   <div className="App">
  //    {name? (
  //    <><h1>Hello, I'm {name}.</h1></>
  //    )
  //    :(<>
  //    <h1>wow</h1>
  //   <h2>there's no name.</h2>
  //    </>)}
  //   </div>
  // );
}

export default App;
