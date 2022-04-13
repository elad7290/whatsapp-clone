import DuckAndDuck from "./Duck/DuckAndDuck";
import DuckAndLion from "./Lion/DuckAndLion";
import DuckAndPanda from "./Panda/DuckAndPanda";
import DuckAndRabbit from "./Rabbit/DuckAndRabbit";
import DuckAndTiger from "./Tiger/DuckAndTiger";

function AddNewMessageDuck(message) {
    if(message.receiver==="Duck"){
        DuckAndDuck.push(message);
    }
    if(message.receiver==="Lion"){
        DuckAndLion.push(message);
    }
    if(message.receiver==="Panda"){
        DuckAndPanda.push(message);
    }
    if(message.receiver==="Rabbit"){
        DuckAndRabbit.push(message);
    }
    if(message.receiver==="Tiger"){
        DuckAndTiger.push(message);
    }
}
export default AddNewMessageDuck;