import "./Sidebar.css"
import SidebarChat from "../SidebarChat/SidebarChat";
import AddNewChat from "../SidebarChat/AddNewChat";
import {useEffect, useState} from "react";
import GetChats from "../../../Server/GetChats";

function Sidebar(props) {
    const {user} = props;
    const [chatsDict, setChatsDict] = useState([]);

    useEffect(() => {
        const chatsDict = GetChats(user.username);
        setChatsDict(chatsDict);
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <i className="fa fa-circle-user"/>
                <div className="sidebar_header_right">
                    <i className="fa fa-message"/>
                    <i className="fa fa-ellipsis-vertical"/>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_container">
                    <i className="fa fa-magnifying-glass"/>
                    <input placeholder="Search for messages..." id="search" type="text" name="name" tabIndex="1"/>
                </div>
            </div>
            <div className="sidebar_chats">
                <AddNewChat activeChats={Object.keys(chatsDict)}/>
                {Object.entries(chatsDict).map(([key,value])=>(<SidebarChat key={key} userName={key} lastMessage={value[value.length-1].content}/>))}
            </div>
        </div>
    )

}

export default Sidebar;