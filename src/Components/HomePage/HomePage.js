import {useContext} from "react";
import {UserContext} from "../../UserContext";
import {Navigate} from "react-router-dom";

function HomePage() {
    const {user,setUser}=useContext(UserContext);
    if (!user) { // check if user not logged in
        return <Navigate to="/login"/>;
    }

    return(
        <div>
            hello world!
        </div>
    );
}

export default HomePage;