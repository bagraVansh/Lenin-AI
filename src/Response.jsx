import React, {useContext} from 'react';
import {appTheme} from "./Theme.jsx";
import {BlockMath, InlineMath} from "react-katex"
import 'katex/dist/katex.min.css'

export default function Response(props) {

    const mathSpliter = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$)/g;
    const message = props.message.split(mathSpliter);

    const {theme} = useContext(appTheme);

    const pStyle = {
        fontSize: "20px",
        borderTop: `1px solid ${theme.borderSecondary}`,
        borderBottom: `1px solid ${theme.borderSecondary}`,
        padding: "20px",
        lineHeight: "1.5",
        color: theme.textSecondary,
    }

    return (
        <div style={pStyle}>
            {message.map((text, index) => {
                if (text.startsWith("$") && text[1] === "$") {
                    return (
                        <BlockMath key={index} math={text.substring(2, text.length - 2)}/>
                    )
                } else if (text.startsWith("$") && text[1] !== "$") {
                    return (
                        <InlineMath style={{}} key={index} math={text.substring(1, text.length - 1)}/>
                    )
                } else {
                    return (
                        <span key={index} className='message-text'>
                            {text}
                        </span>
                    )
                }
            })}
        </div>
    )
}