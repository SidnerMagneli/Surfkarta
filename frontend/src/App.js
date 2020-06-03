import React from 'react';
import './App.css';

// components
import Map from './components/Map'
//import Sidebar from './components/Sidebar'

// bootstrap
import Container from 'react-bootstrap/Container';
 
function App() {

  return (
    <div className="App">
      <Container fluid className="App-container">
        Sidner's fina surfkarta!
        <Map />
      </Container>
    </div>
  );
}

export default App;
