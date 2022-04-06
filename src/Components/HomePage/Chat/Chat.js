import "./Chat.css"
function Chat() {
    const sendMessage = (e)=> {
        /**/
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <i className="fa fa-circle-user"/>
                <div className="chat_header_info">
                    <h5>roon nunber</h5>
                </div>
                <div className="chat_header_right">
                    <i className="fa fa-magnifying-glass"/>
                    <i className="fa fa-paperclip"/>
                    <i className="fa fa-ellipsis-vertical"/>
                </div>
            </div>
            <div className="chat_body">01:34:00</div>
            <div className="chat_footer">
                <form>
                    <input type="text" placeholder="Type a message..."/>
                    <button type="submit" onClick={sendMessage}>send</button>
                </form>
                <i className="fa fa-microphone"/>
            </div>

        </div>
    )


}
export default Chat;