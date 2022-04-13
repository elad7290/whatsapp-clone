import PandaAndDuck from "./Duck/PandaAndDuck";
import PandaAndLion from "./Lion/PandaAndLion";
import PandaAndPanda from "./Panda/PandaAndPanda";
import PandaAndRabbit from "./Rabbit/PandaAndRabbit";
import PandaAndTiger from "./Tiger/PandaAndTiger";

function GetMessagesPanda(target) {
    if (target === "Duck") {
        return PandaAndDuck;
    }
    if (target === "Lion") {
        return PandaAndLion;
    }
    if (target === "Panda") {
        return PandaAndPanda;
    }
    if (target === "Rabbit") {
        return PandaAndRabbit;
    }
    if (target === "Tiger") {
        return PandaAndTiger;
    }
    return [];
}
export default GetMessagesPanda;