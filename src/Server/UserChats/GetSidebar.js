import AvailableChatsLion from "./Lion/AvailableChatsLion";
import AvailableChatsDuck from "./Duck/AvailableChatsDuck";
import AvailableChatsPanda from "./Panda/AvailableChatsPanda";
import AvailableChatsRabbit from "./Rabbit/AvailableChatsRabbit";
import AvailableChatsTiger from "./Tiger/AvailableChatsTiger";

function GetSidebar(user){
    if(user.username==="Duck"){
        return AvailableChatsDuck;
    }
    if(user.username==="Lion"){
        return AvailableChatsLion;
    }
    if(user.username==="Panda"){
        return AvailableChatsPanda;
    }
    if(user.username==="Rabbit"){
        return AvailableChatsRabbit;
    }
    if(user.username==="Tiger"){
        return AvailableChatsTiger;
    }
    return [];
}
export default GetSidebar;