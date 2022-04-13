import './LoginForm.css'
import TextInput from "../LoginInputs/TextInput";
import PasswordInput from "../LoginInputs/PasswordInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import {Link, Navigate} from "react-router-dom";
import UserEntrance from "../../Server/UserEntrance";
import Alert from "../Alert/Alert";
import {useContext} from "react";
import {UserContext} from "../../UserContext";

function LoginForm() {
    const {user,setUser} = useContext(UserContext);
    /*
    if (user) { // check if user already logged in
        return <Navigate to="/homepage"/>;
    }
     */

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const pwd = document.getElementById('password').value;
        const guest = UserEntrance(pwd, username);
        if (guest){
            setUser(guest);
            //return <Navigate to="/HomePage"/>;
        } else {
            Alert("User Name or Password incorrect!", "danger");
        }
    };

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