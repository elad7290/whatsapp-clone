import GetMessagesLion from "./Lion/GetMessagesLion";
import GetMessagesDuck from "./Duck/GetMessagesDuck";
import GetMessagesPanda from "./Panda/GetMessagesPanda";
import GetMessagesRabbit from "./Rabbit/GetMessagesRabbit";
import GetMessagesTiger from "./Tiger/GetMessagesTiger";

function GetMessages(source,target) {
    // when work with DB, send the messages ascending
    if(source.username==="Duck"){
        return GetMessagesDuck(target);
    }
    if(source.username==="Lion"){
        return GetMessagesLion(target);
    }
    if(source.username==="Panda"){
        return GetMessagesPanda(target);
    }
    if(source.username==="Rabbit"){
        return GetMessagesRabbit(target);
    }
    if(source.username==="Tiger"){
        return GetMessagesTiger(target);
    }
    return[];
}

export default GetMessages;