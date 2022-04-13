import AvailableChatsRabbit from "./AvailableChatsRabbit";

function CreateChatRabbit(newChat) {
    if(AvailableChatsRabbit.includes(newChat)){
        // do nothing
    }
    else {
        AvailableChatsRabbit.push(newChat);
    }
}
export default CreateChatRabbit;