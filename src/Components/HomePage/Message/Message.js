import "./Message.css"
function Message(props) {
    const {sender,message} = props;
    let msg;
    if(message.type==="text"){
        msg=message.content;
    }
    else if(message.type==="audio")
    {
        msg= <audio controls>
                <source src={message.content} type="video/webm"/>
            </audio>;
    }
    //we need to do one more for img


    if (sender){
        return(
            <p className={"chat_message sender"}>
                {msg}
                <span className="time_stamp ">
                {message.time}
            </span>
            </p>
        );
    } else {
        return(
            <p className={"chat_message"}>
                {msg}
                <span className="time_stamp ">
                {message.time}
            </span>
            </p>
        );
    }

}
export default Message;