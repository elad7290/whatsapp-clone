import "./Sidebar.css"
import SidebarChat from "../SidebarChat/SidebarChat";
import AddNewChat from "../SidebarChat/AddNewChat";
import {useContext, useEffect, useRef, useState} from "react";
import {TokenContext} from "../../TokenContext";
import {GetChats} from "../../Server/ChatRequests";
import {GetLoggedUserId} from "../../Server/UserRequests";

function Sidebar() {
    const {token, setToken} = useContext(TokenContext);
    const [chats,setChats]=useState([]);
    const [userId,setUserId]=useState('');
    const searchBox = useRef(null);

    const loadChat = async () => {
        const allChats = await GetChats(token);
        setChats(allChats.filter((chat)=> (chat.name.includes(searchBox.current.value))));
    }

    const delInput = async () => {
        const input = document.getElementById("search_chats");
        input.value = null;
        await loadChat();
    }

    useEffect(  () => {
        loadChat().catch(console.error);
    });

    useEffect(  () => {
        const GetUserId = async () => {
            setUserId(await GetLoggedUserId(token));
        }
        GetUserId().catch(console.error);
    }, []);

    const logout = () => {
      setToken(null);

      /// logout function
    }

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                {/*<img src={user.image} alt="avatar" className="user_picture"/>*/}
                <h3> Welcome {userId}! </h3>
                <div className="sidebar_header_right">
                    <i className="fa fa-power-off clickable" onClick={logout}/>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_container">
                    <i className="fa fa-magnifying-glass"/>
                    <input placeholder="Search for chats here" id="search_chats" type="text" name="name" tabIndex="1" onKeyUp={loadChat} ref={searchBox} onBlur={delInput}/>
                </div>
            </div>
            <div className="sidebar_chats">
                <AddNewChat userId={userId}/>
                {chats.map((chat,key)=>(<SidebarChat key={key} chat={chat}/>))}
            </div>
        </div>
    )
}

export default Sidebar;