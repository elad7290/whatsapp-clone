import "./Sidebar.css"
import SidebarChat from "../SidebarChat/SidebarChat";
import AddNewChat from "../SidebarChat/AddNewChat";
import {useContext, useEffect, useState} from "react";
import GetSidebar from "../../../Server/UserChats/GetSidebar";
import {UserContext} from "../../../UserContext";

function Sidebar() {
    const {user, setUser} = useContext(UserContext);
    const [chats,setChats]=useState([]);

    useEffect( () => {
        setChats(GetSidebar(user));
    }, []);
    
    const logout = () => {
      setUser(null);
    }

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <i className="fa fa-circle-user"/>
                <div className="sidebar_header_right">
                    <i className="fa fa-power-off" onClick={logout}/>
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
                {chats.map((chat,key)=>(<SidebarChat key={key} id={chat} name={chat} user={user}/>))}
            </div>
        </div>
    )
}

export default Sidebar;