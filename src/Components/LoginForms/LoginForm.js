import './LoginForm.css'
import TextInput from "../LoginInputs/TextInput";
import PasswordInput from "../LoginInputs/PasswordInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import {Link} from "react-router-dom";
import GetUser from "../../Server/GetUser";
import Alert from "../Alert/Alert";

function LoginForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const pwd = document.getElementById('password').value;
        const user = GetUser(pwd, username);
        if (user){
            console.log(user);
            console.log("hello "+ user.username);
        } else {
            Alert("User Name or Password incorrect!", "danger");
        }
    }

    return (
        <div className="form-box">
            <h1>Login Here</h1>
            <div id="alert"/>
            <form method="post" onSubmit={handleSubmit}>
                <TextInput icon='fa fa-user' id='username' placeholder='User Name' name='username' errorMessage="Username is required!" required/>
                <PasswordInput icon='fa fa-key' id='password' placeholder='Password' name='password' errorMessage="Password is required!" required/>
                <SubmitButton text='LOGIN'/>
            </form>
                <div id="message">
                    Not registered? <Link to="/register">click here</Link> to register.
                </div>
        </div>

    );
}

export default LoginForm;