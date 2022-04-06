import "./SidebarChat.css"
function SidebarChat(props){
    //const{addNewMessage,...chatProps}=props;
    return(
        <div className="sidebar_chat">
            <i className="fa fa-circle-user"/>
            <div className="sidebar_chat_info">
                <h4>userName</h4>
                <div>last message...</div>
            </div>
        </div>
    )
}
export default SidebarChat;