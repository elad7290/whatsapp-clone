import LionAndTiger from "./Tiger/LionAndTiger";
import LionAndPanda from "./Panda/LionAndPanda";
import LionAndDuck from "./Duck/LionAndDuck";
import LionAndLion from "./Lion/LionAndLion";
import LionAndRabbit from "./Rabbit/LionAndRabbit";

function AddNewMessageLion(message) {
    if(message.receiver==="Duck"){
        LionAndDuck.push(message);
    }
    if(message.receiver==="Lion"){
        LionAndLion.push(message);
    }
    if(message.receiver==="Panda"){
        LionAndPanda.push(message);
    }
    if(message.receiver==="Rabbit"){
        LionAndRabbit.push(message);
    }
    if(message.receiver==="Tiger"){
        LionAndTiger.push(message);
    }
}
export default AddNewMessageLion;