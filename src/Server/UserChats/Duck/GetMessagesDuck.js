import DuckAndDuck from "./Duck/DuckAndDuck";
import DuckAndLion from "./Lion/DuckAndLion";
import DuckAndPanda from "./Panda/DuckAndPanda";
import DuckAndRabbit from "./Rabbit/DuckAndRabbit";
import DuckAndTiger from "./Tiger/DuckAndTiger";

function GetMessagesDuck(target) {
    if (target === "Duck") {
        return DuckAndDuck;
    }
    if (target === "Lion") {
        return DuckAndLion;
    }
    if (target === "Panda") {
        return DuckAndPanda;
    }
    if (target === "Rabbit") {
        return DuckAndRabbit;
    }
    if (target === "Tiger") {
        return DuckAndTiger;
    }
    return [];
}
export default GetMessagesDuck;