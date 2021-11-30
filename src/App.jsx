import React from 'react';
import './App.css';

function HelloWorld(){
  return (
    <div id="hello"> Hello world </div>
  );
}

// const App = () => <div>This is my component: <HelloWorld/> </div>

class App extends React.Component{

  state = {number:10}

  handleIncrementClick = ()=>{
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrementClick = ()=>{
    this.setState({
      number: this.state.number - 1
    });
  }

  handleResetClick = ()=>{
    this.setState({
      number: 0
    });
  }

  render(){

    return (
      <>
      <h1>number: {this.state.number}</h1>
      <button onClick={this.handleIncrementClick}>Increment</button>
      <button onClick={this.handleDecrementClick}>Decrement</button>
      <button onClick={this.handleResetClick}>Reset</button>

      </>
    );
  }
}


// function App() {
//   return (
//     <div>This is my component: <HelloWorld/> </div>
//   );
// }

export default App;
