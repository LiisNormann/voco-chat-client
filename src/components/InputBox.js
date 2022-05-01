import React, {useEffect, useState} from "react";


export const InputBox = (props) => {
    const [messageValue, setMessageValue] = React.useState('');

    const handleChange = (event) => {
        if (event.target.value ) {
            setMessageValue( event.target.value );
        }
    };

    useEffect( () => {
        props.cb( messageValue );
    }, [messageValue]);

    return (
        <div className="message-send-box-wrapper">
            <div className="user-name">
                { props.currentUser ?? 'unknown user'}
            </div>
            <div className="input-field">
                <textarea maxLength="200" placeholder="Type your message here .."
                          value={props.currentMessage}
                          onChange={handleChange}
                />
            </div>

        </div>
    )
}