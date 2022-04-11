import AddNewMessageLion from "./UserChats/Lion/AddNewMessageLion";

function AddNewMessage(message){
    if(message.sender==="Lion"){
        AddNewMessageLion(message);
    }
    /*
    if(source==="Tiger"){
        if(target==="Tiger"){

        }
        if(target==="Panda"){

        }
        if(target==="Lion"){
        }
    }
    if(source==="Panda"){
        if(target==="Tiger"){

        }
        if(target==="Panda"){

        }
        if(target==="Lion"){
        }
    }

     */
    // need to add messeg also to recever.
    return[];
}
export default AddNewMessage;