import PandaAndDuck from "./Duck/PandaAndDuck";
import PandaAndLion from "./Lion/PandaAndLion";
import PandaAndPanda from "./Panda/PandaAndPanda";
import PandaAndRabbit from "./Rabbit/PandaAndRabbit";
import PandaAndTiger from "./Tiger/PandaAndTiger";

function AddNewMessagePanda(message) {
    if(message.receiver==="Duck"){
        PandaAndDuck.push(message);
    }
    if(message.receiver==="Lion"){
        PandaAndLion.push(message);
    }
    if(message.receiver==="Panda"){
        PandaAndPanda.push(message);
    }
    if(message.receiver==="Rabbit"){
        PandaAndRabbit.push(message);
    }
    if(message.receiver==="Tiger"){
        PandaAndTiger.push(message);
    }
}
export default AddNewMessagePanda;
