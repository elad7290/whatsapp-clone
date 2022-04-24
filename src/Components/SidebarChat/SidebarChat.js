import "./SidebarChat.css"
import {Link} from "react-router-dom";
import GetNicknameById from "../../Server/GetNicknameById";
import {useEffect, useState} from "react";
import GetMessages from "../../Server/UserChats/GetMessages";
import GetImageById from "../../Server/GetImageById";
function SidebarChat(props){
    const{name,id,user}=props;
    const [messages,setMessages]=useState([]);

    useEffect(()=>{
        if(id){
            setMessages([...GetMessages(user,id)]);
        }
    }); // when work with DB, add deps: [id]
    let msg='';
    if (messages[messages.length-1]) {
        if(messages[messages.length-1].type==="text"){
            msg=messages[messages.length-1].content;
        }
        else if(messages[messages.length-1].type==="audio")
        {
            msg="audio file";
        }
        else if(messages[messages.length-1].type==="image")
        {
            msg="image file";
        }
        else if(messages[messages.length-1].type==="video")
        {
            msg="video file";
        }
    }


    return(
        <Link to={`chats/${id}`} id="sidebar_chat_link">
            <div className="sidebar_chat">
                <img src={GetImageById(id)} alt="avatar" className="user_picture"/>
                <div className="sidebar_chat_info">
                    <h4>{GetNicknameById(name)}</h4>
                    <div>
                        <div id="sidebar_message_content">{msg} </div>
                        <span className="time_stamp ">
                        {messages[messages.length-1]?.time}
                     </span>
                    </div>

                </div>
            </div>
        </Link>

    )
}
export default SidebarChat;