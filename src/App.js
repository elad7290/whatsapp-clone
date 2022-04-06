import './App.css';
import LoginForm from './Components/LoginForms/LoginForm';
import RegisterForm from "./Components/LoginForms/RegisterForm";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import {UserContext} from "./UserContext"
import {useMemo, useState} from "react";


function App() {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/register" element={<RegisterForm/>}/>
                    <Route path="/homepage" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
