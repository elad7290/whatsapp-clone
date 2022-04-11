import GetMessagesLion from "./UserChats/Lion/GetMessagesLion";

function GetMessages(source,target) {
    if(source.username==="Lion"){
        return GetMessagesLion(target);
    }
    return[];
}

export default GetMessages;