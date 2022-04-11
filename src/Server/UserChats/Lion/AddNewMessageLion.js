import LionAndTiger from "./Tiger/LionAndTiger";
import LionAndPanda from "./Panda/Panda";

function AddNewMessageLion(message) {
    if(message.receiver==="Tiger"){
        LionAndTiger.push(message);
    }
    if(message.receiver==="Panda"){
        LionAndPanda.push(message);
    }
    /*
    if(target==="Lion"){
    }
     */
}
export default AddNewMessageLion;