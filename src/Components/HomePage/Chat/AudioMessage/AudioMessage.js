import AddNewMessage from "../../../../Server/UserChats/AddNewMessage";
import GetMessages from "../../../../Server/UserChats/GetMessages";

function AudioMessage(props) {
    const {sender, receiver, setMessages,user} = props;

    let device = navigator.mediaDevices.getUserMedia({audio: true});
    let items = [];
    let recorder;
    device.then(stream => {
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = e => {
            items.push(e.data);
            if (recorder.state === 'inactive'){
                let blob = new Blob(items,{type: 'audio/webm'});
                // build msg
                var msg={
                    sender: sender,
                    receiver: receiver,
                    content: URL.createObjectURL(blob),
                    type: "audio",
                    time: new Date().toLocaleString()
                };
                // send msg
                AddNewMessage(msg);
                setMessages([...GetMessages(user, receiver)]);
            }
        }
    });

    var timeout;
    const record=()=>{
        items = [];
        timeout = setInterval(() => {
            if (recorder.state !== 'recording'){
                recorder.start();
            }
        }, 100);
    }

    const stop=()=> {
        recorder.stop();
        clearInterval(timeout);
    }
    return(<i className="fa fa-microphone" onMouseDown={record} onMouseUp={stop}/>);
}

export default AudioMessage;