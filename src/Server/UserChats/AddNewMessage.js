import AddNewMessageLion from "./Lion/AddNewMessageLion";
import AddNewMessageDuck from "./Duck/AddNewMessageDuck";
import AddNewMessagePanda from "./Panda/AddNewMessagePanda";
import AddNewMessageRabbit from "./Rabbit/AddNewMessageRabbit";
import AddNewMessageTiger from "./Tiger/AddNewMessageTiger";

function AddNewMessage(message){
    // add to sender
    if(message.sender==="Duck"){
        AddNewMessageDuck(message);
    }
    if(message.sender==="Lion"){
        AddNewMessageLion(message);
    }
    if(message.sender==="Panda"){
        AddNewMessagePanda(message);
    }
    if(message.sender==="Rabbit"){
        AddNewMessageRabbit(message);
    }
    if(message.sender==="Tiger"){
        AddNewMessageTiger(message);
    }
    /*
    // add to receiver
    if (message.receiver !== message.sender){
        var copy_message = JSON.parse(JSON.stringify(message));
        copy_message.sender = message.receiver;
        copy_message.receiver = message.sender;
        console.log(copy_message);
        if(copy_message.sender==="Duck"){
            AddNewMessageDuck(message);
        }
        if(copy_message.sender==="Lion"){
            AddNewMessageLion(message);
        }
        if(copy_message.sender==="Panda"){
            AddNewMessagePanda(message);
        }
        if(copy_message.sender==="Rabbit"){
            AddNewMessageRabbit(message);
        }
        if(copy_message.sender==="Tiger"){
            AddNewMessageTiger(message);
        }
    }
    */

    // don't forget to add also chat
}
export default AddNewMessage;