import React from 'react';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <Button variant="contained" color="primary">
    Hello World
    </Button>
    </header>
    
    <nav>
    <p>"Nav bar"</p>
    </nav>
    
    <body>
    <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
    </body>
    
    
    </div>
    );
  }
  
  export default App;
  