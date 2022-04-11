import Users from "./Users";

function GetNicknameById(id) {
    for(let i=0;i<Users.length;i++){
        if(Users[i].username===id){
            return Users[i].nickname;
        }
    }
    return "";

}
export default GetNicknameById;