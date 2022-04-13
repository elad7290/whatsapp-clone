import RabbitAndDuck from "./Duck/RabbitAndDuck";
import RabbitAndLion from "./Lion/RabbitAndLion";
import RabbitAndPanda from "./Panda/RabbitAndPanda";
import RabbitAndRabbit from "./Rabbit/RabbitAndRabbit";
import RabbitAndTiger from "./Tiger/RabbitAndTiger";

function AddNewMessageRabbit(message) {
    if(message.receiver==="Duck"){
        RabbitAndDuck.push(message);
    }
    if(message.receiver==="Lion"){
        RabbitAndLion.push(message);
    }
    if(message.receiver==="Panda"){
        RabbitAndPanda.push(message);
    }
    if(message.receiver==="Rabbit"){
        RabbitAndRabbit.push(message);
    }
    if(message.receiver==="Tiger"){
        RabbitAndTiger.push(message);
    }
}
export default AddNewMessageRabbit;