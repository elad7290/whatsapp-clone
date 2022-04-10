import "./SidebarChat.css"
import {useRef, useState} from "react";
import GetAllUsersName from "../../../Server/GetAllUsersName";
import Alert from "../../Alert/Alert";

function AddNewChat(props) {
    // find all users that userName can add
    const {activeChats} = props;
    const allUsers = GetAllUsersName();
    const availableUsers = allUsers.filter((user) => (!activeChats.includes(user)));
    const [searchQuery, setSearchQuery] = useState(availableUsers);

    const searchBox = useRef(null);

    const search = () => {
        setSearchQuery(availableUsers.filter((user)=> (user.includes(searchBox.current.value))));
    }

    const choose = (e) => {
        const input = document.getElementById("add_user_input");
        input.value = e.target.innerText;
    }

    const createChat = () => {
        const input = document.getElementById("add_user_input");
        if (availableUsers.includes(input.value)){
            Alert("success","warning");
        } else {
            Alert("user doesn't exist!","danger");
        }
        input.value = null; // don't reload on fail
    }
    
    const cancel = () => {
        const input = document.getElementById("add_user_input");
        input.value = null;
    }

    return (
        <>
            <div className="sidebar_chat" data-bs-toggle="modal" data-bs-target="#addNewChatModal">
                <h4>Add New Chat</h4>
            </div>
            <div className="modal fade" id="addNewChatModal" tabIndex="-1" aria-labelledby="modalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabel">Add New Chat</h5>
                            <div id="alert"/>
                        </div>
                        <div className="modal-body">
                            <div className="dropdown">
                                <input type="text" id="add_user_input" placeholder="search for available users..." data-bs-toggle="dropdown" onKeyUp={search} ref={searchBox} autoComplete="off"/>
                                <div className="dropdown-menu" aria-labelledby="add_user_input">
                                    {searchQuery.map((user, key) => (<li key={key} onClick={choose} className="dropdown-item">{user}</li>))}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={cancel}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={createChat}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewChat;