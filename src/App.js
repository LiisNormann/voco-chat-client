import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {Container} from "react-bootstrap";
import Heading from './components/Heading';

function App() {
    return(
        <div className="App">
            <Heading />
            <Container className="Chat-window">

            </Container>
        </div>
    )
}

export default App;