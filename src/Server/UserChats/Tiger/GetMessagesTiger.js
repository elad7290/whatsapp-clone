import TigerAndDuck from "./Duck/TigerAndDuck";
import TigerAndLion from "./Lion/TigerAndLion";
import TigerAndPanda from "./Panda/TigerAndPanda";
import TigerAndRabbit from "./Rabbit/TigerAndRabbit";
import TigerAndTiger from "./Tiger/TigerAndTiger";

function GetMessagesTiger(target) {
    if (target === "Duck") {
        return TigerAndDuck;
    }
    if (target === "Lion") {
        return TigerAndLion;
    }
    if (target === "Panda") {
        return TigerAndPanda;
    }
    if (target === "Rabbit") {
        return TigerAndRabbit;
    }
    if (target === "Tiger") {
        return TigerAndTiger;
    }
    return [];
}
export default GetMessagesTiger;