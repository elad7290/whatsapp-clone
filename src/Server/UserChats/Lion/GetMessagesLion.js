import LionAndTiger from "./Tiger/LionAndTiger";
import LionAndPanda from "./Panda/LionAndPanda";

function GetMessagesLion(target){
    if(target==="Panda"){
        return LionAndPanda;
    }
    if(target==="Tiger"){
        return LionAndTiger;
    }
    if(target==="Lion"){
        /**/
    }
    return[];

}
export default GetMessagesLion;