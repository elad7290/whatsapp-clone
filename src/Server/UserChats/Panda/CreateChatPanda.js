import AvailableChatsPanda from "./AvailableChatsPanda";

function CreateChatPanda(newChat) {
    if(AvailableChatsPanda.includes(newChat)){
        // do nothing
    }
    else {
        AvailableChatsPanda.push(newChat);
    }
}
export default CreateChatPanda;