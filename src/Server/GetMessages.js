import GetMessageLion from "./UserChats/Lion/GetMessageLion";

function GetMessages(source,target) {
    if(source.username==="Lion"){
        return GetMessageLion(target);
    }
    return[];

}
export default GetMessages;