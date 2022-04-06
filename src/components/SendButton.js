import React, { useState } from "react";

export default function SendBtn(props) {
    const [count, setCount] = useState(0);
    const handleCLick = (e) => {
        e.preventDefault();
        setCount( count + 1 );
    }

    return (
        <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleCLick}
        >
            Send
        </button>
    )
}
