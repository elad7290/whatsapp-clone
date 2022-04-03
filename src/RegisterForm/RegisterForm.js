import "./RegisterForm.css"
import TextInput from "../LoginInputs/TextInput";
import PasswordInput from "../LoginInputs/PasswordInput";
import LoginButton from "../SubmitButton/LoginButton";
import ImageInput from "../LoginInputs/ImageInput";
function RegisterForm(){
    return(
        <div className='form-box'>
            <div id="alert"/>
            <h1>Register</h1>
            <form method="post" action="https://www.youtube.com/watch?v=In0nB0ABaUk">
                <TextInput details={{icon: 'fa fa-user', id: 'username', placeholder: 'User Name', name: 'username'}}/>
                <TextInput details={{icon: 'fa fa-masks-theater', id: 'nickname', placeholder: 'Nickname', name: 'nickname'}}/>
                <PasswordInput details={{icon: 'fa fa-key', id: 'password', placeholder: 'Password', name: 'password'}}/>
                <PasswordInput details={{icon: 'fa fa-key', id: 'confirmPassword', placeholder: 'Confirm Password', name: 'confirmPassword'}}/>
                <ImageInput details={{id: 'image', placeholder: 'Choose An Image', name: 'image'}}/>
                <LoginButton/>
            </form>
        </div>
    );
}
export default RegisterForm;