import './LoginInput.css'
function TextInput({details}){
    return(
        <div className="input-box">
            <i className={details.icon}/>
            <input type="text" id={details.id} placeholder={details.placeholder} name={details.name}/>
        </div>
    );
}
export default TextInput;