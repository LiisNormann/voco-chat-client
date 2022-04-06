import React from "react";

export const MessageItem = ({ key, text, senderId, timestamp, currentUser }) => {
    const cls = currentUser === senderId ? " my-message" : ""
    return (
        <div key={key} className="message">
            <div className={ "message-content"+ cls }>
                <p className="message-text">{text}</p>
                <span className="message-username">
                    {senderId} • {timestamp}
                </span>
            </div>
        </div>
    )
}