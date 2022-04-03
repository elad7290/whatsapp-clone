import './LoginInput.css'

function PasswordInput({details}) {
    const hideShow= (e)=>{
        var pwd =document.getElementById(details.id);
        var s =document.getElementById("show-"+details.id);
        var h =document.getElementById("hide-"+details.id);
        if(pwd.type === "password"){
            pwd.type="text";
            s.style.display="block";
            h.style.display="none";
        }
        else{
            pwd.type="password";
            s.style.display="none";
            h.style.display="block";
        }
    }
    return (
        <div className="input-box">
            <i className={details.icon}/>
            <input type="password" id={details.id} placeholder={details.placeholder} name={details.name}/>
            <span className="eye" onClick={hideShow}>
                    <i className="fa fa-eye show" id={"show-"+details.id}/>
                    <i className="fa fa-eye-slash hide" id={"hide-"+details.id}/>
            </span>
        </div>
    );
}

export default PasswordInput;