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
                //document.getElementById('audio').innerHTML = '<source src="'+URL.createObjectURL(blob)+'" type="video/webm">';
                // build msg
                console.log("all msg 1", GetMessages(user, receiver));
                var msg={
                    sender: sender,
                    receiver: receiver,
                    content: URL.createObjectURL(blob),
                    type: "audio",
                    time: new Date().toLocaleString()
                };
                console.log(msg);
                AddNewMessage(msg);
                setMessages([...GetMessages(user, receiver)]);
                console.log("all msg 2", GetMessages(user, receiver));
                // send msg
            }
        }
    });

    var timeout;
    const record=(control)=>{
        items = [];
        timeout = setInterval(() => {
            recorder.start();
        }, 100);
    }

    const stop=(control)=> {
        recorder.stop();
        clearInterval(timeout);
    }
    return(<i className="fa fa-microphone" onMouseDown={record} onMouseUp={stop}></i>);
}

export default AudioMessage;