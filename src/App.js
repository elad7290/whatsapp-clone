import './App.css';
import LoginForm from './Components/LoginForms/LoginForm';
import RegisterForm from "./Components/LoginForms/RegisterForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import {UserContext} from "./UserContext"
import {useState} from "react";
import UserEntrance from "./Server/UserEntrance";


function App() {
    //const [user, setUser] = useState(null);
    const [user, setUser] = useState(UserEntrance("1", "Lion"));
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/register" element={<RegisterForm/>}/>
                    <Route path="/homepage/*" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
