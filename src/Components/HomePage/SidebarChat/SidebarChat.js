import "./SidebarChat.css"
function SidebarChat(props){
    const{userName,lastMessage,img}=props;
    return(
        <div className="sidebar_chat">
            <i className="fa fa-circle-user"/>
            <div className="sidebar_chat_info">
                <h4>{userName}</h4>
                <div>{lastMessage}</div>
            </div>
        </div>
    )
}
export default SidebarChat;