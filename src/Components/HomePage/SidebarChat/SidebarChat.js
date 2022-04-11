import "./SidebarChat.css"
import {Link} from "react-router-dom";
import GetNicknameById from "../../../Server/GetNicknameById";
function SidebarChat(props){
    const{name,lastMessage,img,id}=props;
    return(
        <Link to={`chats/${id}`}>
            <div className="sidebar_chat">
                <i className="fa fa-circle-user"/>
                <div className="sidebar_chat_info">
                    <h4>{GetNicknameById(name)}</h4>
                    <div>last message...</div>
                </div>
            </div>
        </Link>

    )
}
export default SidebarChat;