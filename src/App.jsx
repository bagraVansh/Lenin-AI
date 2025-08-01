import React, {useContext, useState} from "react";
import {appTheme} from "./Theme.jsx";
import Form from "./Form.jsx"
import Chatbox from "./Chatbox.jsx";
import Sidebar from "./Sidebar.jsx";
import Button from "./Button.jsx";

export function App() {

    const [messages, setMessages] = useState([])
    const [side, setSide] = useState(false)
    const {theme} = useContext(appTheme)

    const styles = {
        divStyle: {
            width: "100%",
            height: "100%",
            backgroundColor: theme.bgPrimary,
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }
    }

    return (
        <div style={styles.divStyle}>
            <Button className="button"
                action={() => setSide(!side)}
                style={{
                    position: "absolute",
                    top: "50px",
                    left: "50px",
                    width: "50px",
                    height: "50px",
                    backgroundColor: theme.accentBlue,
                    border: "none",
                    cursor: "pointer",
                    outline: "none",
                }}
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFFFFF">
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
                    </svg>
                }
            >
            </Button>
            <Sidebar sidebar={side} setSideBar={setSide}/>
            <Chatbox messages={messages}/>
            <Form messages={messages} setMessages={setMessages}/>
        </div>
    )
}
