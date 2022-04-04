import './App.css';
import LoginForm from './Components/LoginForms/LoginForm'
import RegisterForm from "./Components/LoginForms/RegisterForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<LoginForm/>}/>
                <Route path ="/register" element={<RegisterForm/>}/>
                <Route path ="/homepage" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
