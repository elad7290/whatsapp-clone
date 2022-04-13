import CreateChatLion from "./Lion/CreateChatLion";
import CreateChatDuck from "./Duck/CreateChatDuck";
import CreateChatPanda from "./Panda/CreateChatPanda";
import CreateChatRabbit from "./Rabbit/CreateChatRabbit";
import CreateChatTiger from "./Tiger/CreateChatTiger";

function CreateChat(user,newChat){
    if(user.username==="Duck"){
        CreateChatDuck(newChat);
    }
    if(user.username==="Lion"){
        CreateChatLion(newChat);
    }
    if(user.username==="Panda"){
        CreateChatPanda(newChat);
    }
    if(user.username==="Rabbit"){
        CreateChatRabbit(newChat);
    }
    if(user.username==="Tiger"){
        CreateChatTiger(newChat);
    }
}
export default CreateChat;