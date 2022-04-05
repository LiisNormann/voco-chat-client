import React from "react";

export const InputBox = (props) => {
    return (
        <div className="message-send-box-wrapper">
            <div className="user-name">
                User123
            </div>
            <div className="input-field">
                <textarea placeholder="Type your message here .." />
            </div>
        </div>
    )
}