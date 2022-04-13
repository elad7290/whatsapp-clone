import LionAndTiger from "./Tiger/LionAndTiger";
import LionAndPanda from "./Panda/LionAndPanda";
import LionAndDuck from "./Duck/LionAndDuck";
import LionAndLion from "./Lion/LionAndLion";
import LionAndRabbit from "./Rabbit/LionAndRabbit";

function GetMessagesLion(target){
    if (target === "Duck") {
        return LionAndDuck;
    }
    if (target === "Lion") {
        return LionAndLion;
    }
    if (target === "Panda") {
        return LionAndPanda;
    }
    if (target === "Rabbit") {
        return LionAndRabbit;
    }
    if (target === "Tiger") {
        return LionAndTiger;
    }
    return [];
}
export default GetMessagesLion;