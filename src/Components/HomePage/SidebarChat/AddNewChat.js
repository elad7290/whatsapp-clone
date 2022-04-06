import "./SidebarChat.css"

function AddNewChat() {
    const createChat = () => {
        /**add functionality*/
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
                        </div>
                        <div className="modal-body">
                            *** search for available users ***
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={createChat}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewChat;