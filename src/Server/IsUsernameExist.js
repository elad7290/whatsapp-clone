import Users from "./Users";

function IsUsernameExist(username) {
    for(let i=0;i<Users.length;i++){
        if(username===Users[i].username){
            return true;
        }
    }
    return false;

}
export default IsUsernameExist;