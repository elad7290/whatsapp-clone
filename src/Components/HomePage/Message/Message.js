import "./Message.css"
function Message(props) {
    const {sender,message} = props;

    if (sender){
        return(
            <p className={"chat_message sender"}>
                {message.content}
                <span className="time_stamp ">
                {message.time}
            </span>
            </p>
        );
    } else {
        return(
            <p className={"chat_message"}>
                {message.content}
                <span className="time_stamp ">
                {message.time}
            </span>
            </p>
        );
    }

}
export default Message;