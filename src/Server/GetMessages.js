import GetMessagesLion from "./UserChats/Lion/GetMessagesLion";

function GetMessages(source,target) {
    // when work with DB, send the messages ascending
    if(source.username==="Lion"){
        return GetMessagesLion(target);
    }
    return[];
}

export default GetMessages;