import "./Chat.css"
import Message from "../Message/Message";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import GetNicknameById from "../../../Server/GetNicknameById";
import GetMessages from "../../../Server/GetMessages";
import AddNewMessage from "../../../Server/AddNewMessage";

function Chat(props) {
    const{user}=props;

    const [input, setInput] = useState("");
    /* probably need also for image*/
    const [chatName,setChatName]=useState("");
    const [messages,setMessages]=useState([]);
    const {chatId}=useParams();

    useEffect(()=>{
        if(chatId){
            /* probably need also for image*/
            setChatName(GetNicknameById(chatId));
            setMessages(GetMessages(user,chatId));
        }
    },[chatId]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const sendMessage = (e)=> {
        e.preventDefault();
        const message={
                sender: user.username,
                receiver: chatId,
                content: input,
                type: "text",
                time: new Date().toLocaleString()
        };
        AddNewMessage(message);
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <i className="fa fa-circle-user"/>
                <div className="chat_header_info">
                    <h5>{chatName}</h5>
                </div>
                <div className="chat_header_right">
                    <i className="fa fa-magnifying-glass"/>
                    <i className="fa fa-paperclip"/>
                    <i className="fa fa-ellipsis-vertical"/>
                </div>
            </div>
            <div className="chat_body">
                {messages.map((message,key)=> (<Message key={key} sender={user.username===message.sender} message={message}/>))}
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