import TigerAndDuck from "./Duck/TigerAndDuck";
import TigerAndLion from "./Lion/TigerAndLion";
import TigerAndPanda from "./Panda/TigerAndPanda";
import TigerAndRabbit from "./Rabbit/TigerAndRabbit";
import TigerAndTiger from "./Tiger/TigerAndTiger";

function AddNewMessageTiger(message) {
    if(message.receiver==="Duck"){
        TigerAndDuck.push(message);
    }
    if(message.receiver==="Lion"){
        TigerAndLion.push(message);
    }
    if(message.receiver==="Panda"){
        TigerAndPanda.push(message);
    }
    if(message.receiver==="Rabbit"){
        TigerAndRabbit.push(message);
    }
    if(message.receiver==="Tiger"){
        TigerAndTiger.push(message);
    }
}
export default AddNewMessageTiger;