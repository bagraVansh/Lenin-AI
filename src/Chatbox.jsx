import React, {useContext, useState, useEffect} from 'react';
import Message from "./Message.jsx";
import Response from "./Response.jsx";
import {appTheme} from "./Theme.jsx";

export default function Chatbox(props) {

    const [display, setDisplay] = useState('block')
    const {theme} = useContext(appTheme)

    useEffect(() => {
        if (props.messages.length > 0) {
            setDisplay('none')
        } else {
            setDisplay('block')
        }
    }, [props.messages])

    const divStyle = {
        width: "80%",
        height: "85%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        overflowY: "auto",
        padding: "50px",
        position: "fixed",
        justifyContent: display === 'block' ? 'center' : 'flex-start',
        top: "50px",
    }

    return (
        <div style={divStyle} className="chatbox">
            <h1
                style={{
                  textAlign: "center",
                  color:  theme.textSecondary,
                    fontWeight: "1",
                    fontSize: "50px",
                    display: display,
                }}
            >
                Welcome To Lenin AI
            </h1>
            {props.messages.map((message, index) => {
                if (message.type === "user") {
                    return (
                        <Message key={index} message={message.query}/>
                    )
                } else {
                    return (
                        <Response key={index} message={message.response}/>
                    )
                }
            })}
        </div>
    )
}