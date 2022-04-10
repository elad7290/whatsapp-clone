import "./HomePage.css"
import {useContext} from "react";
import {UserContext} from "../../UserContext";
import {Navigate} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";

function HomePage() {
    const {user, setUser} = useContext(UserContext);
    if (!user) { // check if user not logged in
        return <Navigate to="/login"/>;
    }
   return (
        <div className="app">
            <div className="app_body">
                <Sidebar user={user}/>
                <Chat/>
            </div>
        </div>
    );
}

export default HomePage;