import React, {useContext} from 'react';
import {appTheme} from "./Theme.jsx";
import Button from "./Button.jsx";

export default function Sidebar(props) {

    const {theme} = useContext(appTheme)

    const styles = {
        divStyle: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "30%",
            height: "100%",
            backgroundColor: `${theme.bgSecondary}`,
            border: `1px solid ${theme.borderPrimary}`,
            zIndex: 100,
            transform: props.sidebar ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.5s ease-in-out",
            overflowY: "hidden",
        },
        ulStyle: {
            listStyle: "none",
            padding: "20px",
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            height: "70%",
        },
        listStyle: {
            width: "100%",
            backgroundColor: theme.bgSecondary,
            color: theme.textPrimary,
            padding: "15px",
            borderRadius: "5px",
            border: `1px solid ${theme.borderPrimary}`,
            cursor: "pointer",
            fontSize: "20px",
        }
    }

    const chats = ["Chat 1", "Chat 2", "Chat 3", "Chat 4", "Chat 5"]

    return (
        <div style={styles.divStyle} className="sidebar">
            <div
                style={{
                    width: "100%",
                    height: "10%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px",
                }}
            >
                <Button
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#FFFFFF">
                            <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/>
                        </svg>
                    }
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: theme.accentBlue,
                        border: "none",
                        cursor: "pointer",
                        outline: "none",
                    }}
                >
                </Button>
                <Button
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="27px"
                            viewBox="0 -960 960 960"
                            width="27px" fill="#FFFFFF"
                        >
                            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                        </svg>
                    }
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: theme.accentBlue,
                        border: "none",
                        cursor: "pointer",
                        outline: "none",
                    }}
                    action={() => props.setSideBar(!props.sidebar)}
                >
                </Button>
            </div>
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "90%",
                }}
            >
                <h1
                    style={{
                        color: theme.textPrimary,
                        borderBottom: `1px solid ${theme.borderPrimary}`,
                        borderTop: `1px solid ${theme.borderPrimary}`,
                        fontSize: "40px",
                        padding: "20px",
                        textAlign: "center",
                        fontWeight: "1",
                    }}
                >Chat History</h1>
                <ul style={styles.ulStyle} className="chatList">
                    {
                        chats.map((chat, index) => {
                            return (
                                <li key={index} style={styles.listStyle} className="chats">{chat}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}