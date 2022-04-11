import CreateChatLion from "./UserChats/Lion/CreateChatLion";

function CreateChat(user,newChat){
    if(user.username==="Lion"){
        CreateChatLion(newChat);
    }

}
export default CreateChat;