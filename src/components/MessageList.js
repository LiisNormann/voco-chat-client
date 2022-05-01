import React from "react";
import { MessageItem } from "./Messages";


function MessageList(props) {
    return (
        <div id="Chat-Window" className="Chat-window">
            { props.messages.map(
                (msg, idx) => MessageItem({
                    key: idx,
                    currentUser: props.currentUser,
                    ...msg
                })
            )}
        </div>
    )
}

export default MessageList;

