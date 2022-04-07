import "./Message.css"
function Message(props) {
    const {receiver} = props;
    return(
        <p className={"chat_message "+receiver}>
            message content
            <span className="time_stamp ">
                03:25
            </span>
        </p>
    );
}
export default Message;