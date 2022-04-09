import MessagesDB from "./MessagesDB";

function GetChats(userName){
    const messages = MessagesDB.filter((message) => (message.sender === userName || message.receiver === userName));
    var rare_chats = [];
    for (let i = 0; i < messages.length; i++){
        if (messages[i].receiver !== userName) {
            rare_chats.push(messages[i].receiver)
        }
        if (messages[i].sender !== userName) {
            rare_chats.push(messages[i].sender)
        }
    }
    const chats = [...new Set(rare_chats)];
    return {messages, chats};
}

export default GetChats;
