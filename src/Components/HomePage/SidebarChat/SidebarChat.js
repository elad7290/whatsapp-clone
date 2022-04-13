import "./SidebarChat.css"
import {Link, useParams} from "react-router-dom";
import GetNicknameById from "../../../Server/GetNicknameById";
import {useEffect, useState} from "react";
import GetMessages from "../../../Server/UserChats/GetMessages";
function SidebarChat(props){
    const{name,img,id,user}=props;
    const [messages,setMessages]=useState([]);

    useEffect(()=>{
        if(id){
            setMessages([...GetMessages(user,id)]);
        }
    }); // when work with DB, add deps: [id]
    return(
        <Link to={`chats/${id}`} id="sidebar_chat_link">
            <div className="sidebar_chat">
                <i className="fa fa-circle-user"/>
                <div className="sidebar_chat_info">
                    <h4>{GetNicknameById(name)}</h4>
                    <div>{messages[messages.length-1]?.content}</div>
                </div>
            </div>
        </Link>

    )
}
export default SidebarChat;