import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Heading from './components/Heading';
import MessageList from "./components/MessageList";
import {InputBox} from "./components/InputBox";
import Login from "./components/Login";

function App() {
    const [isLogged, setIsLogged] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState(false);

    React.useEffect( () => {
        if (currentUser && currentUser !== "") {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [ currentUser ]);

    return(
        <div className="App">
            <Heading />
            { isLogged ? (
                    <form className="chat-wrapper">
                        <MessageList
                            currentUser={currentUser} />
                        <InputBox
                            currentUser={ currentUser }
                        />
                        <div className="btn-wrapper">
                            <button type="button"
                                    className="btn btn-outline-primary">
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