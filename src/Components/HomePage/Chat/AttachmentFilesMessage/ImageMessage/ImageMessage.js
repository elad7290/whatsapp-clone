import "./ImageMessage.css"
import AddNewMessage from "../../../../../Server/UserChats/AddNewMessage";
import GetMessages from "../../../../../Server/UserChats/GetMessages";

function ImageMessage(props){
    const {sender, receiver, setMessages,user} = props;

    const sendImage = (e) => {
       var file = e.target.files[0];
       if (file.type.match("image.*")){
           var reader = new FileReader();
           reader.addEventListener("load", function() {
               // build msg
               const msg={
                   sender: sender,
                   receiver: receiver,
                   content: reader.result,
                   type: "image",
                   time: new Date().toLocaleString()
               };
               console.log(msg);
               // send msg
               AddNewMessage(msg);
               setMessages([...GetMessages(user, receiver)]);
           }, false);
           if (file){
               reader.readAsDataURL(file);
           }
       }
    }

    return (
        <div>
            <label htmlFor="image_chat_footer">
                <i className="fa fa-image icon_footer"/> Send Image
            </label>
            <input id="image_chat_footer" type="file" accept="image/*" onChange={sendImage}/>
        </div>

    );

}

export default ImageMessage;