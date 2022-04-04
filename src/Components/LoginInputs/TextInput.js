import './LoginInput.css'
import {useState} from "react";

function TextInput(props) {
    const {errorMessage, icon, onChange, ...inputProps} = props;

    const [leaved, setLeave] = useState("false");
    const handleLeave = (e) => {
        setLeave("true")
    };

    return (
        <div className="input-box">
            <i className={icon}/>
            <input type="text" {...inputProps} onChange={onChange} onBlur={handleLeave} leaved={leaved}/>
            <div id="err-msg">{errorMessage}</div>
        </div>
    );
}

export default TextInput;