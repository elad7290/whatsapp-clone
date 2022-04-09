import "./Chat.css"
import Message from "../Message/Message";
import {useState} from "react";
function Chat() {
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const sendMessage = (e)=> {
        e.preventDefault();
        console.log("you typed ", input);
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <i className="fa fa-circle-user"/>
                <div className="chat_header_info">
                    <h5>userName</h5>
                </div>
                <div className="chat_header_right">
                    <i className="fa fa-magnifying-glass"/>
                    <i className="fa fa-paperclip"/>
                    <i className="fa fa-ellipsis-vertical"/>
                </div>
            </div>
            <div className="chat_body">
                <Message/>
                <Message/>
                <Message/>
                <Message receiver="receiver"/>
                <Message receiver="receiver"/>
                <Message receiver="receiver"/>
                <Message receiver="receiver"/>
                <Message receiver="receiver"/>
                <Message receiver="receiver"/>
                <Message/>
            </div>
            <div className="chat_footer">
                <form>
                    <input type="text" placeholder="Type a message..." value={input} onChange={handleChange}/>
                    <button type="submit" onClick={sendMessage}>send</button>
                </form>
                <i className="fa fa-microphone"/>
            </div>

        </div>
    )


}
export default Chat;