import RabbitAndDuck from "./Duck/RabbitAndDuck";
import RabbitAndLion from "./Lion/RabbitAndLion";
import RabbitAndPanda from "./Panda/RabbitAndPanda";
import RabbitAndRabbit from "./Rabbit/RabbitAndRabbit";
import RabbitAndTiger from "./Tiger/RabbitAndTiger";

function GetMessagesRabbit(target) {
    if (target === "Duck") {
        return RabbitAndDuck;
    }
    if (target === "Lion") {
        return RabbitAndLion;
    }
    if (target === "Panda") {
        return RabbitAndPanda;
    }
    if (target === "Rabbit") {
        return RabbitAndRabbit;
    }
    if (target === "Tiger") {
        return RabbitAndTiger;
    }
    return [];
}
export default GetMessagesRabbit;