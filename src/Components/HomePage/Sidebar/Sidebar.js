import "./Sidebar.css"
import SidebarChat from "../SidebarChat/SidebarChat";
import AddNewChat from "../SidebarChat/AddNewChat";
import {useEffect, useState} from "react";
import GetSidebar from "../../../Server/UserChats/GetSidebar";

function Sidebar(props) {
    const {user} = props;
    const [chats,setChats]=useState([]);

    useEffect( () => {
        setChats(GetSidebar(user));
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
                <AddNewChat user={user} setChats={setChats}/>
                {chats.map((chat,key)=>(<SidebarChat key={key} id={chat} name={chat}/>))}
            </div>
        </div>
    )
}

export default Sidebar;