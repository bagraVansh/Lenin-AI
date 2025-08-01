import React, {useContext, useState} from "react";
import {appTheme} from "./Theme.jsx";
import { GoogleGenAI } from "@google/genai";

export default function Form(props) {

    const [text, setText] = useState("");

    const handleInput = (event) => {
        setText(event.target.value);
    }

    const {theme} = useContext(appTheme);

    const styles = {
        formStyle: {
            width: "100%",
            paddingBottom: "50px",
            position: "fixed",
            zIndex: 1,
            bottom: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.bgPrimary,
        },
        inputStyle: {
            width: "80%",
            height: "70px",
            backgroundColor: theme.bgPrimary,
            borderRadius: "5px",
            border: `1px solid ${theme.borderPrimary}`,
            padding: "10px",
            fontSize: "20px",
            color: theme.textPrimary,
            outline: "none",
            ':active, :focus': {
                border: `1px solid ${theme.accentBlue}`,
            },
            '::placeholder': {
                color: theme.textTertiary,
            }
        }
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const query = event.target.query.value;
        props.setMessages(prevMessages => [...prevMessages, { type: "user", query: query}]);
        setText("");

        const ai = new GoogleGenAI({apiKey: "AIzaSyBLxI07x4IQiPtWkiVeQWmAW2tIJu4rXAA"})
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: query,
        });
        props.setMessages(prevMessages => [...prevMessages, { type: "agent", response: response.text}])
    }

    return (
        <form autoComplete='off' style={styles.formStyle} onSubmit={submitHandler}>
            <input value={text}
                   type='text'
                   placeholder='Ask me Anything'
                   style={styles.inputStyle}
                   id='query'
                   name='query'
                   onChange={handleInput}
            />
        </form>
    )
}