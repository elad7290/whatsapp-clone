import "./Chat.css"
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {TokenContext} from "../../TokenContext";
import {ChatDetails} from "../../Server/ChatRequests";
import {AddMessage, GetMessages, Transfer} from "../../Server/MessageRequests";
import Message from "../Message/Message";
import {GetLoggedUserId} from "../../Server/UserRequests";
import {hubServer} from "../../Shared";
import * as signalR from "@microsoft/signalr";



function Chat() {
    const {token} = useContext(TokenContext);
    const {chatId}=useParams();
    const [chat, setChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [input, setInput] = useState("");
    const [userId,setUserId]=useState('');

    /**********signalR***********/

    let connection =new signalR.HubConnectionBuilder().withUrl("chatsHub").build();
    connection.start();


    useEffect(  () => {
        if (chatId){
            const loadChat = async () => {
                let data = await ChatDetails(token, chatId);
                setChat(data);
            }
            loadChat().catch(console.error);
        }
    }, [chatId]);

    useEffect(  () => {
        if (chatId){
            const loadMessages = async () => {
                let data = await GetMessages(token, chatId);
                setMessages(data);
            }
            loadMessages().catch(console.error);
        }
    });

    useEffect(  () => {
        const GetUserId = async () => {
            setUserId(await GetLoggedUserId(token));
        }
        GetUserId().catch(console.error);
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const sendMessage = async (e)=> {
        e.preventDefault();
        await AddMessage(token,chatId,input);
        await Transfer(chat?.server, userId, chatId, input);
        console.log("try sending");
        await connection.invoke("UpdateMessages");
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                {/*<img src={GetImageById(chatId)} alt="avatar" className="user_picture"/>*/}
                <div className="chat_header_info">
                    <h5>{chat?.name}</h5>
                </div>
                <div className="chat_header_right">

                </div>
            </div>
            <div className="chat_body">
                {messages?.map((message,key)=> (<Message key={key} message={message}/>))}
            </div>
            <div className="chat_footer">
                <form>
                    <input type="text" placeholder="Type a message..." value={input} onChange={handleChange}/>
                    <button type="submit" onClick={sendMessage}>send</button>
                </form>
                {/*<AudioMessage  sender={user.username} receiver={chatId} setMessages={setMessages} user={user}/>
                <AttachmentFilesMessage sender={user.username} receiver={chatId} setMessages={setMessages} user={user}/>*/}
            </div>

        </div>
    )


}
export default Chat;