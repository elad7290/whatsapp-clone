import "./Sidebar.css"
import SidebarChat from "../SidebarChat/SidebarChat";
import AddNewChat from "../SidebarChat/AddNewChat";
import {useContext, useEffect, useRef, useState} from "react";
import GetSidebar from "../../../Server/UserChats/GetSidebar";
import {UserContext} from "../../../UserContext";
import GetNicknameById from "../../../Server/GetNicknameById";

function Sidebar() {
    const {user, setUser} = useContext(UserContext);
    const [chats,setChats]=useState([]);
    const searchBox = useRef(null);

    const allChats= GetSidebar(user);
    const search = () => {
        setChats(allChats.filter((chat)=> (GetNicknameById(chat).includes(searchBox.current.value))));
    }

    const delInput = () => {
        const input = document.getElementById("search_chats");
        input.value = null;
        search();
    }

    useEffect( () => {
        setChats(GetSidebar(user));
    }, []);
    
    const logout = () => {
      setUser(null);
    }

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <img src={user.image} alt="avatar" className="user_picture"/>
                <div className="sidebar_header_right">
                    <i className="fa fa-power-off" onClick={logout}/>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_container">
                    <i className="fa fa-magnifying-glass"/>
                    <input placeholder="Search for chats here" id="search_chats" type="text" name="name" tabIndex="1" onKeyUp={search} ref={searchBox} onBlur={delInput}/>
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