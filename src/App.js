import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Heading from './components/Heading';
import MessageList from "./components/MessageList";

function App() {
    return(
        <div className="App">
            <Heading />
                    <form className="chat-wrapper">
                        <MessageList />
                    </form>
        </div>
    )
}

export default App;