import AvailableChatsDuck from "./AvailableChatsDuck";

function CreateChatDuck(newChat) {
    if(AvailableChatsDuck.includes(newChat)){
        // do nothing
    }
    else {
        AvailableChatsDuck.push(newChat);
    }
}
export default CreateChatDuck;