import React from 'react';

function Greeting({ firstName }) {
 return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {firstName ? firstName : 'there!'}</h1>
      </header>
    </div>
 );
}

export default Greeting;