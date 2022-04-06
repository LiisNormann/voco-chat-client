import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import MessageList from './components/MessageList'
import Heading from './components/Heading'
import {InputBox} from "./components/InputBox";
import Login from "./components/Login";

function App() {
    const [isLogged, setIsLogged] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState(false);
    const [newMessage, setNewMessage] = React.useState('');
    const [messages, setMessages] = React.useState([]);

    const addNewMessage = (  ) => {
        setMessages([
            ...messages,
            {
                senderId: currentUser,
                text: newMessage,
                timestamp: new Date().toLocaleDateString('et-ee')
            }
        ] )
    }


    React.useEffect( () => {
        if (currentUser && currentUser !== "") {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [ currentUser ]);

    React.useEffect( () => {
        console.info('messages got updated: ', messages)
    }, [ messages ]);


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