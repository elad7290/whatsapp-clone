import LionAvailableChats from "./Lion/LionAvailableChats";

function GetSidebar(user){
    if(user.username==="Lion"){
        return LionAvailableChats;
    }
    /*add tiger and Panda options*/
    return [];
}
export default GetSidebar;