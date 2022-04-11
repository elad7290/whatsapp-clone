import LionAvailableChats from "./LionAvailableChats";

function CreateChatLion(newChat){
    if(LionAvailableChats.includes(newChat)){
        // do nothing
    }
    else {
        LionAvailableChats.push(newChat);
    }
}
export default CreateChatLion;