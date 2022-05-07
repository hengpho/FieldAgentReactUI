import React from "react";

function Button({onClick, label}) {

    return (
        <button className={"name"} onClick={onClick}>
            {label}
        </button>
    )
}


export default Button;