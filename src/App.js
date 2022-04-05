import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Heading from './components/Heading';
import MessageList from "./components/MessageList";
import {InputBox} from "./components/InputBox";

function App() {
    return(
        <div className="App">
            <Heading />
                    <form className="chat-wrapper">
                        <MessageList />
                        <InputBox />
                    </form>
        </div>
    )
}

export default App;