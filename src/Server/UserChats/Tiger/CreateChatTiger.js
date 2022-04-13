import AvailableChatsTiger from "./AvailableChatsTiger";

function CreateChatTiger(newChat) {
    if(AvailableChatsTiger.includes(newChat)){
        // do nothing
    }
    else {
        AvailableChatsTiger.push(newChat);
    }
}
export default CreateChatTiger;