import MessagesDB from "./MessagesDB";

function GetChats(userName){
    // all messages related to userName
    const messages = MessagesDB.filter((message) => (message.sender === userName || message.receiver === userName));
    // all the chats (sidebar) userName has
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
    // make a dictionary
    var chatsDict = {};
    for (let i = 0; i < chats.length; i++){
        chatsDict[chats[i]] = messages.filter((message) => (message.sender === chats[i] || message.receiver === chats[i]));
    }
    return chatsDict;
}

export default GetChats;
