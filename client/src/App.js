
import './App.css';
import React,{Fragment} from 'react';



//components
import InputTodo from './components/InputTodo';
import ListTodo  from './components/ListTodo';



function App() {
  return  (
  <Fragment>
    <div  className='container'>
    <InputTodo></InputTodo>
    <ListTodo></ListTodo>
    </div>
  </Fragment>)
  // (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>\


  // );







}

export default App;
