import React from "react";

const Login = ({currentUser, cb}) => {
    const [ val, setVal ] = React.useState('');
    const randomish = Math.floor(1000 + Math.random() * 9000);

    const handleChange = (event) => {
        const userValue = event.target.value;
        setVal(userValue)
    }

    const handleLogin = (event) => {
        if ( val === "" ) {
            cb("Guest" + randomish)
        } else {
            cb( val );
        }
    };

    return (
        <div className="login-wrapper">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to my chat!</h1>
                <p className="lead">
                    Please enter your name or just press Login to enter as a Guest!</p>

                <hr className="my-4" />

                <div className="login-field">
                    <input placeholder={"Guest"+ randomish} value={val} onChange={handleChange} />
                </div>
                <div className="btn-group">
                    <button className="btn btn-primary mx-auto" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>

        </div>
    )
};

export default Login;