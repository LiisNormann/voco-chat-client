import React from "react";

export const InputBox = (props) => {
    return (
        <div className="message-send-box-wrapper">
            <div className="user-name">
                { props.currentUser ?? 'unknown user'}
            </div>
            <div className="input-field">
                <textarea maxLength="100" placeholder="Type your message here .." />
            </div>
        </div>
    )
}