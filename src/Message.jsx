import React, {useContext} from 'react';
import {appTheme} from "./Theme.jsx";

export default function Message(props) {

    const {theme} = useContext(appTheme);

    const divStyle = {
        width: "fit-content",
        maxWidth: "40%",
        minWidth: "15%",
        backgroundColor: theme.bgSecondary,
        color: theme.textPrimary,
        padding: "15px",
        borderRadius: "5px",
        border: `1px solid ${theme.borderPrimary}`
    }

    const h3Style = {
        color: theme.textPrimary,
        borderBottom: `1px solid ${theme.borderPrimary}`,
        fontSize: "20px",
        paddingBottom: "10px",
    }

    const pStyle = {
        marginTop: "10px",
        fontSize: "20px",
        lineHeight: "1.5",
        color: theme.textSecondary,
    }

    return (
        <div style={divStyle} className="message">
            <h3 style={h3Style}>You</h3>
            <p style={pStyle} className='message-text'>
                {props.message}
            </p>
        </div>
    )
}