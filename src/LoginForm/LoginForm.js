import './LoginForm.css'
import TextInput from "../LoginInputs/TextInput";
import PasswordInput from "../LoginInputs/PasswordInput";
import LoginButton from "../SubmitButton/LoginButton";
import Alert from "../Alert/Alert";

function LoginForm() {

    const handleSubmit = (e) => {
      const name = document.getElementById('username').value;
      const pwd = document.getElementById('password').value;
      if ((name === null || name === "") || (pwd === null || pwd === "")){
          e.preventDefault();
          Alert({msg:"user name and password are required",type:"danger"});
      }
    }

    return (
        <div className="form-box">
            <div id="alert"/>
            <h1>Login Here</h1>
            <form method="post" action="https://www.youtube.com/watch?v=In0nB0ABaUk" onSubmit={handleSubmit}>
                <TextInput details={{icon: 'fa fa-user', id: 'username', placeholder: 'User Name', name: 'username'}}/>
                <PasswordInput details={{icon: 'fa fa-key', id: 'password', placeholder: 'Password', name: 'password'}}/>
                <LoginButton/>
            </form>
        </div>

    );
}

export default LoginForm;