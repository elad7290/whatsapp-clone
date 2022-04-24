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
    else if(message.type==="image")
    {
        msg= <img src={message.content} className="img-fluid" alt="image..."/>;
    }
    else if(message.type==="video")
    {
       msg= <video width="640" height="360" controls>
            <source src={message.content} type="video/mp4" />
            <source src={message.content} type="video/ogg" />
            <source src={message.content} type="video/webm" />
        </video>

    }

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