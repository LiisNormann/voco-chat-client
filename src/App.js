import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import MessageList from './components/MessageList'
import Heading from './components/Heading'
import {InputBox} from "./components/InputBox";
import Login from "./components/Login";

//global websocket connection, connects when instantiated
const ws = new WebSocket('ws://localhost:8000/');

function App() {
    const [isLogged, setIsLogged] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState(false);
    const [newMessage, setNewMessage] = React.useState('');
    const [messages, setMessages] = React.useState([]);

    ws.onopen = function() {
        console.log('WebSocket Client Connected');
    };

    //handling received messages
    ws.onmessage = function(e) {
        //data comes in as a json string
        let msgs = JSON.parse(e.data);
        let incoming = [];

        //for each incoming message, do ..
        for(let index in msgs) {
            let message = msgs[index];
            let msg = '';
            let sender = '';
            let date = null;

            switch(message.action) {
                case 'disconnect':
                    msg = 'Somebody went bye-bye...';
                    sender = 'Server';
                    date = new Date(message.created);
                    break;
                case 'login':
                    msg = 'Say hello to my little friend... ' + message.user;
                    sender = 'Server';
                    date = new Date(message.created);
                    break;
                case 'message':
                    sender = message.user;
                    msg = message.message;
                    date = new Date(message.created);
                    break;
                default:
                    break;
            }

            incoming.push({
                senderId: sender,
                text: msg,
                timestamp: date.toLocaleDateString('et-ee') + ' - ' + date.toLocaleTimeString('et-ee')
            });
        }

        setMessages([
            ...messages,
            ...incoming
        ])
    };

    const addNewMessage = (  ) => {
        ws.send(JSON.stringify({user: currentUser, action: 'message', message: newMessage}));
    }

    React.useEffect(() => {
        if(isLogged)
            ws.send(JSON.stringify({user: currentUser, action: 'login'}));
    }, [isLogged]);

    React.useEffect(() => {
        if (currentUser && currentUser !== "") {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [ currentUser ]);

    React.useEffect(() => {
        var msgs = document.getElementsByClassName('message');
        var height = 0;
        for(var index in msgs) {
            var h = msgs[index].clientHeight;
            if(h) {
                height += h;
            }
        }
        var chat = document.getElementById("Chat-Window");
        if(chat) {
            if(height < 670) {
                height = 670;
            }

            chat.style.height = height + 'px';
            chat.scrollTop = chat.scrollHeight;
        }
    }, [messages]);

    return(
        <div className="App">
            <Heading />
            { isLogged ? (
                    <form className="chat-wrapper">
                        <MessageList
                            messages={messages}
                            currentUser={currentUser}
                        />
                        <InputBox
                            currentUser={ currentUser }
                            currentMessage={ newMessage }
                            cb={ setNewMessage }
                        />
                        <div className="btn-wrapper">
                            <button type="button"
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        addNewMessage();
                                        setNewMessage('');
                                    }}>
                                Send
                            </button>
                        </div>
                    </form>
                )
                : (
                    <Login currentUser={currentUser} cb={ setCurrentUser } />
                )
            }
        </div>
    )
}

export default App;