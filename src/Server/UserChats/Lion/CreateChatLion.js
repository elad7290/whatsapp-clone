import AvailableChatsLion from "./AvailableChatsLion";

function CreateChatLion(newChat){
    if(AvailableChatsLion.includes(newChat)){
        // do nothing
    }
    else {
        AvailableChatsLion.push(newChat);
    }
}
export default CreateChatLion;